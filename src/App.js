import Home from "./pages/home/Home";
import SideBarLeft from './components/sideBarLeft/SideBarLeft'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Crypto from './pages/crypto/Crypto'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import styled from 'styled-components'
const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`
function App() {
  const user = false;
  return (
    <Container>
      <Router>
        <SideBarLeft />

        <Home />
        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/crypto" exact element={<Crypto />} />
          <Route path="/register" element={user? <Navigate to='/'/> :<Register />} />
          <Route path="/login" element={user? <Navigate to='/'/>  :<Login />} />
          <Route path="/write" element={user? <Write/> :<Navigate to='/register'/> } />
          <Route path="/settings" element={user? <Settings /> :<Navigate to='/register'/> } />
          <Route path="/post/:postId" element={<Single />} />

        </Routes> */}
        {/* <Footer/> */}

      </Router>
    </Container>

  );
}

export default App;
