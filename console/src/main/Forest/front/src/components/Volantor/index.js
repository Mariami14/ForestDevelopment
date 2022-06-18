import React from 'react';
import Nav from "../Nav";
import Footer from "../Footer";
import {
    Image,
    PageWelcome,
    Regform,
    PageCreate,
    DescrTextCreate,
    InputElements,
    Icon,
    Icons,
    Container,
    PageCreateBtn,
    PageCreateBtnLink,
    DescrText,
    PageCreateText,Registr,Signinbtn
} from "./VolantorElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
import {FooterBg, FooterIcon, FooterIcons} from "../Footer/FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";

const VolantorElements = () => {
    return (
        <>
            <Nav/>
            <Container>

                <Regform>

                    <PageCreate>

                        <DescrTextCreate> Sign in into you account </DescrTextCreate>
                        <Icons>
                            <Icon className={'footerIcon second'}>
                                <WhatsappIcon/>
                            </Icon>
                            <Icon className={'footerIcon second'}>
                                <InstagramIcon/>
                            </Icon>
                            <Icon className={'footerIcon second'}>
                                <FacebookIcon/>
                            </Icon>
                            <Icon className={'footerIcon second'}>
                                <LinkedinIcon/>
                            </Icon>
                        </Icons>

                        <Registr>
                            <input type="text" placeholder="Enter Email" name="email" />
                                <input type="password" placeholder="Enter Password" name="psw" />

                                            <Signinbtn>Sign in</Signinbtn>
                        </Registr>
                    </PageCreate>
                    <PageWelcome>
                        <PageCreateText>
                            <DescrText>Hello Friend</DescrText>
                        </PageCreateText>
                        <PageCreateBtn>
                            <PageCreateBtnLink to="/Login">Log in</PageCreateBtnLink>
                        </PageCreateBtn>
                    </PageWelcome>
                </Regform>
            </Container>
            <Footer/>
        </>

);
};

export default VolantorElements;