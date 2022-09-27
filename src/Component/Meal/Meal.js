import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { strMealThumb, strMeal, strInstructions, strCategory } = props.meal

    return (

        <div className='card'>
            <img src={strMealThumb} alt="Food Thumb" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}...</p>
            <small style={{ marginTop: "10px", fontWeight: 'bold' }}> Category: {strCategory}</small>
            <button className='btn' onClick={() => props.eventHandler(props.meal)}>Add Item</button>
        </div>

    );
};

export default Meal;