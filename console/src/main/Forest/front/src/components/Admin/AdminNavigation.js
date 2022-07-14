import React, {useContext, useEffect, useState} from 'react';
import {Nav, NavBtn, NavContainer, NavLink, NavLinks, NavLogo, NavLogoDiv,NavLinkBtn,Btn} from "./AdminNavElements";
import logo from '../../images/logo.png'
import AuthContext from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";

const AdminNavigation = () => {

    const NavigateAdmin = useNavigate();
    const { setAuth,auth,history} = useContext(AuthContext);
    const Logout = () =>{
        localStorage.clear();
        setAuth(false);
        NavigateAdmin("/")

    };
    return (

        <Nav>
            <NavContainer>
                <NavLogoDiv offset= {-100} to='/'>
                    <NavLogo src={logo}/>
                </NavLogoDiv>
                <NavLinks>
                    <NavBtn  to='/AdminViewAddTask'>Generate Task</NavBtn>
                    <NavBtn  to='/AdminView'>Edit Task</NavBtn>
                    <Btn onClick={Logout}>Logout</Btn>
              </NavLinks>
            </NavContainer>
        </Nav>
    );
};

export default AdminNavigation;
