import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    // console.log(users)
    const author = users.find(user => user.id === Number(userId));
    // console.log(users.find(user=>user.id===3))
    return (
        <><span>by{author ? author.name : 'Unknow Author'}</span></>
    )
}

export default PostAuthor