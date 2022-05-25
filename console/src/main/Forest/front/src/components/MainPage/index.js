import React from 'react';
import main from './Main.png';
import {Image, Page, Descr, DescrText, DescrBtn, DescrBtnLink, Container} from "./MainPageElements";
import {NavBtn, NavBtnLink} from "../Navbar/NavbarElements";


const Main = () => {
    return (
    <Container>
        <Page>

            <Descr>
               <DescrText>A Beautiful<br></br> Adventure Awaits</DescrText>
                <DescrBtn>
                    <DescrBtnLink to="/LearnMore">Learn more</DescrBtnLink>
                </DescrBtn>
            </Descr>
            <Image><img src={main} alt="main" />
            </Image>

        </Page>
    </Container>
    );
};

export default Main;
