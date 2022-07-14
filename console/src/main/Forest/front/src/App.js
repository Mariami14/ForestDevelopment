import './App.css';
import Navbar from "./components/Navbar";
import React, {useContext, useEffect, useRef, useState} from "react";
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home"
import SigninPage from "./Pages/SigninPage";
import VolantorPage from "./Pages/VolantorPage";
import BenefactorPage from "./Pages/BenefactorPage";
import VolantorProfilePage from "./Pages/VolantorProfilePage";
import AdminPage from "./Pages/AdminPage";
import AuthContext, { AuthProvider } from './context/AuthProvider';
import AdminViewAddTask from "./components/Admin/AdminViewAddTask";




function App() {

  const { auth } = useContext(AuthContext);

  return (
  <Router>
    <Routes>


      <Route path="/" exact element={<Home/>}/>

      {auth ?
         <>
        <Route path="/Volantor" exact element={<VolantorPage />}/>
        <Route path="/Benefactor" exact element={<BenefactorPage />}/>
        <Route path="/VolantorProfile" exact element={<VolantorProfilePage />}/>
        <Route path="/AdminView" exact element={<AdminPage/>}/>
        <Route path="/AdminViewaddTask" exact element={<AdminViewAddTask/>}/>
       </>:
          <>
            <Route path="/Login" exact element={<LoginPage/>}/>
            <Route path="/Signin" exact element={<SigninPage/>}/>
          </>
      }
    </Routes>
  </Router>



  );
}

export default App;
