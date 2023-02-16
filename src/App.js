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



function App() {
  const { user } = useContext(Context);
  useEffect(() => { 
    Aos.init({duration:1500})
  }, [])
  

  return (
    <>
      <Router>

        {/* <TopBar /> */}
        <Navbar/>

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/:cat"  element={<Home />} />
        
          {/* <Route path="/:category/" exact element={<Category />} /> */}
          <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Navigate to='/login' />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to='/register' />} />
          <Route path="/post/:postSlug" element={<Single />} />
          <Route path="/*"  element={<Navigate to='/' />} />
          <Route path="*"  element={<Navigate to='/' />} />


        </Routes>
        <Footer />

        {/* <Footer/> */}

      </Router>
    </>

  );
}

export default App;
