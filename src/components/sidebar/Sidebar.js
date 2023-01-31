import "./sidebar.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios';
export default function Sidebar() {

    const [categories, setCategories] = useState([]);
    const [randomPost, setRandomPost] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get('https://blog-api-dantr.vercel.app/api/categories');
            const resRandom = await axios.get('https://blog-api-dantr.vercel.app/api/posts/random');
            setCategories(res.data);
            setRandomPost(resRandom.data);

        }
        fetchCategories();

    }, [])
    console.log(randomPost)
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
            {/* <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/313030990_694843032003570_4356907175527848510_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=yp9df6DrySoAX9c4SPm&tn=riMR41esAb_QZrHU&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfBT-YJqlWEvZxTXhf3fG5vvPR4AVhRyzv5e-o1HcvDS5g&oe=63AF8A70" alt="" className="sidebarImg" />
                <p>Bruno hôm nay trông lạ quá các thầy ạ Bruno hôm nay trông lạ quá các thầy ạ Bruno hôm nay trông lạ quá các thầy ạ Bruno hôm nay trông lạ quá các thầy ạ </p>
            </div> */}
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        categories.map((cat) => (
                            <li className="sidebarListItem"><Link className='link' to={`/${cat.name}`}>{cat.name}</Link></li>

                        ))
                    }

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Đề xuất</span>
                <ul className=" randomPostList">
                    {
                        randomPost.map((post) => (
                            <Link className='link' to={`/post/${post.slug}`}>
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
