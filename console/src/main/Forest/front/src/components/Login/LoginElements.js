import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const Container = styled.div`
      max-width: 1800px;
      min-height: 100vh;
      margin-top: 104px ;
      background-color: #45523e ;
      @media screen and (max-width: 768px){
       display: none;
       
    }
`

export const Regform = styled.div`
      display: flex;
      margin: 0 auto ;
      
      border: white;
      padding-top: 50px;
      padding-bottom: 50px;
     
`

export const PageWelcome = styled.div`
        border-radius:  20px 0 0 20px;
        background-color:#b0aca2;
        min-height: 60vh;
        width: 50%;
        padding: 10px;
        justify-content: center;
        justify-items: end;
        display: flex;
        flex-direction: column;
        
`

export const PageCreate = styled.div`
        background-color: white;
        min-height: 60vh; 
        width: 50%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        border-radius:  20px 20px 20px 20px; 
        margin-left: -20px;
`

export const PageCreateText = styled.div`
  
           
`

export const DescrText =styled.h1`
          font-weight: 300;
          font-size: 18px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: Georgia, serif;
          color: #ededed;
`

export const DescrTextCreate =styled.h1`
          font-weight: 300;
          font-size: 18px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: Georgia, serif;
          color: #ad5d50;
          margin-top: 25%;
`

export const PageCreateBtn = styled.nav`
      display: flex ;
      align-items: center;
      padding-top: 15px;
      justify-content: center;
      
      
    @media screen and (max-width: 768px){
       display: none;
    }
        
`;

export const PageCreateBtnLink = styled(Link)`
        border-radius: 2px;
        padding: 10px 30px;
        font-size: 12px;
        color: #ededed ;
        border: 1px solid #ededed;
        outline:  none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
       
        
        
    &:hover{
        transition: all 0.2s ease-in-out;    
        color: #e2ef3f;
        border-color: #e2ef3f;}     
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    color: #DEE1E3;
    
`


export const Registerbtn = styled.button`
      background-color: #b0aca2;
      color: white;
      padding: 10px 10px;
      align-items: center;
      width: 100%;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      opacity: 0.9;
      margin-top: 10px;
        &:hover{
         opacity:1;} 
    
`



export const Registr = styled.div`
    padding: 16px;
    align-items: center;
    
`
export const InputElements = styled.div`
    display: flex;
    justify-content: center;
    color: #DEE1E3;
    
`

export const Icon = styled.div`
    margin: 10px 10px;
    padding: 5px;
    border: 1px solid #888C9D;
    border-radius: 12px;
    cursor: pointer;
    justify-items: center;
    justify-content: center;
    display: flex;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: white;
    }
`

export const Error = styled.p`
    color: #a82a2c;
    text-align: center;
`

