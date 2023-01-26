import './register.css';
import {Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username,setUsername ]=useState();
    const [email,setEmail ]=useState();
    const [password,setPassword ]=useState();
    const [error,setError ]=useState(false);
    const handleSubmit =async (e)=>{
        setError(false)
        e.preventDefault();
        try {
            const res = await axios.post('https://blog-api-dantr.vercel.app/api/auth/register',{
                username,
                email,
                password
            });
            
            res.data && window.location.replace('/login');
        } catch (error) {
            setError(true)
        }
       
    }
    return (
        <div className='register'>
            <span className="registerTitle">Sign up</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder='Enter Username .'className='registerInput' />
                <label htmlFor="">Email</label>
                <input type="email"  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email .'className='registerInput' />
                <label htmlFor="">Password</label>
                <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password ' className='registerInput' />
              <button className='registerButton' type='submit'>Sign Up</button>

            </form>
            <button className='loginregisterButton'>
            <Link to='/login' className='link'>Login</Link>

            </button>
            {
                error && <span style={{color:"red" ,marginTop:"10px"}}>Something went wrong</span>

            }
            
        </div>
    );
}

export default Register;
