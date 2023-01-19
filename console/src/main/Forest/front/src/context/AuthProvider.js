import {createContext, useEffect, useState} from "react";
import {  } from 'react-router-dom'
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [history,setHistory] = useState("/");

    let user;

    const GenerateRole = () =>{
        if (user?.userRole == "VOLUNTEER" ) {
            setHistory("/Volantor");}

        else if (user?.userRole == "USER") {
            setHistory("/Benefactor");

        }
        else if (user?.userRole == "ADMIN") {
            setHistory("/AdminView");
        }
        else setHistory("/");
    };

    useEffect(() => {
        user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {setAuth(user)}
        else {setAuth(false)};

        GenerateRole();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, history }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;