import "./sidebar.css"
import { Link } from 'react-router-dom'

import { useContext } from "react";
import { Context } from "../../context/Context";
import React from 'react'
import { memo } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Sidebar = () => {

    const { categories, randomPost } = useContext(Context)
    // console.log(randomPost)
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                {/* <span className="sidebarTitle">Follow us</span> */}
                <div className="sidebarSocial">
                    <a className="link" target="_blank" rel="noopener noreferrer" href='https://facebook.com/dantrrrrr'>
                        <FiFacebook className="sidebarIcon" />

                    </a>
                    <a className="link" target="_blank" rel="noopener noreferrer" href='https://instagram.com/dantrrrrr'>

                        <FiInstagram className="sidebarIcon" />
                    </a>

                    <a className="link" target="_blank" rel="noopener noreferrer" href='https://twitter.com/dantrrrrr'>

                        <FiTwitter className="sidebarIcon" />
                    </a>

                    <a className="link" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/dantrrrrr/'>

                        <FiLinkedin className="sidebarIcon" />
                    </a>


                </div>

            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList" >
                    {
                        categories.map((cat) => (
                            <li key={cat._id} className="sidebarListItem" ><Link className='link' to={`/category/${cat.name}`}>{cat.name}</Link></li>

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
                                <li className="randomPostItem" data-aos='fade-up'>
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
