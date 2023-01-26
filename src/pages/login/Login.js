import './login.css';
import {Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios'


const Login = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const {user,dispatch,isFetching} =useContext(Context);
  
    // useEffect(()=>{
    //     const tessting= async ()=>{
    //         const res =await axios.post("http://localhost:5000/api/auth/login",{username:'admin',password:'01022001'})
    //         console.log(res.data)
    //     }
    //     tessting()
    // },[])
    // console.log(dispatch)

    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});

        try {
            const res = await axios.post('https://blog-api-dantr.vercel.app/api/auth/login',{
                username,
                password,
            },
            {
                headers:{'Content-Type': 'application/json'}
            }
            );
           // console.log(res.data)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            
            
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
           console.log(error.response.error)
                
        }

    }   
    console.log(user)
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter username .'className='loginInput' onChange={e=>setUsername(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Password ' className='loginInput' onChange={e=>setPassword(e.target.value)}/>
              <button className='loginButton' disabled={isFetching} >Login</button>

            </form>
            <button className='registerBtn'>
                <Link to='/register' className='link'>Register</Link>
            </button>
            
        </div>
    );
}

export default Login;
