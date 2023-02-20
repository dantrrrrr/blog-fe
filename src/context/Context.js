import { createContext, useEffect, useReducer, useState } from "react";
import { AxiosRequest } from "../requests/request";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    //set user to local storage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])


    // const [posts, setPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const res = await AxiosRequest.get(`/api/posts?${catSlug ? "cat=" + catSlug : " "}`);

    //             setPosts(res.data);

    //         } catch (error) {

    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     console.log('run')
    //     fetchPosts();
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // },[catSlug])



    ////side bar
    const [categories, setCategories] = useState([]);
    const [randomPost, setRandomPost] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await AxiosRequest.get('/api/categories');
            const resRandom = await AxiosRequest.get('/api/posts/random');
            setCategories(res.data);
            setRandomPost(resRandom.data);

        }
        fetchCategories();

    }, [])
    //auth
    const [headers, setHeaders] = useState({})
    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('user'))
        var accessToken;
        if (data !== null) {
            accessToken = data.accessToken;
        }
        setHeaders(prev => ({
            ...prev,
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }))

    }, [state.user]);



    return (
        <Context.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
                categories,
                randomPost,
                headers
            }
        }
        >
            {
                children
            }
        </Context.Provider>
    )
}