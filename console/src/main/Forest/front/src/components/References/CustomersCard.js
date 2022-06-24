import React from 'react';
import {Card} from "./ReferencesElement";

const CustomersCard = (props) => {

    return (
        <Card>
            <div className="flex items-center">
                <div className="customerImage">
                    <img style={{maxWidth:'64px',maxHeight:'64px'}} src={props.img} alt=""/>
                </div>
                <div className="">
                    <p className={'font-semibold'}>{ props.name }</p>
                    <p className={'text-sm font-light'}>{ props.surname }</p>
                </div>
            </div>
            <div className="flex space-x-5 pl-4 stars mt-2">
                <img src="./images/starIcon.svg" alt=""/>
                <img src="./images/starIcon.svg" alt=""/>
                <img src="./images/starIcon.svg" alt=""/>
                <img src="./images/starIcon.svg" alt=""/>
                <img src="./images/starIcon.svg" alt=""/>
            </div>
            <div className="mt-6 text-sm">
                { props.text }
            </div>
        </Card>
    );
};

export default CustomersCard;
