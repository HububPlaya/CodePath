import React from 'react';


const Card = (props) => {
    return (
    <>
    <img src={props.img} />
    <h3>{props.restaurant}</h3>
    <h4>{props.food_type}</h4>
    <button><a href={props.link}>View Menu</a></button>
    </>
    )
}

export default Card;