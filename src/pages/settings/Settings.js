import { useContext, useState } from 'react';
// import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './settings.css';
// import axios from 'axios';
import { AxiosRequest } from '../../requests/request';

const Settings = () => {
    const { user,dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("**********");
    // console.log(username,email,password);

    // console.log(user)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            username,
            email,
            password


        };
        // if (file) {

        //     const data = new FormData();
        //     const filename = Date.now().toString() + file.name;
        //     data.append('name', filename);
        //     data.append('file', file);
        //     updatedUser.profilePicture = filename;
        //     try {
        //         await axios.post('https://blog-api-dantr.vercel.app/api/upload', data);

        //     } catch (error) {
        //         console.log(error.response)
        //     }
        // }
        try {
            await AxiosRequest.put(`/api/user/${user._id}`,
                updatedUser
            )
            dispatch({type:"LOGOUT"});
                // localStorage.setItem('user',JSON.stringify(user))
           
            window.location.replace('/settings/');
        } catch (error) {
            console.log(error.response.data)

        }

    }
    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingsTitle">
                    {/* <div className="settingsUpdateTitle">Update </div>
                    <div className="settingsDeleteTitle">Delete </div> */}
                    <h2 className=''>Setting Account</h2>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile picture</label>
                    <div className="settingsPP">
                        <img className='' src={user.profilePicture} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input
                            type="file"
                            name=""
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange= {(e)=>setFile(e.targer.files[0])}
                        />
                    </div>
                    <label htmlFor="">Username :</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder={user.email}  onChange={e=>setEmail(e.target.value)} />
                    <label htmlFor="">Password :</label>
                    <input type="password" placeholder='password'  onChange={e=>setPassword(e.target.value)}/>
                    <button className='settingsUpdate'>Update</button>
                </form>
            </div>
            {/* <Sidebar /> */}
        </div>
    );
}

export default Settings;
