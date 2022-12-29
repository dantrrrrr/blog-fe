import './register.css';
import {Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='register'>
            <span className="registerTitle">Sign up</span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="email" placeholder='Enter Username .'className='registerInput' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email .'className='registerInput' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Password ' className='registerInput' />
              <button className='registerButton'>Sign Up</button>

            </form>
            <button className='loginregisterButton'>
            <Link to='/login' className='link'>Login</Link>

            </button>
            
        </div>
    );
}

export default Register;
