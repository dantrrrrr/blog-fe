import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update </div>
                    <div className="settingsDeleteTitle">Delete </div>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile picture</label>
                    <div className="settingsPP">
                        <img className='' src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/320705530_536345018377652_5549898253692000245_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7ecAiogXHmsAX_y5Eo4&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfCAbePvzTeb4QX7sXMkU659p2w2GRfabiN_vMsPQb9S7Q&oe=63B21A26" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" name="" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label htmlFor="">Username :</label>
                    <input type="text" placeholder='dantr' />
                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder='dantr@gmail.com' />
                    <label htmlFor="">Password :</label>
                    <input type="password" />
                    <button className='settingsUpdate'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;
