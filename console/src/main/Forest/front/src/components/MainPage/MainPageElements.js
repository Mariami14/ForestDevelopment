import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Image = styled.div`
       height: 300px;
       display: flex;
       z-index: 10;
       justify-content: space-between;
       justify-items: center;
        
`;

export const Page = styled.div`
       background : #fff;
       display: flex;
       z-index: 10;
       justify-content: space-between;
       justify-items: center;
       margin-top: 50px;

        
`;

export const Container = styled.div`
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 30px;
      @media screen and (max-width: 768px){
       display: none;
    }
`

export const Descr = styled.div`
       background : #fff;
       display: flex;
       flex-direction: column;
       z-index: 10;
       justify-content: center
       
       
       
       
        
`;

export const DescrText =styled.h1`
          font-weight: 300;
          font-size: 40px;
          display: flex;
          align-items: center;
          font-family: Georgia, serif;;
`;

export const DescrBtn = styled.nav`
      display: flex;
      align-items: center;
      padding-top: 15px;
      
      
    @media screen and (max-width: 768px){
       display: none;
    }
        
`;

export const DescrBtnLink = styled(Link)`
        border-radius: 2px;
        background: #fff;
        padding: 10px 30px;
        font-size: 12px;
        color: black;
        border: 1px solid #000;
        outline:  none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        border-color: #000;
    &:hover{
        transition: all 0.2s ease-in-out;    
        background: #fff;
        color: #3f9f67;
        border-color: #3f9f67;}
        
        
`;