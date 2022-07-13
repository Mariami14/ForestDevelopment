import React, {useContext, useState} from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import {

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
    PageCreateText,Registr,Signinbtn,Pic,Products,Product,BtnLink,Btn
} from "./VolantorElements";
import logo from "../../images/tomate.png";
import AuthContext from "../../context/AuthProvider";




const VolantorElements = () => {
    const { auth } = useContext(AuthContext);
    return (
        <>
            <Nav/>
            <Container>

                <Regform>

                    <PageCreate>
                        <MyTitle>Hello, {auth.firstName}</MyTitle>
                        <Products>
                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Roses</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>

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



export default VolantorElements;