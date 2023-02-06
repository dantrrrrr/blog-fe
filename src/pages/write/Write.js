import './write.css'
import React, { useContext, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import { Context } from '../../context/Context';
import { AxiosRequest, BASE_URL } from '../../requests/request';

function Write() {
    const editorRef = useRef(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState();
    const [fileURL, setFileURL] = useState();
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState("");

    const { user } = useContext(Context);

    // const log = () => {
    //     setContent(editorRef.current.getContent())
    // };
    // console.log({ title, file, content })
    console.log("render")
    // console.log(fileURL)

    const handleSubmit = async (e) => {
        setContent(editorRef.current.getContent())
        e.preventDefault();
        const newPost = {
            username: user.username,
            title: title,
            content,

        };
        if (file) {

            const data = new FormData();
            const filename = Date.now().toString() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await AxiosRequest.post('/api/upload', data);

            } catch (error) {
                console.log(error.response)
            }
        }
        try {
            const res = await AxiosRequest.post('/api/posts', {
                "title": title,
                "desc": desc,
                "content": content,
                "photo": `${!file ? fileURL : BASE_URL + newPost.photo}`,
                "username": user.username,
                "categories": categories.split(',')
            })
            window.location.replace('/post/' + res.data.slug);
        } catch (error) {
            console.log(error.response.data)

        }

    }
    // console.log(file)

    return (
        <div className='write'>
            <div className="writeImgWrapper">

                {
                    file && !fileURL &&
                    <img src={URL.createObjectURL(file) || undefined} alt="" className="writeImg" />
                }
                {
                    fileURL && !file &&
                    <img src={fileURL} alt="" className="writeImg" />
                }
                {
                    !file && !fileURL &&
                    <label className='fileInputArea' htmlFor="fileInput">
                        <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>
                }
            </div>
            <form className="writeForm" onSubmit={handleSubmit}>

                <div className="writeformGroup">

                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="fileURL" >or paste Image URL here :</label>
                    <input type="text" id="fileURL" className='fileURL' onChange={e => setFileURL(e.target.value)} />
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