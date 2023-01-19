import React, {Component, useContext, useState} from 'react';

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
    PageCreateText,Registr,Signinbtn,Pic,Products,Product,BtnLink,Btn,EmailName,MyOrderTitle,NavBtnDisc,UseInfo
} from "./VolantorElements";
import Navigation from "../Nav";
import AuthContext from "../../context/AuthProvider";
import {NavBtnAdd} from "../Admin/AdminNavElements";
import AdminModal from "../Admin/AdminModal";
import EquipmentModal from "./EquipmentModal"



const VolantorElements = () => {
    const [open,isOpen] = useState();
    const options = [
        { value: 'processing', label: 'Processing' },
        { value: 'done', label: 'Done' }
    ];

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            color: '#ad5d50',
        }),
        control: base => ({
            ...base,
            minWidth:'150px',
            border: '1px solid grey',
            borderRadius:'3px',
            // This line disable the blue border
            boxShadow: 'none',
            '&:hover':{
                border: '1px solid grey',
                borderRadius:'3px',
            },
            cursor: 'pointer'
            // This line disable the blue border
        }),
        option: styles => ({
            ...styles,
            backgroundColor: '',
            '&:hover': {backgroundColor: '#DDDDDD'},
            color: '#ad5d50'
        })
    };

    const MySelect = () => (
        <Select
            menuColor='red'
            styles={customStyles}
            Width='200px'
            options={options} />
    );
    const { auth } = useContext(AuthContext);
    return (
        <>

            {open && <EquipmentModal isOpen = {isOpen}/>}
            <Navigation/>
            <Container>

                <Regform>

                    <PageCreate>
                        <UseInfo>
                        <MyTitle>Hello, {auth.firstName}</MyTitle>
                        <NavBtnDisc  to='/Volantor' onClick = {()=>{isOpen(true)}}>Equipment info</NavBtnDisc>
                        </UseInfo>
                        <EmailName>{auth.email}</EmailName>
                       <MyOrderTitle>My Orders </MyOrderTitle>
                        <Products>
                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Tomatos</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <MySelect/>
                                        </Drop>
                                    </Inf>

                                </Disc>

                            </Product>


                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Roses</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <MySelect/>
                                        </Drop>
                                    </Inf>
                                </Disc>

                            </Product>

                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Roses</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <MySelect/>
                                        </Drop>
                                    </Inf>
                                </Disc>
                            </Product>


                            <Product>
                                <Disc>
                                    <Pic src={logo}/>
                                    <Inf>
                                        <Nm>Roses</Nm>
                                        <Loc>Khidistavi 4</Loc>
                                        <Drop>
                                            <MySelect/>
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