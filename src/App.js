import Home from "./pages/home/Home";
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import './app.css'
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import Navbar from "./components/navbar/Navbar";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Posts from "./features/posts/Posts";
import AddPostForm from "./features/posts/AddPostForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, getPostsError, getPostsStatus, selectAllPosts } from "./features/posts/postsSlice";



function App() {
  const { user } = useContext(Context);

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  const dispatch = useDispatch()
  const statusPost = useSelector(getPostsStatus)
  // const errorPost = useSelector(getPostsError)
  useEffect(() => {
    if (statusPost === 'idle') {
      dispatch(fetchPost())
      console.log('getting data .....')
    }
  }, [statusPost, dispatch])
  return (
    <>
      {/* <AddPostForm /> */}

      {/* <Posts /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:cat" element={<Home />} />
          <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Navigate to='/login' />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to='/register' />} />
          <Route path="/post/:postSlug" element={<Single />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
