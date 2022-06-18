import React, {useState} from 'react';
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
    PageCreateText, Registr, Registerbtn
} from "./LoginElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
import {FooterBg, FooterIcon, FooterIcons} from "../Footer/FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";

import Axios, * as others from 'axios';

const LoginElements = () => {
    const [userInfo, setUserInfo] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;

        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const register = () => {
        const systemuser = {
            firstName: userInfo['firstName'],
            lastName: userInfo['lastName'],
            email: userInfo['email'],
            userName: userInfo['userName'],
            password: userInfo['password'],
            userRole: 'USER',
            id:0
        };
        console.log(systemuser);
        Axios.post("http://localhost:8080/customer-service-api/addsystemuser", systemuser)
            .then((response) => {
            console.log(response);
        })
    };


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
                            <label><input type="radio" value="Volantor" name="role"
                                          onChange={handleChange}/>Volantor</label>
                            <label><input type="radio" value="Benefactor" name="role" onChange={handleChange}/>Benefactor
                            </label>
                        </InputElements>
                        <Registr>
                            <input type="text" placeholder="Enter Firstname" name="firstName" onChange={handleChange}/>
                            <input type="text" placeholder="Enter Lastname" name="lastName" onChange={handleChange}/>
                            <input type="text" placeholder="Enter Username" name="userName" onChange={handleChange}/>
                            <input type="text" placeholder="Enter Email" name="email" onChange={handleChange}/>
                            <input type="password" placeholder="Enter Password" name="password"
                                   onChange={handleChange}/>
                            <input type="password" placeholder="Repeat Password" name="passwordRepeat"
                                   onChange={handleChange}/>
                            <Registerbtn onClick={register}>Register</Registerbtn>
                        </Registr>
                    </PageCreate>
                </Regform>
            </Container>
            <Footer/>
        </>

    );
};

export default LoginElements;