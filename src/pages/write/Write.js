import './write.css'
import React, { useContext, useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
function Write() {
    const editorRef = useRef(null);
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [file, setFile] = useState();
    const [content, setContent] = useState();

    const { user } = useContext(Context);

    const log = () => {
        setContent(editorRef.current.getContent())
    };
    console.log({ title, file, content })

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
                await axios.post('https://blog-api-dantr.vercel.app/api/upload', data);

            } catch (error) {
                console.log(error.response)
            }
        }
        try {
            const res = await axios.post('https://blog-api-dantr.vercel.app/api/posts', {
                "title": title,
                "desc": desc,
                "content": content,
                "photo":"https://blog-api-dantr.vercel.app/images/"+newPost.photo,
                "username": user.username,
                "categories": ["news", "crypto", "insight"]
            })
            window.location.replace('/post/' + res.data.slug);
        } catch (error) {
            console.log(error.response.data)

        }

    }
    const handleTest = () => {
        console.log('fine')
    }
    return (
        <div className='write'>{
            file &&
            <img src={URL.createObjectURL(file)|| undefined} alt="" className="writeImg" />
        }
            <form className="writeForm" onSubmit={handleSubmit}>

                <div className="writeformGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" id="title" className='writeInput' placeholder='Title ....' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" id="title" className='writeInput' placeholder='desc ....' autoFocus={true} onChange={(e) => setDesc(e.target.value)} />

                </div>
                <div className="writeFromGroup">
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