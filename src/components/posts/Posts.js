import './posts.css';
import Post from '../post/Post';
import { Link, useParams } from 'react-router-dom';
import Loading from 'react-loading';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPostByCat, getPostsStatus, selectAllPosts } from '../../features/posts/postsSlice';
export default function Posts() {

    const { cat } = useParams();
    const posts = useSelector(state => getPostByCat(state, cat))
    const status = useSelector(getPostsStatus);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [posts]);


    return (
        <div className="posts">
            {
                status ==='loading' ? (<Loading className='loading' type='spin' color='white' height={100} width={100} />)
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
                                        (
                                            posts.map(post => (

                                                <Post key={post._id} post={post} />
                                            ))
                                        )

                                    }

                                </div>
                            </>
                        ))}


        </div>
    )
}
