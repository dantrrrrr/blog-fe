import './login.css';
import {Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email .'className='loginInput' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Password ' className='loginInput' />
              <button className='loginButton'>Login</button>

            </form>
            <button className='registerBtn'>
                <Link to='/register' className='link'>Register</Link>
            </button>
            
        </div>
    );
}

export default Login;
