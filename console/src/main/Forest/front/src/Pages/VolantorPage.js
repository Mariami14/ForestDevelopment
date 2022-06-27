import React from 'react';
import Volantor from "../components/Volantor";

const VolantorPage = ({userInfo}) => {
    return (
        <div>
            <Volantor userInfo={userInfo}/>
        </div>
    );
};

export default VolantorPage;
