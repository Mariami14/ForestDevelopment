import React from 'react';

const Advantages = (props) => {
    return (
        <div className={'flex mt-12'} style={{width:'48%'}}>
            <div className="flex-shrink-0">
                <img src={props.src} alt=""/>
            </div>

        </div>
    );
};

export default Advantages;
