import styled from "styled-components";
import ReactPlayer from "react-player";

export const VideoSectionDiv = styled.div`
    margin-top: 104px;
    background: #f5ece5;
    min-height: 30vh;
`

export const Container = styled.div`
    display: flex;
    max-width: 1200px;
    padding: 100px 20px;
    margin: 0 auto;
    justify-content: space-between;
`

export const TextArea = styled.div`
    width: 40%;
    padding-top: 40px;
`

export const VideoArea = styled.div`
    width: 55%;
    margin: 0 0 0 20px;
`

export const TextHeaderSub = styled.h5`
    color: #12193B;
`

export const TextHeader = styled.div`
    margin-top: 32px;
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 56px;
    line-height: 67.2px;
`

export const Orange = styled.span`
    margin: 0 3px;
    color: #ad5d50;
`
export const Purple = styled.span`
    margin: 0 3px;
    color: #45523e;
`

export const Text = styled.h5`
    color: #12193B;
    font-size: 18px;
    font-weight: 600;
`

export const StoreLogosDiv = styled.div`
    display: flex;
    margin: 40px 0 100px 0;
`

export const GooglePlay = styled.img`
  margin: 0 11px 0 0;
`

export const AppStore = styled.img`

`

export const VideoDiv = styled(ReactPlayer)`
    border-radius: 24px;
    overflow: hidden;
    width: 100% !important;
    min-height: 100% !important;
    margin: 10px auto 24px;


    @media (max-width: 1024px){
        min-height: 240px;
        margin-top: 40px;
    }
`
export const Image = styled.div`
    
       display: flex;
       z-index: 10;
       width: 682px;
       height: 450px;
       justify-items: center;
       border-radius: 24px;
     
       
        
`;

export const Imgforest = styled.img`
       justify-items: center;
       border-radius: 24px;
    
`


export const Tree = styled.img`
    left: 0;
    max-width: 50px;
    
`

export const TextCenter = styled.div`
  text-align: center;
`

export const VideoWrapper = styled.div`
  position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 24px;
`

export const PlayBtn = styled.img`
    position: absolute;
    background: white;
    border-radius: 50%;
    padding: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: -45px;
    z-index: 99;
    cursor: pointer;

    @media (max-width: 1024px){
        left: 20px;
        top: 80%;
    }

    &:focus {
        outline: 0;
    }
`


