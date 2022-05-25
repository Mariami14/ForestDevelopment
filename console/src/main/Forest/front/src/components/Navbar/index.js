import React from 'react';
import {Nav,NavLink,Bars,NavBtn,NavBtnLink,NavMenu,LogoText} from "./NavbarElements";
import logo from './logo.jpg'

const Navbar = () => {
    return (

    <Nav>
        <NavLink to="/">
            <img src={logo} alt="Logo" />
            <LogoText>Forest Development</LogoText>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/" activestyle >
                HOME
            </NavLink>
            <NavLink to="/about" activestyle >
                ABOUT US
            </NavLink>
            <NavLink to="/about" activestyle >
                NEWS & UPDATES
            </NavLink>
            <NavLink to="/about" activestyle >
                STORE
            </NavLink>
            <NavBtn>
                <NavBtnLink to="/Login">Sign in</NavBtnLink>
            </NavBtn>
        </NavMenu>
    </Nav>

    );
};

export default Navbar;
