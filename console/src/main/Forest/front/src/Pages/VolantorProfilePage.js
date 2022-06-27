import React from 'react';
import VolantorProfile from "../components/VolantorProfile";

const VolantorProfilePage = ({userInfo}) => {
    return (
        <div>
            <VolantorProfile userInfo={userInfo}/>
        </div>
    );
};

export default VolantorProfilePage;
