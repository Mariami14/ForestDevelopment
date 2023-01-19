import React, {useState, useRef, useContext} from 'react';
import Nav from "../Nav";
import './LoginStyle.css';
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
    PageCreateText, Registr, Registerbtn,Error,LoginForm
} from "./LoginElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
import {FooterBg, FooterIcon, FooterIcons} from "../Footer/FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";
import axios from "../../axios";
import { useForm } from 'react-hook-form';
import AuthContext from "../../context/AuthProvider";
import './LoginStyle.css';
import {roRO} from "@material-ui/core/locale";
import {useNavigate} from "react-router-dom";




const LoginElements = () => {
    const { setAuth } = useContext(AuthContext);
    const { userRole, setUserRole } = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useState({});
    password.current = watch("password", "");
    const history = useNavigate();

    const onSubmit = data => {
            console.log(data);
            axios.post('/customer-service-api/addsystemuser', {
                firstName: data['firstName'],
                lastName: data['lastName'],
                email: data['email'],
                username: data['userName'],
                password: data['password'],
                userRole: data['userRole'],
                id: 0
            }).then((response) => {
                sessionStorage.setItem('user',JSON.stringify(response.data));
                console.log(response.data)
                setAuth(response.data);
                history("/");
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
                        <Registr>

                            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                                <InputElements>
                                    {/*<label>*/}
                                    {/*    <input type="radio" value="USER" name="role" defaultChecked={true}*/}
                                    {/*           onChange={handleChange}/>*/}
                                    {/*    Volunteer</label>*/}
                                    {/*<label>*/}
                                    {/*    <input type="radio" value="ADMIN" name="role" onChange={handleChange}/>*/}
                                    {/*    Sponsor*/}
                                    {/*</label>*/}
                                    <label className='appearance-none'>
                                        Sponsor
                                        <input className='appearance-none' {...register("userRole")} type="radio" value="USER"  defaultChecked={true}/>
                                    </label>
                                    <label className='appearance-none'>
                                        Volunteer
                                        <input className='appearance-none' {...register("userRole")} type="radio" value="VOLUNTEER" />
                                    </label>
                                </InputElements>
                                <input type="text" placeholder="Enter Firstname" {...register("firstName", {required: "You must specify a Firstname", maxLength:{value: 255, message: "Firstname longer than 255 characters"}, minLength: {value: 3, message: "Firstname must have at least 3 characters"}})} />
                                <input type="text" placeholder="Enter Lastname" {...register("lastName", {required: "You must specify a Lastname", maxLength:{value: 255, message: "Lastname longer than 255 characters"}, minLength: {value: 3, message: "Lastname must have at least 3 characters"}})} />
                                <input type="text" placeholder="Enter Email" {...register("email", {required: "You must specify a Email",  pattern:{value:/^\S+@\S+$/i,message: "Incorrect Email"},maxLength:{value: 255, message: "Email longer than 255 characters"}, minLength: {value: 8, message: "Email must have at least 8 characters"} })} />
                                <input type="text" placeholder="Enter Username" {...register("userName", {required: "You must specify a Username", maxLength:{value: 255, message: "Username longer than 255 characters"}, minLength: {value: 3, message: "Username must have at least 3 characters"}})} />
                                <input type="password" placeholder="Enter Password" {...register("password", {required: "You must specify a password", maxLength:{value: 255, message: "Passwords longer than 255 characters"}, minLength: {value: 8, message: "Password must have at least 8 characters"}})} />

                                <input type="password" placeholder="Repeat Password" {...register("passwordRepeat", {validate: value =>
                                        value === password.current || "The passwords do not match"
                                })} />
                                {errors.firstName && <Error>{errors.firstName.message}</Error>}
                                {errors.lastName && <Error>{errors.lastName.message}</Error>}
                                {errors.email && <Error>{errors.email.message}</Error>}
                                {errors.userName && <Error>{errors.userName.message}</Error>}
                                {errors.password && <Error>{errors.password.message}</Error>}
                                {errors.passwordRepeat && <Error>{errors.passwordRepeat.message}</Error>}

                                <Registerbtn type="submit" >Register</Registerbtn>
                            </LoginForm>
                        </Registr>
                    </PageCreate>
                </Regform>
            </Container>
            <Footer/>
        </>

    );
};

export default LoginElements;
