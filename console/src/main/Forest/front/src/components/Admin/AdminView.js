import React, {useEffect, useState} from 'react';
import {Admin,Resource} from "react-admin";
import restProvider from 'ra-data-simple-rest'
import PostList from "./PostList";
import axios from "../../axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./AdminStyle.css";
import {forEach} from "react-bootstrap/ElementChildren";
import Nav from "../Nav";


const AdminView = () => {
    const [user , setUser] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/customer-service-api//findall', {})
            .then((response) => {
             setUser(response.data);
             response.data.map((data,index)=>{console.log(data)});
            })


    },[]);

/*return( user.forEach((el)=>{
    console.log(el)
    })
);*/


    return(
        <>
            <div className="page">
            <Nav/>

        <table className="table-auto w-full mt-3">
            <thead>
            <tr>
                <th>ID</th>
                <th >Email</th>
                <th >First Name</th>
                <th >Last Name</th>
                <th >Password</th>
                <th>User Name Date</th>
                <th>UserRole</th>

            </tr>
            </thead>
            <tbody>
            {user.map((item, index) => {
                return (
                    <tr key={`user-${item.id}`}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.password}</td>
                        <td>{item.username}</td>
                        <td>{item.userRole}</td>

                    </tr>
                )
            })}
            </tbody>
        </table>
            </div>
            </>
    )
};

export default AdminView;