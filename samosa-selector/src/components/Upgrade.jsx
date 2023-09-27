import React from 'react';

const Upgrade = (props) => {
    return (
        <>
        <h3>{props.packageName}</h3>
        <p>{props.numPerClick}</p>
        <button>{props.addSamosa}</button>
        </>
        
    )
}

export default Upgrade;
