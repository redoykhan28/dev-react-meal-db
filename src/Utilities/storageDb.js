let addDb = item => {

    let storeCart = {}

    const storeFood = localStorage.getItem('foodCart')
    if (storeFood) {

        storeCart = JSON.parse(storeFood)
    }

    let quantity = storeCart[item];
    if (quantity) {

        let newQuantity = quantity + 1;
        storeCart[item] = newQuantity
    }

    else {

        storeCart[item] = 1;
    }

    localStorage.setItem('foodCart', JSON.stringify(storeCart));

}


export { addDb };