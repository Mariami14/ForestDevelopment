import styled from 'styled-components'
import {Link} from 'react-scroll'
import {NavLink as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    top: 0;
    position: fixed;
    width: 100%;
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
`

export const NavLogoDiv = styled(LinkR)`
    cursor: pointer;
    padding: 20px 0;
`

export const NavLogo = styled.img`
    max-width: 60px;

`

export const NavLinks = styled.div`

`

export const NavLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.2s linear;

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
    margin-right: 10px;

    &:hover {
        background: #DE5B65;
    }
`


export const Btn = styled.button`
    position: relative;
    color: #F9F9FA;
    background: #ad5d50;
    text-align: center;
    padding: 10px 24px;
    border-radius: 12px;
    border: none;
    transition: all 0.2s linear;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
        background: #DE5B65;
    }
`




