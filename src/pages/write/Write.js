import './write.css'
import React, { useContext, useEffect, useReducer, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import { Context } from '../../context/Context';
import { AxiosRequest } from '../../requests/request';
import { Web3Storage } from 'web3.storage'

import { AiOutlineCloudUpload } from 'react-icons/ai'
function Write() {

    // console.log("render")
    const editorRef = useRef(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [files, setFiles] = useState();
    const [fileURL, setFileURL] = useState('');
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState("");

    const { user, headers } = useContext(Context);
    const [uploading, setUploading] = useState(false);

    const canSave = Boolean(title) && Boolean(desc) && Boolean(fileURL) && Boolean(content) && Boolean(categories);
    // console.log(canSave) 
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDczNDhmNmNCMzcxNGYzMjc5MEJiOTU0Yzk5MzRCNjE1NDhmZkY3MTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY4MTg0ODU1ODcsIm5hbWUiOiJibG9nLXN0b3JhZ2UifQ.fZbzvp62XvC8jvbxEv6bWDx7xAWg3iT-Do8NaAmS7JI";
    //dantrcrypto@gmail.com

    const handleSubmit = async (e) => {
        setContent(editorRef.current.getContent())
        e.preventDefault();


        try {
            const res = await AxiosRequest.post('/api/posts', {
                "title": title,
                "desc": desc,
                "content": content,
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
        showMessage('> Waiting for upload...')

        const client = new Web3Storage({ token })
        const cid = await client.put(files, {
            onRootCidReady: () => {
                showMessage('> Uploading files to server ! ')
                setUploading(true)
                // console.log(uploading)

            },
            // onStoredChunk: bytes => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
        })
        setFileURL(`https://${cid}.ipfs.w3s.link/${files[0].name}`)
        showMessage(`> ✅ File has been upload successfully `)
        setUploading(false)
       

    }
    // console.log(fileURL);
    // console.log(files);
    // console.log(uploading)
    return (
        <div className='write'>
            <div className="writeWrapper">
                <div className="headerWrapper">

                    <div className="writeImgWrapper">
                        {/* if have file check if file upload to server or not */}
                        {files
                            ? (
                                <>
                                    <img className='imgUploaded' src={URL.createObjectURL(files[0])} alt="img-upload" />
                                    {fileURL.length === 0
                                        ? (
                                            <>
                                                <label className='serverUpload' htmlFor="serverUploadFile">
                                                    <AiOutlineCloudUpload className='serverUploadIcon' />
                                                </label>
                                                <div className='uploadStatus'>
                                                    {
                                                        messages.map((m, i) => <div key={m + i}>{m}</div>)
                                                    }
                                                </div>
                                            </>
                                        )
                                        : (
                                            <div className="uploadStatus">
                                                <span> {`> File upload successfully`}</span>
                                            </div>
                                        )
                                    }
                                </>
                            )
                            :
                            (<label className='fileInputArea' htmlFor="fileInput">
                                <i className=" uplifeIcon fa-solid fa-plus"></i>
                            </label>)
                        }
                    </div>
                    {
                        fileURL.length === 0 &&
                        <form className='uploadImageForm' onSubmit={handleUpload}>

                            <input type="file" accept="image/png, image/jpg, image/jpeg" id="fileInput" style={{ display: "none" }} onChange={(e) => setFiles(e.target.files)} />
                            <input type="submit" style={{ display: "none" }} id='serverUploadFile' value="submit" />

                        </form>
                    }
                    <form className="writeForm" onSubmit={handleSubmit}>
                        <div className="formInfo">

                            <label htmlFor="title">
                                Title :
                            </label>
                            <input type="text" id="title" className='writeInput' placeholder='....' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="desc">
                                Description :
                            </label>
                            <input type="text" id="desc" className='writeInput' placeholder='....' autoFocus={true} onChange={(e) => setDesc(e.target.value)} />
                            <label htmlFor="categories">
                                Category : (split by ' , ')
                            </label>
                            <input type="text" id="categories" className='writeInput' placeholder='news,coin....' autoFocus={true} onChange={(e) => setCategories(e.target.value)} />

                        </div>
                        <button className='writeSubmit' disabled={!canSave} type='submit' > Publish </button>
                    </form>
                </div>

                <div className="formContent">
                    <label htmlFor="">Content</label>
                    {/* <textarea placeholder='Whats news' className='writeInput writeText' type='text' ></textarea> */}
                    <Editor
                        className="content"
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
            </div>

        </div>
    )
}

export default Write