import React, {useContext, useEffect, useState} from 'react';
import PostList from "./PostList";
import axios from "../../axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./AdminStyle.css";
import Nav from "../Nav";
import AdminNavigation from "./AdminNavigation";
import AuthContext from "../../context/AuthProvider";
import {Signinbtn} from "../Signin/SigninElements";
import AdminModal from "./AdminModal";
import {NavBtn,NavBtnAdd} from "./AdminNavElements";



const AdminViewAddTask = () => {
    const [user , setUser] = useState([]);
    const { setAuth,auth,history} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open,isOpen] = useState();

    useEffect(() => {

        axios.get('http://localhost:8080/tasks-service-api/findtasks', {})
            .then((response) => {
             setUser(response.data);
             response.data.map((data,index)=>{console.log(data)});
            })


    },[open]);





    return(
        <>

            {open && <AdminModal isOpen = {isOpen}/>}
            <AdminNavigation/>
            <div className="page">

        <table className="table-auto w-full mt-3">

            <thead>

            <tr>

                <th>ID</th>
                <th >Task Name</th>
                <th >description</th>
                <th >createTasksDate</th>
                <th >price</th>
                <NavBtnAdd  to='/AdminViewAddTask' onClick = {()=>{isOpen(true)}}>Add Task</NavBtnAdd>


            </tr>
            </thead>
            <tbody>
            {user.map((item, index) => {
                return (
                    <tr key={`user-${item.id}`}>
                        <td>{item.id}</td>
                        <td>{item.taskName}</td>
                        <td>{item.description}</td>
                        <td>{item.createTasksDate}</td>
                        <td>{item.price}</td>


                    </tr>
                )
            })}
            </tbody>
        </table>
            </div>
            </>
    )
};

export default AdminViewAddTask;