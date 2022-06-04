import React from 'react';
import {AboutUsHeaderText, Container} from "../AboutUs";
import {Orange, Purple} from "../VideoSection/videoSectionElement";
import Slider from "./Slider";
import {BackgroundGrayLine} from "./ReferencesElement";


const References = () => {
    return (
        <>
            <div id='references' className={'px-8 py-28'}>
                <AboutUsHeaderText>
                    <Orange>Feedback</Orange>
                    <Purple></Purple><br/>
                </AboutUsHeaderText>
                <Slider/>
            </div>
            <BackgroundGrayLine>
                <div id={'download'} className="absolute flex flex-col justify-center w-full mx-auto" style={{top:'30%'}}>
                    <p className={'font-semibold text-center'} style={{ fontSize:'20px'}}>
                        App herunterladen
                    </p>
                    <div className="flex mt-6 justify-center space-x-5">
                        <img src="./images/googlePlay.svg" alt=""/>
                        <img src="./images/appStore.svg" alt=""/>
                    </div>
                </div>
            </BackgroundGrayLine>
        </>
    );
};

export default References;
