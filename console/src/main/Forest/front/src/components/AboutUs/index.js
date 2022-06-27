import styled from "styled-components";
import forest from './forest.jpg'

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 100px 20px;
    margin: 0 auto;
    justify-content: space-between;
    position: relative;
    background-image: url(${forest});
`

export const AboutUsHeaderText = styled.h2`
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
    font-weight: 600;
`

export const AboutUsTextArea = styled.div`
    margin: 40px auto 0 auto;
    text-align: center;
    max-width: 80%;
`

export const AboutUsText = styled.p`
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 300;
`

export const AboutUsBoldText = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
`

export const CommentIconWithHeart = styled.img`
    position: absolute;
    margin: 60px 0 0 0;
    left: 0;
    max-width: 100px;
`
export const CommentIcon = styled.img`
    position: absolute;
    top: 50%;
    max-width: 100px;
    transform: translateY(-50%);
    right: 0;
`
