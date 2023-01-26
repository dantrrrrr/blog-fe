import './singlePost.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';


export default function SinglePost({ postSlug }) {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [content, setContent] = useState("")
    const [updateMode, setUpdateMode] = useState(false);


    console.log(post)
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`https://blog-api-dantr.vercel.app/api/posts/${postSlug}`)
            setPost(res.data)
        }
        fetchPost()
    }, [postSlug])
    const { user } = useContext(Context)
    console.log(user)
    const handleDelete = async () => {
        try {
            await axios.delete(`https://blog-api-dantr.vercel.app/api/posts/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace('/');

        } catch (error) {

        }
    }
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo && <img src={post.photo} alt="" className="singlePostImg" />}
                {
                    updateMode  ? <input type="text" value={post.title} /> :(

                        
                        <h1 className="singlePostTitle">{post.title}
                    {user?.username === post.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-solid fa-pen-to-square" onclick={() => setUpdateMode(true)}></i>
                            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                        </div>
                    }
                </h1>
                            )
                        }
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author :<Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link> </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>

                </div>
                <p className='singlePostContent'>
                    {parse(`${post.content}`)}
                </p>

            </div>

        </div>
    )
}
