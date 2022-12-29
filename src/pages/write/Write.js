import './write.css'
import React from 'react'

function Write() {
    return (
        <div className='write'>
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/321445950_1107613553257914_8986903390386416256_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MMIO3JqHMo0AX8U2466&_nc_oc=AQmbnyxPuCStBn1yfEO9k2IdU0CWP4OKeosX4WJTRZCWLxn4qyVYJX9bDnjad0sc6mskqaim3-CtjmPT1nikYw8C&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfC0PbQUNUOA-G2VxZl86amYDLgQbB-M6Hj9ygdIEsABPw&oe=63B1BE18" alt="" className="writeImg" />
            <from className="writeForm">

                <div className="writeFromGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" id="" className='writeInput' placeholder='Title ....' autoFocus={true} />

                </div>
                <div className="writeFromGroup">
                    <textarea placeholder='Whats news' className='writeInput writeText' type='text' ></textarea>
                </div>
                <button className='writeSubmit'> Publish </button>
            </from>
        </div>
    )
}

export default Write