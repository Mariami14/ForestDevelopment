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
    PageCreateText,Registr,Registerbtn
} from "./LoginElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
import {FooterBg, FooterIcon, FooterIcons} from "../Footer/FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";

const LoginElements = () => {
    return (
        <>
            <Nav/>
            <Container>

                <Regform>
                    <PageWelcome>
                        <PageCreateText>
                            <DescrText>Welcome Back</DescrText>
                        </PageCreateText>
                        <PageCreateBtn>
                            <PageCreateBtnLink to="/Signin">Sign up</PageCreateBtnLink>
                        </PageCreateBtn>
                    </PageWelcome>
                    <PageCreate>

                        <DescrTextCreate> Create Account </DescrTextCreate>
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
                        <InputElements>
                            <label><input type="radio" value="Volantor" name="name"/>Volantor</label>
                            <label><input type="radio" value="Benefactor" name="name"/>Benefactor</label>
                        </InputElements>
                        <Registr>
                            <input type="text" placeholder="Enter Email" name="email" />
                                <input type="password" placeholder="Enter Password" name="psw" />
                                    <input type="password" placeholder="Repeat Password" name="psw-repeat" />
                                            <Registerbtn>Register</Registerbtn>
                        </Registr>
                    </PageCreate>
                </Regform>
            </Container>
            <Footer/>
        </>

);
};

export default LoginElements;