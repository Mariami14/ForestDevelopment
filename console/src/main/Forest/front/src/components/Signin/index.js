import Nav from "../Nav";
import Footer from "../Footer";
import AuthContext from "../../context/AuthProvider";
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
} from "./SigninElements";
import {DescrBtn, DescrBtnLink} from "../MainPage/MainPageElements";
import {FooterBg, FooterIcon, FooterIcons} from "../Footer/FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import VolantorPage from "../../Pages/VolantorPage";
import Volantor from "../Volantor";
import { useRef, useState, useEffect, useContext } from 'react';


const Signin = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user , setUser] = useState({});
    const history = useNavigate();

    const onSubmit = async (data)  =>{

        await axios.get('http://localhost:8080/customer-service-api/authentication', {
            params:{
                'username': data['userName'],
                'password': data['password'],
            }

        }).then((response) => {

                localStorage.setItem('user',JSON.stringify(response.data));
                setAuth(response.data);
                setUser(response.data);
                history("/");

        })
            .catch(error => {
                console.log(error.response)
            })
    };


    // const [userInfo, setUserInfo] = useState({});
    //
    // const handleChange = e => {
    //     const {name, value} = e.target;
    //
    //     setUserInfo(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };



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
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Enter Username" name="userName" {...register("userName")} />
                                <input type="password" placeholder="Enter Password" name="password" {...register("password")}  />

                                            <Signinbtn type="submit">Sign in</Signinbtn>
                            </form>
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

export default Signin;