import React, { useState } from 'react';
import RecipeChoices from './RecipeChoices';
import drinksJson from './drinks.json';

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        temperature: '',
        milk: '',
        syrup: '',
        blended: '',
    });

    const ingridients = {
        temperature: ['hot', 'lukewarm', 'cold'],
        milk: ['mocha', 'vanilla', 'coffee', 'maple', 'caramel', 'other', 'none'],
        syrup: ['cow', 'oat', 'goat', 'almond', 'none'],
        blended: ['yes', 'turbo', 'no'],
    };
    const [drink, setDrink] = useState("")
    const [trueRecipe, setTruRecipe] = useState({})
    const [checkTemperature, setCheckTemperature] = useState('')
    const [checkMilk, setCheckMilk] = useState('')
    const [checkSyrup, setCheckSyrup] = useState('')
    const [checkBlended, setCheckBlended] = useState('')
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckTemperature('wrong');
          }
          else {
            setCheckTemperature("correct");
          }
          if (trueRecipe.milk != inputs['milk']){
            setCheckMilk('wrong');
          }
          else {
            setCheckMilk("correct");
          }
          if (trueRecipe.syrup != inputs['syrup']){
            setCheckSyrup('wrong');
          }
          else {
            setCheckSyrup("correct");
          }
          if (trueRecipe.blended != inputs['blended']){
            setCheckBlended('wrong');
          }
          else {
            setCheckBlended("correct");
          }
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        })
        setCheckTemperature('');
        setCheckMilk('');
        setCheckSyrup('');
        setCheckBlended('');
        getNewDrink();
    };
    const getNewDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length)
        setDrink(drinksJson.drinks[randomDrinkIndex].name)
        setTruRecipe(drinksJson.drinks[randomDrinkIndex].ingridients)
    }

    return (
        <>
            <h2>Hi, I'd Like to order a: </h2>
            <div className="drinks-container">
                <h2 className="mini-header">{drink}</h2>
                <button type="new-drink-button" className="button newDrink" onClick={onNewDrink}></button>
            </div>
            <form>
            <div className="mini-container">
                <h3>Temperature</h3>
                <div className="answer-space" id={checkTemperature}>
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) =>
                        setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                    label="temperature"
                    choices={ingridients["temperature"]}
                    currentVal={inputs["temperature"]}
                />
            </div>
            <div className="mini-container">
                <h3>Milk</h3>
                <div className="answer-space" id={checkMilk}>
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                    handleChange={(e) =>
                        setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                            }))
                        }
                    label="milk"
                    choices={ingridients["milk"]}
                    currentVal={inputs["milk"]}
                />
            </div>
            <div className="mini-container">
                <h3>Syrup</h3>
                <div className="answer-space" id={checkSyrup}>
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                    handleChange={(e) =>
                        setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                    label="syrup"
                    choices={ingridients["syrup"]}
                    currentVal={inputs["syrup"]}
                />
            </div>
            <div className="mini-container">
                <h3>Blended</h3>
                <div className="answer-space" id={checkBlended}>
                    {inputs["blended"]}
                </div>
                <RecipeChoices
                    handleChange={(e) =>
                        setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                    label="blended"
                    choices={ingridients["blended"]}
                    currentVal={inputs["blended"]}
                />
            </div>
            </form>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type="button" className="button submit" onClick={onNewDrink}>
                New Drink
            </button>
        </>
    );
};

export default BaristaForm;
