import React from 'react';
import './App.css'

const Card = (props) => {
    return (

        <div>
            <img src={props.src} />
            <h3>{props.name}</h3>
            <h5>{props.type}</h5>
            <button>View Menu</button>
        </div>
    
    )
}