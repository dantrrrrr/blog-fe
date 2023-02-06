import "./sidebar.css"
import { Link } from 'react-router-dom'

import { useContext } from "react";
import { Context } from "../../context/Context";
import React from 'react'
import { memo } from "react";


const Sidebar = () => {

    const { categories, randomPost } = useContext(Context)
    // console.log(randomPost)
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                {/* <span className="sidebarTitle">Follow us</span> */}
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                </div>

            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        categories.map((cat) => (
                            <li key={cat._id} className="sidebarListItem"><Link className='link' to={`/${cat.name}`}>{cat.name}</Link></li>

                        ))
                    }

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Đề xuất</span>
                <ul className=" randomPostList">
                    {   
                        randomPost.map((post) => (
                            <Link className='link' key={post._id} to={`/post/${post.slug}`}>
                                <li className="randomPostItem">
                                    <img src={post.photo} className="randomPostImg" alt="" />
                                    <span className="randomPostTitle">{post.title}</span>
                                </li>
                            </Link>

                        ))
                    }

                </ul>
            </div>


        </div>
    )
}
export default memo(Sidebar)
