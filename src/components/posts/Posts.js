import './posts.css';
import Post from '../post/Post';
import { Link, useParams } from 'react-router-dom';
import Loading  from 'react-loading';
export default function Posts({ posts, isLoading }) {
    const { cat } = useParams();

    return (
        <div className="posts">
            {
                isLoading ? (<Loading className='loading' type='spin' color='white' height={100} width={100} />)
                    : (

                        posts.length === 0 ? (
                            <>
                                <h1 className='notfound'>There no post found <span><Link to='/'>go back</Link></span></h1>

                            </>
                        ) : (
                            <>
                                <h1 className="postsTitle">{cat}</h1>
                                <div className="postsWrapper">
                                    {
                                        posts.map(post => (

                                            <Post  key={post._id} post={post} />
                                        ))
                                    }

                                </div>
                            </>
                        ))}


        </div>
    )
}
