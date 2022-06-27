import React , { Component }  from 'react';
import Nav from "../Nav";
import Footer from "../Footer";
import logo from '../../images/tomate.png';
import Select from 'react-select'
import {
    Image,
    PageWelcome,
    Regform,
    PageCreate,
    MyTitle,
    DescrTextCreate,
    InputElements,
    Icon,
    Icons,
    Container,
    PageCreateBtn,
    PageCreateBtnLink,
    DescrText,Drop,Disc,Nm,Loc,Inf,
    PageCreateText,Registr,Signinbtn,Pic,Products,Product,BtnLink,Btn,SelectProcessing,SelectDone
} from "./BenefactorElements";
import {EmailName, MyOrderTitle} from "../Volantor/VolantorElements";



const BenefactorElements = ({userInfo}) => {


    return (
        <>
            <Nav/>
            <Container>

                <Regform>

                    <PageCreate>
                        <MyTitle>Hello, {userInfo.firstName}</MyTitle>
                        <EmailName>{userInfo.email}</EmailName>
                        <MyOrderTitle>My Orders</MyOrderTitle>
                        <Products>
                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Tomatos</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <SelectProcessing>Processing</SelectProcessing>
                                        </Drop>
                                    </Inf>

                                </Disc>

                            </Product>


                            <Product>
                                <Disc>
                                <Pic src={logo}/>
                                <Inf>
                                <Nm>Tomatos</Nm>
                                <Loc>Khidistavi 4</Loc>
                                    <Drop>
                                        <SelectDone>Done</SelectDone>
                                    </Drop>
                                </Inf>
                                </Disc>

                            </Product>

                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Tomatos</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <SelectProcessing>Processing</SelectProcessing>
                                        </Drop>
                                    </Inf>
                                </Disc>
                            </Product>


                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Tomatos</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <SelectProcessing>Processing</SelectProcessing>
                                        </Drop>
                                    </Inf>
                                </Disc>
                            </Product>




                        </Products>
                    </PageCreate>

                </Regform>
            </Container>
            <Footer/>
        </>

);
};

export default BenefactorElements;