import './write.css'
import React, { useContext, useEffect, useReducer, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import { Context } from '../../context/Context';
import { AxiosRequest, BASE_URL } from '../../requests/request';
import { Web3Storage } from 'web3.storage'

function Write() {
    const editorRef = useRef(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [files, setFiles] = useState();
    const [fileURL, setFileURL] = useState('');
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState("");

    const { user, headers } = useContext(Context);
    const [uploading, setUploading] = useState(false);

    // const log = () => {
    //     setContent(editorRef.current.getContent())
    // };
    // console.log({ title, file, content })
    // console.log("render")
    // console.log(fileURL)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUzRUI2MGIzZDMyRTI2NEIwMWE2MzQ1MDBBMjRhMDA5ZDNGYTUwMGMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY1Njg2MjM1MTYsIm5hbWUiOiJibG9nLXVwbG9hZCJ9.BX0zurA_vb5aR6BVjSnJV8FMt7k_sWTBaUAU6-veDO0";


    const handleSubmit = async (e) => {
        setContent(editorRef.current.getContent())
        e.preventDefault();


        try {
            const res = await AxiosRequest.post('/api/posts', {
                "title": title,
                "desc": desc,
                "content": content,
                //  "photo": `${!files ? fileURL : BASE_URL + "newPost.photo"}`,
                "photo": fileURL,
                "username": user.username,
                "categories": categories.split(',')
            },
                { headers: headers })
            window.location.replace('/post/' + res.data.slug);
        } catch (error) {
            console.log(error.response.data.message)

        }

    }
    const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])

    const handleUpload = async (e) => {
        e.preventDefault();
        const client = new Web3Storage({ token })
        const cid = await client.put(files, {
            onRootCidReady: () => {
                showMessage('> 📡 Uploading files to server ! ')
                setUploading(true)
                console.log(uploading)

            },
            // onStoredChunk: bytes => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
        })
        setFileURL(`https://${cid}.ipfs.dweb.link/${files[0].name}`)
        showMessage(`> ✅ File has been upload successfully `)
        setUploading(false)
        console.log(uploading)
        // console.log(`https://${cid}.ipfs.dweb.link/${files[0].name}`)


    }
    console.log(fileURL);
    console.log(files);
    console.log(uploading)
    return (
        <div className='write'>

            <div className="writeImgWrapper">


                {/* if have file check if file upload to server or not */}
                {files
                    ? (!uploading
                        ? (
                            <>
                                <img src={URL.createObjectURL(files[0])} alt="img-upload" />
                                <h1>please upload file to server</h1>
                            </>

                        )
                        : (
                            <img src={fileURL} alt="img-upload" />

                        ))
                    :


                    (<label className='fileInputArea' htmlFor="fileInput">
                        <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>)
                }

            </div>
            {fileURL.length === 0 && <form className='uploadImageForm' onSubmit={handleUpload}>
                <input type="file" accept="image/png, image/jpg, image/jpeg" id="fileInput" style={{ display: "none" }} onChange={(e) => setFiles(e.target.files)} />
                <input type="submit" value="submit" />
                {
                    messages.map((m, i) => <div key={m + i}>{m}</div>)
                }
            </form>}
            <form className="writeForm" onSubmit={handleSubmit}>

                <div className="writeformGroup">

                    {/* <input type="file" accept="image/png, image/jpg, image/jpeg" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} /> */}

                    {/* <label htmlFor="fileURL" >or paste Image URL here :</label>
                    <input type="text" id="fileURL" className='fileURL' onChange={e => setFileURL(e.target.value)} /> */}
                    <label htmlFor="title">
                        Title :
                    </label>
                    <input type="text" id="title" className='writeInput' placeholder='....' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="desc">
                        Description
                    </label>
                    <input type="text" id="desc" className='writeInput' placeholder='Desc ....' autoFocus={true} onChange={(e) => setDesc(e.target.value)} />
                    <label htmlFor="categories">
                        Category : (split by ' , ')
                    </label>
                    <input type="text" id="categories" className='writeInput' placeholder='Category ....' autoFocus={true} onChange={(e) => setCategories(e.target.value)} />

                </div>
                <div className="writeFormGroup">
                    {/* <textarea placeholder='Whats news' className='writeInput writeText' type='text' ></textarea> */}
                    <Editor

                        id='content'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        ref={editorRef}
                        onChange={() => setContent(editorRef.current.getContent())}
                    />
                </div>
                {/* <input type="submit" value="Submit" /> */}
                <button className='writeSubmit' type='submit' > Publish </button>
            </form>

            {/* <button onClick={log}>Log editor content</button> */}
        </div>
    )
}

export default Write