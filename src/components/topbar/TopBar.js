import './topbar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
  const user = false;

  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to='/'>ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to='/'>CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to='/write'>BLOG</Link>
          </li>
          <li className="topListItem">
            hellosawd
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<>
            <Link className=' topListItem link' to='/'>LOGOUT</Link>
            <img className='topImg' src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/288930459_1089490701979560_2981104548759945206_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7caajxzm0UMAX_U4GlZ&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBciwZzeOilq2AW6ypWQWdfSoBDn2ftCZpxvSISioqxHA&oe=63B08B65" alt="" />
          </>

          ) : (<ul className='topList'>
            <li className="topListItem">
              <Link className='link' to='/login'>LOGIN</Link>

            </li>
            <li className="topListItem">
              <Link className='link' to='/register'>REGISTER</Link>

            </li>
          </ul>
          )
        }
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
