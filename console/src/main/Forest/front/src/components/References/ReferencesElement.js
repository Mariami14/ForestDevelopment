import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #DEE1E3;
    border-radius: 24px;
    padding: 20px 20px 80px 20px;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.2s;

    &:hover{
        margin-top: 0;
    }
`

export const BackgroundGrayLine = styled.div`
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
    background: #F9F9FA;
    position: relative;
    height: 40vh;
    max-height: 500px;
`

