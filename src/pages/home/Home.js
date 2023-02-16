import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosRequest } from '../../axios/request';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
// import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './home.css'


const Home = () => {
  
    return (
        <>
            {/* <Header /> */}

            <div className='home' >

                <Posts  />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
