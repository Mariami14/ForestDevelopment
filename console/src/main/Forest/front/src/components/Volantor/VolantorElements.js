import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const Container = styled.div`
      max-width: 1800px;
      min-height: 100vh;
      margin-top: 104px ;
      background: #f5ece5;
      @media screen and (max-width: 768px){
       display: none;
       
    }
`

export const Regform = styled.div`
      display: flex;
      margin:  auto ;
      padding: 50px;
      
      
`



export const PageCreate = styled.div`
        background-color: white;
        border-radius:  20px 20px 20px 20px;
        min-height: 60vh; 
        padding: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 10;
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


export const Signinbtn = styled.button`
      background-color: #b0aca2;
      color: white;
      padding: 10px 10px;
      align-items: center;
      width: 100%;
      margin-top: 100px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      opacity: 0.9;
        &:hover{
         opacity:1;} 
    
`



export const Registr = styled.div`
    padding: 16px;
    
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

export const MyTitle = styled.h1`
      padding: 5px 0 0 20px ;
      color: #ad5d50;
      font-style: oblique;
      
`

export const Pic = styled.img`
    max-width: 60px;

`

export const Products = styled.div`
    display: flex;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

export const Product = styled.div`
  display: flex;
  width: 33%;
  margin-bottom: 30px;
    
    &:after {
    content: '';
    background-color: rgba(99,99,99,0.64);
    height: 1px;
    display: block;}

`


export const Btn = styled.nav`
      display: flex;
      align-items: center;
      margin-left: 24px;
      
      
    @media screen and (max-width: 768px){
       display: none;
    }
        
`;

export const Drop = styled.div`
    display: flex;
    margin: 20px;
`

export const Disc = styled.div`
    margin: 20px;
`

export const Nm = styled.p`
      padding: 5px 0 0 20px ;
      color: #ad5d50;
      font-style: oblique;
      
`
export const Loc = styled.p`
      padding: 5px 0 0 20px ;
      color: #ad5d50;
      font-style: oblique;
      
`

export const BtnLink = styled(Link)`
        
        white-space: nowrap ;
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
        color: #ad5d50;
        border-color: #ad5d50; }
        
`;

