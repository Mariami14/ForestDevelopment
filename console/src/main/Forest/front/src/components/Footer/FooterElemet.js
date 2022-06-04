import styled from "styled-components";

export const FooterBg = styled.div`
    background: #32312e;
    padding: 30px 0;
    width: 100%;
    
`

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    color: #DEE1E3;
    margin: 40px 0 0 0;
`

export const FooterLink = styled.a`
    margin: 0 40px;

    &:hover{
        transition: all 0.2s linear;
        color: #DE5B65;
    }
`

export const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    color: #DEE1E3;
`

export const FooterIcon = styled.div`
    margin: 0 20px;
    padding: 10px;
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
