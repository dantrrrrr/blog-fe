import './login.css';
import {Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios'
import { AxiosRequest } from '../../requests/request';


const Login = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [fetchError,setFetchError]=useState("");
    // const [isLogin,setIsLogin]=useState("");

    const {user,dispatch,isFetching} =useContext(Context);
  


    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});

        try {
            const res = await AxiosRequest.post('/api/auth/login',{
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
        //    console.log(error.response.data)
           setFetchError(error.response.data);
           console.log(fetchError)
                
        }finally{
            
        }

    }   
    user && console.log(user)
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter username .'className='loginInput' onChange={e=>setUsername(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Password ' className='loginInput' onChange={e=>setPassword(e.target.value)}/>
              <button className='loginButton' disabled={isFetching} >Login</button>
              {fetchError && (
                <span className='error'>{fetchError}</span>
              )}

            </form>
            <button className='registerBtn'>
                <Link to='/register' className='link'>Register</Link>
            </button>
            
        </div>
    );
}

export default Login;
