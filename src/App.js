import Home from "./pages/home/Home";
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import styled from 'styled-components'
import { useContext } from "react";
import { Context } from "./context/Context";
import Navbar from "./components/navbar/Navbar";


function App() {
  const { user } = useContext(Context);
  

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
          <Route path="/write" element={user?.isAdmin ? <Write /> : <Navigate to='/login' />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to='/register' />} />
          <Route path="/post/:postSlug" element={<Single />} />

        </Routes>
        <Footer />

        {/* <Footer/> */}

      </Router>
    </>

  );
}

export default App;
