import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import {useParams } from 'react-router-dom'
export default function Single() {
    const {postSlug}= useParams()
    console.log(postSlug)
    return (
        <div className='single'>
            <SinglePost postSlug={postSlug}/>
            <Sidebar />
        </div>
    )
}
