import './posts.css'
import Post from '../post/Post'
import { Link, useParams } from 'react-router-dom'
export default function Posts({ posts }) {
    const {cat}=useParams();
    
    return (
        <div className="posts">
            {posts.length === 0 ? (
                <>
                    <h1 className='notfound'>There no post found <span><Link to='/'>go back</Link></span></h1>

                </>
            ) : (
                <>
                    <h1 className="postsTitle">{cat }</h1>
                    <div className="postsWrapper">
                        {
                            posts.map(post => (

                                <Post post={post} />
                            ))
                        }

                    </div>
                </>
            )}


        </div>
    )
}
