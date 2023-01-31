import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';

const Home = () => {
    // const [searchParams,setSearchParams] = useSearchParams();
   
    // console.log(searchParams.get('user'));
    // console.log(searchParams.get('cat'));
    const {cat}= useParams();
    console.log(cat);
    const [posts,setPosts]=useState([]);


    useEffect(()=>{
        const fetchPosts =async ()=>{
            const res = await axios.get(`https://blog-api-dantr.vercel.app/api/posts?${cat ? "cat="+cat :" "}`);
            console.log(res.data)
            setPosts(res.data)

        }
        fetchPosts();
    },[cat])


    return (
        <>
            <Header />

            <div className='home' >

                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
