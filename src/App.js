import Home from "./pages/home/Home";
import SideBarLeft from './components/sideBarLeft/SideBarLeft'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Category from './pages/category/Category'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import styled from 'styled-components'
import { useContext } from "react";
import { Context } from "./context/Context";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Container = styled.div`
 
`
function App() {
  const { user } = useContext(Context);
  

  return (
    <Container>
      <Router>
        {/* <SideBarLeft /> */}

        <TopBar />

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
    </Container>

  );
}

export default App;
