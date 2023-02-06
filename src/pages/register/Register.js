import './register.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { AxiosRequest } from '../../requests/request';
import { useForm } from 'react-hook-form';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  

    const [error, setError] = useState(false);
    const onSubmit = async (data) => {
        setError(false)

        // e.preventDefault();
        try {
            const res = await AxiosRequest.post('/api/auth/register', data);

            res.data && window.location.replace('/login');
        } catch (error) {
            setError(true)
        }

    }
    return (
        <div className='register'>
            <span className="registerTitle">Sign up</span>
            <form action="" className="registerForm" onSubmit={handleSubmit(onSubmit)}>


                <label htmlFor="">Username</label>
                <input type="text" className='registerInput' required placeholder="username" {...register("username", { required: true, max: 32, min: 6, maxLength: 32, pattern: /^[a-z0-9_]{3,32}$/i })} />

                <label htmlFor="">Email</label>
                <input type="text" className='registerInput' required placeholder="user@email.com" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                <label htmlFor="">Password</label>
                <input type="password" className='registerInput' required placeholder="password@123" {...register("password", { required: true, max: 32, min: 1, maxLength: 20, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i })} />

                <button className='registerButton' type='submit'>Sign Up</button>

            </form>
            <button className='loginregisterButton'>
                <Link to='/login' className='link'>Login</Link>

            </button>
            {
                error && <span style={{ color: "red", marginTop: "10px" }}>
                    Something went wrong
                </span>

            }

        </div>
    );
}

export default Register;
