import axios from "axios";

// const { user } = useContext(Context);
export const BASE_URL = 'https://blog-api-dantr.vercel.app'
export const AxiosRequest = axios.create({
    baseURL: BASE_URL
})
// { withCredentials: true }