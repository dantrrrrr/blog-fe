import { useSelector, useDispatch } from "react-redux";
import { fetchPost, getPostsError, getPostsStatus, selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { useEffect } from "react";

const Posts = () => {

    const dispatch=useDispatch();
    const posts = useSelector(selectAllPosts)
    const statusPost = useSelector(getPostsStatus)
    const errorPost = useSelector(getPostsError)
    useEffect(() => {
        if(statusPost ==='idle'){
            dispatch(fetchPost())   
        }
    }, [statusPost,dispatch])
    
    console.log(posts)
    const renderedPosts = posts.map(post => (
        <article>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <p className="credit">
                <PostAuthor userId={post.userId} />
            </p>
        </article>
    ))
    return (
        <div>
            <h2>posts</h2>
            {renderedPosts}
        </div>
    )
}

export default Posts