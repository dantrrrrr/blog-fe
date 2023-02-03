import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import {useParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function Single() {
    const {postSlug}= useParams()
    // console.log(postSlug)
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    }, [postSlug]);
    return (
        <div className='single'>
            <SinglePost postSlug={postSlug}/>
            <Sidebar />
        </div>
    )
}
