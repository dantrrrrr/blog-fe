import "./sidebar.css"
import {Link} from 'react-router-dom'

export default function Sidebar() {
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
                    <li className="sidebarListItem"><Link className='link' to='?cat=sport'>Sport</Link></li>
                    <li className="sidebarListItem"><Link className='link' to='?cat=Woman'>Woman</Link></li>
                    <li className="sidebarListItem"><Link className='link' to='?cat=girl'>Girl</Link></li>
                    <li className="sidebarListItem"><Link className='link' to='?cat=bitch'>bitch</Link></li>
                    <li className="sidebarListItem"><Link className='link' to='?cat=mu'>mu</Link></li>
                    <li className="sidebarListItem"><Link className='link' to='?cat=pussy'>pussy</Link></li>
                </ul>
            </div>
           
        </div>
    )
}
