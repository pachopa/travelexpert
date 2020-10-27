import React from 'react';

const travelPackage = (props) => (
    <div className="travelPackage">
        <h3>{props.name}</h3>
        <h5>{props.desc}</h5>
        <h5>Price: {props.price}</h5>
    </div>
);

export default travelPackage;