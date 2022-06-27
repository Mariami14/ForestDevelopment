import React from 'react';
import Benefactor from "../components/Benefactor";

const BenefactorPage = ({userInfo}) => {
    return (
        <div>
            <Benefactor userInfo={userInfo}/>
        </div>
    );
};

export default BenefactorPage;
