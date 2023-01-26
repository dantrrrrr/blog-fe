import React from 'react';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './category.css'
import {useParams} from 'react-router-dom'

const Category = () => {
    // const {category}=useParams();
    // console.log(category)
    return (
        <div className='crypto'>
            <div className="wrapper">
                <Posts  />
                <Sidebar />
            </div>

        </div>
    );
}

export default Category;
