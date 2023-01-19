import React, {useContext, useEffect, useState} from 'react';
import axios from "../../axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./EquipmentModalStyle.css";
import AuthContext from "../../context/AuthProvider";
import {Error, LoginForm, Registerbtn,CloseButton} from "../Admin/AdminModalElements";
import {
    TextUser,TextEquip
} from "./VolantorElements";
import hurt from '../../images/hurt.png';



const EquipmentModal = ({isOpen}) => {

    const { setAuth } = useContext(AuthContext);
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('/tasks-service-api/addtasks', {
            taskName: data['TaskName'],
            description: data['description'],
            createTasksDate: null,
            price: data['price'],
            id:0,
            plants:null,
            systemUser:null
        }).then((response) => {
            console.log(response.data);
        })
    };
    console.log(errors);




    const handleChange = e => {
        const {name, value} = e.target;

        setAuth (prevState => ({
            ...prevState,
            [name]: value
        }));
    };





    return(
        <>
            <div className = "modal">
                <div className="modalContainer">
                    <div className="modalContent">
                        <CloseButton onClick = {()=>{isOpen(false)}}>X</CloseButton>
                        <div className="ModalTables">
                        <div className="modalTable">
                           <TextUser>Your equipment is waiting for you in our office.</TextUser>
                            <TextEquip> You can take everything you need:
                            Gloves,
                            Stake,
                            throwel,
                            water container,
                               bag.</TextEquip>
                            <img className="ImageHurt" src={hurt} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default EquipmentModal;