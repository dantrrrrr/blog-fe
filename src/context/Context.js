import { createContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
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

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])
    //// home
    // const { cat } = useParams();
    const [catSlug, setCatSlug] = useState('');
    // const [filteredCategory, setFilteredCategory] = useState('');
    // console.log(cat);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await AxiosRequest.get(`/api/posts?${catSlug ? "cat=" + catSlug : " "}`);
               // const res = await AxiosRequest.get(`/api/posts`);
                // console.log(res.data);
                setPosts(res.data);
                console.log(posts)
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        }
        console.log('run')
        fetchPosts();
        window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });

    },[catSlug])
    
    // useEffect(() => {

    //     const filterCategory = (cat) => {
    //         const result = posts.filter(post => (post.categories.includes(cat)));
    //         console.log(result)
    //         // console.log(category)
    //         setFilteredCategory(result)
    //         return result
    //     }
    //     filterCategory(catSlug);
    //     window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });

    // }, [catSlug])

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


    return (
        <Context.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
                posts,
                setPosts,
                isLoading,
                setIsLoading,
                categories,
                randomPost,
                catSlug,
                setCatSlug,
               

            }
        }
        >
            {
                children
            }
        </Context.Provider>
    )
}