import './singlePost.css'
// import { useParams } from 'react-router-dom';
import { useState, useEffect,useRef } from 'react';
import axios from 'axios'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Editor } from '@tinymce/tinymce-react';
// import { useRef } from 'react';
import Loading from 'react-loading'



export default function SinglePost({ postSlug }) {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("")
    // const [desc, setDesc] = useState("")
    const [content, setContent] = useState("")
    const [updateMode, setUpdateMode] = useState(false);
    const editorRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true)

    // console.log(updateMode)
    // console.log(post)
    useEffect(()=>{
        window.scrollTo({top:200,bottom:0,behavior:"smooth"});
    },[isLoading])
    useEffect(() => {
        const fetchPost = async () => {
            
            try {
                const res = await axios.get(`https://blog-api-dantr.vercel.app/api/posts/${postSlug}`)
                setPost(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPost()
    }, [postSlug])
    const { user } = useContext(Context)
    // console.log(user)
    const handleDelete = async () => {
        try {
            await axios.delete(`https://blog-api-dantr.vercel.app/api/posts/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace('/');
            setUpdateMode(false)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    const handleUpdate = async () => {
        setIsLoading(true)

        try {
            await axios.put(`https://blog-api-dantr.vercel.app/api/posts/${post._id}`, {
                username: user.username,
                title,
                content
            })
            // window.location.reload()

        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false);
            setUpdateMode(false);
        }
    }
    return (
        <div className='singlePost'>
            {
                isLoading ? (<Loading className='loading' type='spin' color='white' height={100} width={100} />)
            
            :(
            <div className="singlePostWrapper">
                {post.photo && <img src={post.photo} alt="" className="singlePostImg" />}
                {
                    updateMode ? (<input type="text" className='singlePostTitleInput' value={title} onChange={(e) => setTitle(e.target.value)} />)
                        : (
                            <h1 className="singlePostTitle">{title}
                                {user?.username === post.username || user.isAdmin ? (
                                    <div className="singlePostEdit" >
                                        <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => {

                                            setUpdateMode(true)
                                        }}></i>
                                        <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                                    </div>
                                ) : (
                                    <></>
                                )
                                }
                            </h1>
                        )
                }
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link> </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>

                </div>
                
                {updateMode
                    ? (<Editor
                        className="singlePostContentInput"
                        id='content'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={content}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        ref={editorRef}
                        onChange={() => setContent(editorRef.current.getContent())}
                    />)
                    : (

                        <div className='singlePostContent'>
                            {parse(`${content}`)}
                        </div>
                    )}
                {updateMode &&
                    <button className='singlePostButton' onClick={handleUpdate}>Update</button>
                }

            </div>
            )}

        </div>
    )
}
