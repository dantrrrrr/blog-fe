import './login.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { AxiosRequest } from '../../requests/request';
import { useForm } from 'react-hook-form';




const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [fetchError, setFetchError] = useState("");
    // const [isLogin,setIsLogin]=useState("");

    const { user, dispatch, isFetching } = useContext(Context);

    const onSubmit = async (data) => {
        // console.log(data);
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await AxiosRequest.post('/api/auth/login', data,
                {
                    headers: { 'Content-Type': 'application/json' },

                }, { withCredentisals: true }
            );
            console.log(res.data)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
            setFetchError(error.response.data);
            console.log(fetchError)
        }
    }
    // console.log("error",errors);


    user && console.log(user)
    return (
        <div className='login'>
            <video src="https://bafybeifxpkakkipzck7t2m575gbhhjpdbqgjaqh6hgubftd73r4pdfpiqm.ipfs.w3s.link/world-2.mp4" autoPlay muted loop></video>
            <div className="loginContainer">
                <h1 className="loginTitle">Login</h1>
                <form action="" className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Email</label>
                    <input type="text" className='loginInput' placeholder="User Name :" {...register("username", { required: true, max: 32, min: 5, maxLength: 15, pattern: /^[a-z0-9_]{3,32}$/i })} />

                    <label htmlFor="">Password</label>
                    <input type="password" className='loginInput' placeholder="Password : " {...register("password", { required: true, max: 32, min: 1, maxLength: 20 })} />

                    <button className='loginButton' disabled={isFetching} >Login</button>
                    {fetchError && (
                        <span className='error'>{fetchError}</span>
                    )}

                </form>
                <button className='registerBtn'>
                    <Link to='/register' className='link'>Register</Link>
                </button>
            </div>

        </div>
    );
}

export default Login;
