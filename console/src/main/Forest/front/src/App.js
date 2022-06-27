import './App.css';
import Navbar from "./components/Navbar";
import React, {useEffect, useRef, useState} from "react";
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/index"
import SigninPage from "./Pages/SigninPage";
import VolantorPage from "./Pages/VolantorPage";
import BenefactorPage from "./Pages/BenefactorPage";
import VolantorProfilePage from "./Pages/VolantorProfilePage";




function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: null,
    lastName: null,
    email: null,
    userName: null,
    password: null,
    userRole: null,
    id:null
  });

   useEffect(() => {
     const user = JSON.parse(localStorage.getItem('user'));
     if (user) setUserInfo(user)
  }, []);

  return (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Login" exact element={<LoginPage/>}/>
      <Route path="/Signin" exact element={<SigninPage setUserInfo={setUserInfo}/>}/>
      <Route path="/Volantor" exact element={<VolantorPage userInfo = {userInfo}/>}/>
      <Route path="/Benefactor" exact element={<BenefactorPage userInfo = {userInfo}/>}/>
      <Route path="/VolantorProfile" exact element={<VolantorProfilePage userInfo = {userInfo}/>}/>
    </Routes>
  </Router>



  );
}

export default App;
