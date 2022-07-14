import styled from 'styled-components'
import {Link} from 'react-scroll'
import {NavLink as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    left: 0;
    position: fixed;
    height: 100%;
    background: #45523e;
    border-bottom: 1px solid #DEE1E3;
    z-index: 99;
    color: #f5ece5;
  
`

export const NavContainer = styled.div`
    display: flex;
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const NavLogoDiv = styled(LinkR)`
    cursor: pointer;
    padding: 20px 0;
`

export const NavLogo = styled.img`
    max-width: 60px;
    margin-bottom: 40px;

`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
 

`

export const NavLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.2s linear;
    margin: 30px;

    &:hover {
        color: #DE5B65;
    }
`


export const NavLinkBtn = styled(LinkR)`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.2s linear;
    text-decoration: none;
    color: #F9F9FA;

    &:hover {
        color: #DE5B65;
    }
`

export const NavBtn = styled(LinkR)`
    position: relative;
    color: #F9F9FA;
    background: #ad5d50;
    text-align: center;
    padding: 10px 24px;
    border-radius: 12px;
    transition: all 0.2s linear;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    align-items: center;
    margin-bottom: 30px;
    

    &:hover {
        background: #DE5B65;
    }
`

export const NavBtnAdd = styled(LinkR)`
    position: relative;
    color: #F9F9FA;
    background: #ad5d50;
    text-align: center;
    padding: 10px 24px;
    border-radius: 12px;
    transition: all 0.2s linear;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    align-items: center;
    margin: 30px;
    

    &:hover {
        background: #DE5B65;
    }
`


export const Btn = styled.button`
    position: absolute;
    color: #F9F9FA;
    background: #ad5d50;
    text-align: center;
    justify-content: center;
    padding: 14px 40px;
    border-radius: 12px;
    border: none;
    transition: all 0.2s linear;
    cursor: pointer;
    text-decoration: none;
    bottom: 40px;

    &:hover {
        background: #DE5B65;
    }
`




