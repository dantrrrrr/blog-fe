import './singlePost.css'

// import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Editor } from '@tinymce/tinymce-react';
// import { useRef } from 'react';
import { FiTrash2, FiEdit } from "react-icons/fi"
import Loading from 'react-loading'
import { AxiosRequest } from '../../requests/request';
import { memo } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { useSelector } from 'react-redux';
import { getPostBySlug, getPostsError, getPostsStatus, } from '../../features/posts/postsSlice';



const SinglePost = ({ postSlug }) => {

    const [updateMode, setUpdateMode] = useState(false);
    const editorRef = useRef(null);
    const status = useSelector(getPostsStatus);
    const post = useSelector(state => getPostBySlug(state, postSlug));
    // console.log(status)
    const [openDelete, setOpenDelete] = useState(false);
    const [data, setData] = useState({
        title: '',
        content: ''
    });
    const { user, headers } = useContext(Context)
    // console.log(!!user)

    const errorPost = useSelector(getPostsError)

    useEffect(() => {
        // dispatch(fetchPost())
        post && setData(prev => ({ ...prev, title: post.title, content: post.content }))

        window.scrollTo({ top: 0, bottom: 0, behavior: "smooth" });

    }, [post])
    useEffect(() => {
        document.title = data.title;
    }, [])

    const handleDelete = async () => {
        try {
            await AxiosRequest.delete(`/api/posts/${post._id}`, {
                headers: headers
            }, {
                data: { username: user.username }
            })
            window.location.replace('/');
            setUpdateMode(false)
        } catch (error) {
            console.log(error)
        } finally {
            // setIsLoading(false)
        }
    }
    const handleUpdate = async () => {
        // setIsLoading(true)

        try {
            await AxiosRequest.put(`/api/posts/${post._id}`, {
                username: user.username,
                // slug: data.title.split(' ').join('-'),
                ...data
            }, { headers: headers })
            //  window.location.replace(`/${}`)

        } catch (error) {
            console.log(error)
        } finally {
            // setIsLoading(false);
            setUpdateMode(false);
        }
    }
    return (
        <div className='singlePost'>
            {openDelete && <div className="deletePostOption">
                <div className="deleteCard">
                    <h2>Confirm delete ?</h2>
                    <div className="optionsButton">
                        <button className='deleteBtn' onClick={handleDelete}>Delete</button>
                        <button className='cancelBtn' onClick={() => setOpenDelete(!openDelete)}>Cancel</button>
                    </div>
                </div>
            </div>
            }
            {
                status === 'loading' || status === 'idle' ? (<Loading className='loading' type='spin' color='white' height={50} width={50} />)

                    : (
                        <div className="singlePostWrapper">

                            <div className="pathSinglePost">
                                <Link className="link" to='/'>Home</Link>
                                <FiChevronRight />
                                <Link className="link" to={`/post/${postSlug}`}>{post.title}</Link>
                            </div>
                            {post.photo && <img src={post.photo} alt="" className="singlePostImg" />}
                            {
                                updateMode ? (<input type="text" className='singlePostTitleInput' value={data.title} onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))} />)
                                    : (
                                        <h1 className="singlePostTitle">{data.title}
                                            {user?.username === post.username || user?.isAdmin ? (
                                                <div className="singlePostEdit" >

                                                    <FiEdit className='singlePostIcon edit' onClick={() => {
                                                        setUpdateMode(true)
                                                    }} />
                                                    <FiTrash2 className='singlePostIcon trash' onClick={() => setOpenDelete(!openDelete)} />

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
                                    initialValue={data.content} //init value
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
                                    onChange={() => setData(prev => ({ ...prev, content: editorRef.current.getContent() }))}
                                />)
                                : (

                                    <div className='singlePostContent'>
                                        {parse(`${data.content}`)}
                                    </div>
                                )}
                            {updateMode &&
                                <button className='singlePostButton' onClick={handleUpdate}>Update</button>
                            }

                        </div>
                    )
            }


        </div >
    )
}
export default memo(SinglePost)