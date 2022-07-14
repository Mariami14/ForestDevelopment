import React, {useState} from 'react';
import appStore from '../../images/appStore.svg';
import googlePlay from '../../images/googlePlay.svg';
import playbtn from '../../images/playBtn.svg';
import SoundOff from '../../images/soundOff.svg';
import SoundOn from '../../images/soundOn.svg';
import tree from '../../images/MainTree.png';
import forest from '../../images/forest.jpg';
import commentIconWithHeart from '../../images/green.png'
import {
    AppStore,Imgforest,
    Container, GooglePlay, Orange, Purple, StoreLogosDiv,
    TextArea, TextHeader, Text,
    TextHeaderSub,
    VideoArea, VideoDiv,
    VideoSectionDiv, TextCenter, PlayBtn,Image,Tree,VideoWrapper
} from "./videoSectionElement";
import {CommentIcon, CommentIconWithHeart} from "../AboutUs";
import Nav from "../Nav";



const VideoSection = () => {
    const [muted, setMuted] = useState(true);
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
                            <VideoWrapper>
                                <PlayBtn src={ muted ? SoundOff : SoundOn} onClick={ () => setMuted(!muted) }/>
                                <VideoDiv
                                    url={'https://www.youtube.com/embed/_dWJVHIE9S8&ab_channel=Ecosia'}
                                    autoPlay
                                    muted = { muted }
                                    volume = { 0.4 }
                                    loop
                                    playing={true}
                                >
                                </VideoDiv>
                            </VideoWrapper>
                            <Text>
                                <div className='text-center font-[400]'>
                                    Schau dir unser Konzept an
                                </div>
                            </Text>
                        </VideoArea>
            </Container>
        </VideoSectionDiv>
            </>
    );
};

export default VideoSection;
