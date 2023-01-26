import './posts.css'
import Post from '../post/Post'
export default function Posts({posts}) {
    return (
        <div className="posts">
            <h1 className="postsTitle">{}</h1>
            <div className="postsWrapper">
                {
                    posts.map(post=>(

                        <Post post={post} />
                    ))
                }
             
            </div>

            
        </div>
    )
}
