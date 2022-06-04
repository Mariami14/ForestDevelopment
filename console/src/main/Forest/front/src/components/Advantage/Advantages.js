import React from 'react';

const Advantages = (props) => {
    return (
        <div className={'flex mt-12'} style={{width:'48%'}}>
            <div className="flex-shrink-0">
                <img src={props.src} alt=""/>
            </div>
            <div className="ml-6 text-sm font-light">
                <p className={'font-normal text-lg mb-2 font-bold'}>{props.header}</p>
                <p style={{color:'#606E79'}}>{props.text}</p>
            </div>
        </div>
    );
};

export default Advantages;
