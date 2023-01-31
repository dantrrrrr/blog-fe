import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const TopBar = () => {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className='topbar'>
            <div className="topLeft">
                <Link className='link' to='/'>
                    <h1 className='topBrand'>dantr</h1>
                    {/* <img src="https://blog-api-dantr.vercel.app/images/dantr_logo.png" alt="" className="topLogo" /> */}
                </Link>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className='link' to='/'>home</Link></li>
                    <li className="topListItem"><Link className='link' to='/news'>news</Link></li>
                    <li className="topListItem"><Link className='link' to='/crypto'>crypto</Link></li>
                    {
                        user?.isAdmin &&
                        <li className="topListItem"><Link className='link' to='/write'>New post</Link></li>
                    }
                    <li className="topListItem">About</li>
                </ul>
            </div>
            <div className="topRight">
                <label htmlFor="searchInput">

                    <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
                </label>
                {/* <input type="text" className='searchInput' id='searchInput' placeholder='Type for search .....' /> */}
                {user

                    ? (
                        <>
                            <Link to='/settings'>
                                <img src={user.profilePicture} alt="" className='profilePicture' />
                            </Link>

                            <span className='topRightBtn ' onClick={handleLogout}>
                                <Link className='link' to='/login'>Log out</Link>
                            </span>
                        </>

                    ) : (<span className='topRightBtn'>
                        <Link className='link' to='/login'>Login</Link>
                    </span>)}

                <div className="topLanguage">
                    <span>VN</span>
                    <span>|</span>
                    <span>EN</span>
                </div>

            </div>

        </div>
    )
}

export default TopBar