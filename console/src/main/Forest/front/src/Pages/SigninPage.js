import React from 'react';
import Signin from "../components/Signin";

const SigninPage = ({setUserInfo}) => {

    return (
        <div>
            <Signin setUserInfo={setUserInfo}/>
        </div>
    );
};

export default SigninPage;
