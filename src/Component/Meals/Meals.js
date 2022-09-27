import React, { useEffect, useState } from 'react';
import { addDb } from '../../Utilities/storageDb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


    const [item, setItem] = useState([])
    const getItemName = (meal) => {

        console.log(meal)
        let newItem = [...item, meal]
        setItem(newItem)
        addDb(meal.idMeal)

    }

    return (
        <div className='main-container'>

            <div className='food'>
                <h3 style={{ marginTop: '50px' }}>Food Category: <span style={{ fontWeight: 'normal' }}>{meals.length} items found</span> </h3>

                <dir className='food-container'>
                    {
                        meals.map(meal => <Meal
                            keys={meal.idMeal}
                            meal={meal}
                            eventHandler={getItemName}
                        ></Meal>)
                    }
                </dir>

            </div>

            <div className='cart-contaier'>
                <Cart cart={item}></Cart>
            </div>


        </div>
    );
};

export default Meals;