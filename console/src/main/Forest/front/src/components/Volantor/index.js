import React , { Component }  from 'react';
import Nav from "../Nav";
import Footer from "../Footer";
import logo from '../../images/logo.png';
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
    DescrText,Drop,Disc,Nm,Loc,
    PageCreateText,Registr,Signinbtn,Pic,Products,Product,BtnLink,Btn
} from "./VolantorElements";



const VolantorElements = () => {
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
            border: '1px solid #ad5d50',
            // This line disable the blue border
            boxShadow: 'none',
            '&:hover':{
                border: '1px solid #ad5d50'
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
            Width='600px'
            options={options} />
    );
    return (
        <>
            <Nav/>
            <Container>

                <Regform>

                    <PageCreate>
                        <MyTitle>My Profile</MyTitle>
                        <Products>
                            <Product>
                                <Pic src={logo}/>
                                <Drop>
                               <MySelect/>
                                </Drop>
                            </Product>

                            <Product>
                                <Disc>
                                <Pic src={logo}/>
                                <Nm></Nm>
                                <Loc></Loc>
                                </Disc>
                                <Drop>
                                    <MySelect/>
                                </Drop>
                            </Product>

                            <Product>
                                <Pic src={logo}/>
                                <Drop>

                                    <MySelect/>
                                </Drop>
                            </Product>

                            <Product>
                                <Pic src={logo}/>
                                <Drop>
                                    <MySelect/>
                                </Drop>
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