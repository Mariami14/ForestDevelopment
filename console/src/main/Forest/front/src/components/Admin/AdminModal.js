import React, {useContext, useEffect, useState} from 'react';
import PostList from "./PostList";
import axios from "../../axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./AdminStyle.css";
import AuthContext from "../../context/AuthProvider";
import {Error, LoginForm, Registerbtn,CloseButton} from "./AdminModalElements";



const AdminModal = ({isOpen}) => {

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
            isOpen(false);
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
                        <LoginForm onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"  className="AdminInput" placeholder="Enter Task name" {...register("TaskName",{required: "You must specify a TaskName"} )}/>
                            <input type="text"  className="AdminInput" placeholder="Enter description" {...register("description", {required: "You must specify a description", })} />
                            {/*<input type="text" placeholder="Enter task date" {...register("createTasksDate", )} />*/}
                            <input type="text"  className="AdminInput" placeholder="Enter price" {...register("price", {required: "You must specify a price",})} />


                            <Registerbtn type="submit" >Add Task</Registerbtn>
                        </LoginForm>
                        {errors.TaskName && <Error>{errors.TaskName.message}</Error>}
                        {errors.description && <Error>{errors.description.message}</Error>}
                        {/*{errors.createTasksDate && <Error>{errors.createTasksDate.message}</Error>}*/}
                        {errors.price && <Error>{errors.price.message}</Error>}
                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default AdminModal;