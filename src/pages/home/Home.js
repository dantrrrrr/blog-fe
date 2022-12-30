import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'
const Home = () => {
    return (
        <>
            {/* <TopBar /> */}
            {/* //<Header /> */}
            <div className='home'>
                <Posts />
                {/* <Sidebar /> */}
            </div>
        </>
    );
}

export default Home;
