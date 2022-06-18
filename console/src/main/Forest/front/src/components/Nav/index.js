import React from 'react';
import {Nav, NavBtn, NavContainer, NavLink, NavLinks, NavLogo, NavLogoDiv} from "./NavElement";
import logo from '../../images/logo.png'

const Navigation = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogoDiv smooth={true} offset= {-100} to='/'>
                    <NavLogo src={logo}/>
                </NavLogoDiv>
                <NavLinks>
                    <NavLink smooth={true} offset= {-70} to='aboutUs'>About us</NavLink>
                    <NavLink smooth={true} offset= {-70} to='references'>Feedback</NavLink>
                    <NavLink smooth={true} offset= {-70} to='footer'>Contact</NavLink>
                    <NavBtn smooth={true} offset= {-70} to="/Login">Login</NavBtn>
                    <NavBtn smooth={true} offset= {-70} to="/Volantor">Volantor</NavBtn>
                </NavLinks>
            </NavContainer>
        </Nav>
    );
};

export default Navigation;
