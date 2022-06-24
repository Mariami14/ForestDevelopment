import React from 'react';
import {Orange, Purple} from "../VideoSection/videoSectionElement";
import commentIcon from '../../images/red.png'
import commentIconWithHeart from '../../images/green.png'
import {
    AboutUsBoldText,
    AboutUsHeaderText,
    AboutUsText,
    AboutUsTextArea, CommentIcon,
    CommentIconWithHeart,
    Container
} from "./index";

const AboutUs = () => {
    return (
        <Container  id='aboutUs'>
            <CommentIconWithHeart src={commentIconWithHeart}/>
            <CommentIcon src={commentIcon}/>
            <AboutUsHeaderText>
                <Orange>About</Orange>
                <Purple>Us</Purple><br/>
            </AboutUsHeaderText>
            <AboutUsTextArea>
                <AboutUsText>
                    The urgency behind many current environmental issues – like climate change, deforestation, and pollution to name a few – has inspired action worldwide. Beyond taking individual actions (like reducing your carbon footprint, for example)
                </AboutUsText>
                <AboutUsText>
                    Our approach to reforestation involves more than just protecting forests and planting trees.
                </AboutUsText>
                <AboutUsText>
                    Our reforestation programs focus on establishing and maintaining tree nurseries, educating
                    communities about the positive environmental impacts of reforestation, and strengthening economic development    </AboutUsText>
                <AboutUsText>
                    Community tree nurseries in Central America produce tree seedlings and rural
                    communities plant them in deforested areas, on family farms, and around their homes.
                    We are proud to not only produce hundreds of thousands of trees every year, we are also very proud to offer local people jobs that are sustainable,
                    empowering, and lead to a greater quality of life for both themselves and their families.
                </AboutUsText>
                <AboutUsText>
                    Our community tree nurseries are at the heart of our reforestation program because they give us a place to safely grow all of our tree species and provide meaningful
                    employment to local people.          </AboutUsText>
                <AboutUsBoldText>
                    Welcome here!
                </AboutUsBoldText>
            </AboutUsTextArea>
        </Container>
    );
};

export default AboutUs;

