import React, {useContext, useEffect, useState} from 'react';
import {Nav, NavBtn, NavContainer, NavLink, NavLinks, NavLogo, NavLogoDiv,NavLinkBtn,Btn} from "./NavElement";
import logo from '../../images/logo.png'
import AuthContext from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const Navigate = useNavigate();
    const { setAuth,auth,history } = useContext(AuthContext);
    const Logout = () =>{
        localStorage.clear();
        setAuth(false);
        Navigate("/")

    };

    return (

        <Nav>
            <NavContainer>
                <NavLogoDiv offset= {-100} to='/'>
                    <NavLogo src={logo}/>
                </NavLogoDiv>
                <NavLinks>
                    <NavLinkBtn to="/">Home</NavLinkBtn>
                    <NavLink  to='footer'>Contact</NavLink>
                    {!auth && <NavBtn to="/Login">Login</NavBtn>
                    }
                    {auth && <Btn onClick={Logout}>Logout</Btn>}

                    {auth?.userRole != null && <NavBtn  to={history}>My profile</NavBtn>}

                    {/*<NavBtn offset= {-70} to="/Volantor">Volantor</NavBtn>
                    <NavBtn offset= {-70} to="/Benefactor">Benefactor</NavBtn>
                    <NavBtn offset= {-70} to="/VolantorProfile">VolantorProfile</NavBtn>
                    <NavBtn offset= {-70} to="/AdminView">AdminView</NavBtn>
*/}                </NavLinks>
            </NavContainer>
        </Nav>
    );
};

export default Navigation;
