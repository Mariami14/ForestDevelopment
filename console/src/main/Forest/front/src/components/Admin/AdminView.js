import React, {useEffect, useState} from 'react';
import PostList from "./PostList";
import axios from "../../axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./AdminStyle.css";
import {forEach} from "react-bootstrap/ElementChildren";
import Nav from "../Nav";
import AdminNavigation from "./AdminNavigation";
import trash from '../../images/trash.svg'
import pencil from '../../images/pencil.svg'
import {PlayBtn, VideoWrapper} from "../VideoSection/videoSectionElement";
import SoundOff from "../../images/soundOff.svg";
import SoundOn from "../../images/soundOn.svg";
import AdminModalEdit from "./AdminModalEdit";


const AdminView = () => {
    const [user , setUser] = useState([]);
    const [open,isOpen] = useState();
    const [product,isProduct] = useState();

    const DeleteItem = (id) =>{
        console.log(id);
        axios.delete('http://localhost:8080/tasks-service-api/deletetasks', {
            params:{
                'id': id,
            }
        })
            .then((response) => {
                console.log('success')
            })
    };

    useEffect(() => {

        axios.get('http://localhost:8080/tasks-service-api/findtasks', {})
            .then((response) => {
                setUser(response.data);
                response.data.map((data,index)=>{console.log(data)});
            })


    },[open]);

/*return( user.forEach((el)=>{
    console.log(el)
    })
);*/


    return(
        <>

            {open && <AdminModalEdit isOpen = {isOpen} product = {product} />}
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
                <th>action</th>

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
                        <td>
                            <div className="edit" onClick={ () => { DeleteItem(item.id)} }>
                                <img src={trash} alt=""/>
                            </div>
                            <div className="edit" onClick={ () => {isOpen(true); isProduct(item) }}>
                                {console.log(product,'lana')}
                                <img src={pencil} alt="edit"/>
                            </div>
                        </td>


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