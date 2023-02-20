import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const [userId, setUserId] = useState('');
    const users = useSelector(selectAllUsers);
        // console.log(users)

    const onSavedPostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }
    const canSave =Boolean(title) && Boolean(content) && Boolean(userId);
    const usersOptions = users.map(user => (
        <option
            key={user.id}
            value={user.id}
        >
            {user.name}
        </option>
    ))
    return (
        <section>
            <h2>From post new</h2>
            
            <form action="">
                <label htmlFor="postTitle">Post title :</label>
                <input type="text" id="postTitle" className="" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="postContent">Post Content :</label>
                <input type="text" id="postContent" className="" value={content} onChange={(e) => setContent(e.target.value)} />

                <label htmlFor="postAuthor">Author :</label>
                <select name="" id="postAuthor" value={userId} onChange={e => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}

                </select>
                <button type="button" disabled={!canSave} onClick={onSavedPostClicked}>Save post</button>
            </form>
        </section>
    )
}

export default AddPostForm