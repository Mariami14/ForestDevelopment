import React, {useContext, useEffect, useState} from "react";
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
import axios from "../../axios";




const VolantorElements = () => {
    const { auth } = useContext(AuthContext);
    useEffect(() => {

        axios.get('http://localhost:8080/tasks-service-api/findtasks', {})
            .then((response) => {

                response.data.map((data,index)=>{console.log(data)});
            })


    },[]);




    return (
        <>
            <Nav/>
            <Container>

                <Regform>

                    <PageCreate>
                        <MyTitle></MyTitle>
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