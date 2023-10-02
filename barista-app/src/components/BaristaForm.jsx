import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";


    const BaristaForm = () => {
        // handle 4 ingridients 
        const [inputs, setInputs] = useState({
            "temperature": "",
            "milk": "",
            "syrup": "",
            "blended": ""
        })
        // list of options 
        const ingridients = {
            "temperature": ["hot", "lukewarm", "cold"],
            "milk": ["mocha", "vanilla", "coffee", "maple", "caramel", "other", "none"],
            "syrup": ["cow", "oat", "goat", "almond", "none"],
            "blended": ["yes", "turbo", "no"]
        }
        const onCheckAnswer = () => {}
        const onNewDrink = () => {}
        return (
            <>
            <h2>Hi, I'd Like to order a: </h2>
            <form>
            
            </form>
            <button type="button submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
            <button type="new-drink-button" className="button submit" onClick={onNewDrink}>New Drink</button>
            </>
        )
}

export default BaristaForm;