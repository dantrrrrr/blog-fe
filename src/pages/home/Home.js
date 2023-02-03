import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
// import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'


const Home = () => {
    // const [searchParams,setSearchParams] = useSearchParams();

    // console.log(searchParams.get('user'));
    // console.log(searchParams.get('cat'));
   
    // console.log(isLoading)

    return (
        <>
            <Header />

            <div className='home' >

                {/* <Posts posts={posts} isLoading={isLoading} /> */}
                <Posts  />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
