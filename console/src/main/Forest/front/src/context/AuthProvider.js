import {createContext, useEffect, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [history,setHistory] = useState("/");
    let user;
    useEffect(() => {
        user = JSON.parse(localStorage.getItem('user'));
        if (user) {setAuth(user)}
        else {setAuth(false)};
        GenerateRole();
    }, []);


    const GenerateRole =()=>{
        if (user?.userRole === "VOLUNTEER" ) {
            setHistory("/Volantor");}

        else if (user?.userRole === "USER") {
            setHistory("/Benefactor");

        }
        else if (user?.userRole === "ADMIN") {
            setHistory("/ADMIN");


        }
        else setHistory("/");
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, history }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;