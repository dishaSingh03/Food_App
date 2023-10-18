import React from "react";


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    searchItem: '',
    addItem: (item) => {},
    removeItem: (id) => {},
    searchItem: (item) => {}

});

export default CartContext;