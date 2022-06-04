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
    PageCreateText,Registr,Registerbtn
} from "./LoginElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
import {FooterBg, FooterIcon, FooterIcons} from "../Footer/FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";
import {Axios as axios} from "axios";

const LoginElements = () => {
    const [userinfo, setUserInfo] = useState([]);

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
                            <input id = "userEmal" type="text" placeholder="Enter Email" name="email" />
                                <input type="password" placeholder="Enter Password" name="psw" />
                                    <input type="password" placeholder="Repeat Password" name="psw-repeat" />
                                            <Registerbtn>Register</Registerbtn>
                                            <button onClick={()=>{
                                                fetch("http://localhost:8080/customer-service-api/findall")
                                                    .then((res) => res.json())
                                                    .then((json) => {
                                                        setUserInfo(json);
                                                        console.log(json);
                                                        console.log(userinfo);
                                                        console.log("sdfsdfsdf");
                                                        console.log(json[0]);
                                                        console.log(json[0].email);
                                                        document.getElementById("userEmal").value = json[0].email;
                                                    })
                                            }}>TEST</button>
                        </Registr>
                    </PageCreate>
                </Regform>
            </Container>
            <Footer/>
        </>

);
};

export default LoginElements;