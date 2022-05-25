import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Container = styled.div`
      max-width: 1800px;
      min-height: 100vh;
      margin: 0 auto;
      @media screen and (max-width: 768px){
       display: none;
    }
`




export const Regform = styled.div`
      display: flex;
      margin: 50px auto 0;
      max-width: 600px;
      border: white;
      padding: 5px;
`

export const PageWelcome = styled.div`
        border-radius:  20px 0 0 20px;
        background-color: #107D62;
        min-height: 60vh;
        width: 50%;
        padding: 10px;
        justify-content: center;
        justify-items: end;
        
`

export const PageCreate = styled.div`
        background-color: white;
        min-height: 60vh; 
        width: 50%;
        padding: 10px;
`

export const PageCreateText = styled.div`
  
           
`


export const DescrText =styled.h1`
          font-weight: 300;
          font-size: 18px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: Georgia, serif;;
`;
export const PageCreateBtn = styled.nav`
      display: flex ;
      align-items: center;
      padding-top: 15px;
      
      
    @media screen and (max-width: 768px){
       display: none;
    }
        
`;

export const PageCreateBtnLink = styled(Link)`
        border-radius: 2px;
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

        color: #3f9f67;
        border-color: #3f9f67;}
        
        
`;