import React from 'react';
import './cart.css'

const Cart = (props) => {
    const { cart } = props


    return (

        <div className='cart'>

            <h3 style={{ textAlign: 'center' }}>Cart Summary</h3>
            <h4>Selected Items: {cart.length}</h4>
            <ol>
                {cart.map(food => <li>{food.strMeal}</li>)}
            </ol>

        </div>
    );
};

export default Cart;