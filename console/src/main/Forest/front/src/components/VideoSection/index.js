import React from 'react';
import appStore from '../../images/appStore.svg';
import googlePlay from '../../images/googlePlay.svg';
import playbtn from '../../images/playBtn.svg';
import main from '../../images/Main.png';
import tree from '../../images/MainTree.png';
import forest from '../../images/forest.jpg';
import commentIconWithHeart from '../../images/green.png'
import {
    AppStore,Imgforest,
    Container, GooglePlay, Orange, Purple, StoreLogosDiv,
    TextArea, TextHeader, Text,
    TextHeaderSub,
    VideoArea, VideoDiv,
    VideoSectionDiv, TextCenter, PlayBtn,Image,Tree
} from "./videoSectionElement";
import {CommentIcon, CommentIconWithHeart} from "../AboutUs";
import Nav from "../Nav";


const VideoSection = () => {
    return (
        <>

        <VideoSectionDiv id='videoSection'>
            <Container>
                <TextArea>
                    <TextHeader>
                        <Orange>Forest <Tree src={tree}/></Orange><br/>
                        <Purple>Development</Purple>
                    </TextHeader>
                    <TextHeaderSub>
                        The system we have developed defines a number of FDTs, each one describing a target stand structure and composition,
                        and with defined climate and site suitability. <br/>
                        <b>The development process has involved consultation and workshops with a range of stakeholders.</b>
                    </TextHeaderSub>
                </TextArea>
                <VideoArea>
                    <VideoDiv>
                        <PlayBtn src={playbtn}/>
                        <Image><Imgforest src={forest} alt="main" />
                        </Image>
                    </VideoDiv>

                </VideoArea>
            </Container>
        </VideoSectionDiv>
            </>
    );
};

export default VideoSection;
