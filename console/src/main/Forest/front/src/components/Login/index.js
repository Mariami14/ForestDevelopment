import React from 'react';
import Navbar from "../Navbar";
import {Image, PageWelcome, Regform,PageCreate,  Container,PageCreateBtn,PageCreateBtnLink,DescrText,PageCreateText} from "./LoginElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
const LoginElements = () => {
    return (

        <Container>
            <Navbar/>
            <Regform>
                <PageWelcome>
                    <PageCreateText>
                        <DescrText>Welcome Back</DescrText>
                    </PageCreateText>
                    <PageCreateBtn>
                        <PageCreateBtnLink to="/LearnMore">Learn more</PageCreateBtnLink>
                    </PageCreateBtn>
                </PageWelcome>
                <PageCreate>
                    Create Account

                </PageCreate>
            </Regform>
        </Container>

    );
};

export default LoginElements;