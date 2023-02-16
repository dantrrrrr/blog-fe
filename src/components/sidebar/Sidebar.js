import "./sidebar.css"
import { Link } from 'react-router-dom'

import { useContext } from "react";
import { Context } from "../../context/Context";
import React from 'react'
import { memo } from "react";
import {FiFacebook,FiInstagram,FiTwitter,FiLinkedin} from 'react-icons/fi'

const Sidebar = () => {

    const { categories, randomPost } = useContext(Context)
    // console.log(randomPost)
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                {/* <span className="sidebarTitle">Follow us</span> */}
                <div className="sidebarSocial">
                   <FiFacebook className="sidebarIcon"/>
                   <FiInstagram className="sidebarIcon"/>
                   <FiTwitter className="sidebarIcon"/>
                   <FiLinkedin className="sidebarIcon"/>
                
                </div>

            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        categories.map((cat) => (
                            <li key={cat._id} className="sidebarListItem"   data-aos='fade-left'><Link className='link' to={`/${cat.name}`}>{cat.name}</Link></li>

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
                                <li className="randomPostItem"   data-aos='fade-up'>
                                    <img src={post.photo} className="randomPostImg" alt="" />
                                    <p className="randomPostTitle">{post.title}</p>
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
