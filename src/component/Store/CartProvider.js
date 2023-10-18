import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      prevState.totalAmount + action.item.price * action.item.amount;

   
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = prevState.items[existingCartItemIndex];
    let updatedItems;
    //console.log(existingCartItem, prevState.items);

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //console.log(updatedItem, existingCartItem)
      updatedItems = [...prevState.items];
    console.log(prevState);
      updatedItems[existingCartItemIndex] = updatedItem;
      //console.log(updatedItems);
    } else {
      updatedItems = prevState.items.concat(action.item);
    }

    return {
      ...prevState,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = prevState.items[existingCartItemIndex];
    const updatedTotalAmount = prevState.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = prevState.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      ...prevState,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  console.log(prevState);


  if (action.type === "SEARCH") {
   console.log(action.searchTerm);
   
    // const filterByName = prevState.items.filter((item) =>
    //     item.name.toLowerCase().includes(action.searchTerm.toLowerCase())
    //   );
    console.log({
      ...prevState,
      searchTerm: action.searchTerm,
    });

      return {
        ...prevState,
        searchTerm: action.searchTerm,
      };

    
  }

  return initialCartstate;
};

const initialCartstate = {
  items: [],
  totalAmount: 0,
  searchTerm: '',
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartstate
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const searchItemFromCartHandler = (term) => {
    dispatchCartAction({ type: "SEARCH", searchTerm: term});
  };
  

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    searchTerm: cartState.searchTerm,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    searchItem: searchItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
