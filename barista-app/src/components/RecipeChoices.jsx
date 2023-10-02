import React, {useState} from 'react';

const RecipeChoices = () => {
    const handleChange = () => {}
    return (
        <>
        <div>
            {choices && 
                choices.map((choice) => (
                    <li key={choice}>
                        <input
                            id={choice}
                            value={choice}
                            name={label}
                            type="radio"
                            onChange={handleChange}
                            checked = {checked == choice}
                        />
                        {choice}
                    </li>
                ))}
        </div>
        </>
    )
}

export default RecipeChoices;