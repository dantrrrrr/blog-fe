import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])
    //// home
    const { cat } = useParams();
    // console.log(cat);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`https://blog-api-dantr.vercel.app/api/posts?${cat ? "cat=" + cat : " "}`);
                // console.log(res.data);
                setPosts(res.data);
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        window.scrollTo({ top: 300, left: 0, behavior: 'smooth' });

    }, [cat])
    ////side bar
    const [categories, setCategories] = useState([]);
    const [randomPost, setRandomPost] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get('https://blog-api-dantr.vercel.app/api/categories');
            const resRandom = await axios.get('https://blog-api-dantr.vercel.app/api/posts/random');
            setCategories(res.data);
            setRandomPost(resRandom.data);

        }
        fetchCategories();

    }, [])

    return (
        <Context.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
                posts,
                isLoading,
                categories,
                randomPost

            }
        }
        >
            {
                children
            }
        </Context.Provider>
    )
}