import React from 'react';
import {PinkBackground} from "./AdvantageElement";
import {AboutUsHeaderText, Container} from "../AboutUs";
import {Orange, Purple} from "../VideoSection/videoSectionElement";
import Advantages from "./Advantages";
import advantagesInfo from "./advantagesInfo.json"

const Advantage = () => {
    return (
        <PinkBackground id='advantage'>
            <Container>
                <AboutUsHeaderText>
                    <Orange>Deine </Orange>
                    <Purple>Vorteile</Purple><br/>
                </AboutUsHeaderText>
                <div className="flex flex-wrap justify-between justify-self-stretch">
                    { advantagesInfo.map((info , index) =>
                        <Advantages key={index}
                                    src={info.src}
                                    header={info.header}
                                    text={info.text}
                        />
                    )}
                </div>
            </Container>
        </PinkBackground>
    );
};

export default Advantage;
