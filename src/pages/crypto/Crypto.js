import React from 'react';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './crypto.css'

const Crypto = () => {
    return (
        <div className='crypto'>
            <div className="wrapper">
                <Posts />
                <Sidebar />
            </div>

        </div>
    );
}

export default Crypto;
