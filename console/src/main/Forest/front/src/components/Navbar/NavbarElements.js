import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
       background : #fff;
       height: 80px;
       display: flex;
       padding: 0.5rem calc((100vw - 1000px)/2) ;
       z-index: 10;
       justify-content: space-between;
       justify-items: center;
        
`;

export const NavLink = styled(Link)`
       color : black;
       font-size: 12px;
       display: flex;
       padding: 0 1rem;
       text-decoration: none;
       cursor: pointer;
      

               


        
`;

export const Bars = styled(FaBars)`
      display: none;
      color: #fff;
      
      
    @media screen and (max-width: 768px){
           display: block;
           position: absolute;
           top: 0;
           right: 0;
           transform: translate(-100%,75%);
           font-size: 1.8rem;
           cursor:pointer;
    }
        
`;


export const NavMenu = styled.div`
      display: flex;
      align-items: center;
      
      
    @media screen and (max-width: 768px){
       display: none;
    }
        
`;

export const NavBtn = styled.nav`
      display: flex;
      align-items: center;
      margin-right: 24px;
      
      
    @media screen and (max-width: 768px){
       display: none;
    }
        
`;

export const NavBtnLink = styled(Link)`
        border-radius: 2px;
        background: #fff;
        padding: 10px 22px;
        font-size: 12px;
        color: black;
        border: 1px solid #000;
        outline:  none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;    
        background: #fff;
        color: #010606;}
        
`;

export const LogoText=styled.h1`
          font-weight: 500;
          margin-left: -20px;
          display: flex;
          align-items: center;
`;

