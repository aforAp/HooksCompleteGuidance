import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
    //here we need to use for the autocompletion (for only for this purpose)
});

function shoppingCartReducer(state, action) {
   //state we will get the current state of the shopping cart, 
   // and action we will get the action that we want to perform on the shopping cart, 
   // and we will return the new state of the shopping cart based on the action that we want to perform
   if(action.type === 'ADD_ITEM'){
     const updatedItems = [...state.items];
  
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload,
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
          updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
          ...state,
          items: updatedItems,
        };
   }

   if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId,
    );
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
      quantity: updatedItems[updatedItemIndex].quantity + action.payload.amount,
    };
    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    return {
      ...state,
      items: updatedItems,
    };
    
  }
return state;
}
//it would nt need access for the state and action, so we can move it outside of the component function, and we can use it in the useReducer hook, and we can also export it for testing purposes


export function CartContextProvider({children}) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []});
  //connecting the function as a first arguments
  //second argumnet helps us to set the intiail state of the reducers.
    function handleAddItemToCart(id) {
      shoppingCartDispatch({
        type: "ADD_ITEM",
        payload: id        
      });
    }
  
    function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId: productId,
        amount: amount,
        /*
        productId, amount also we can write*/
      }
    });
    }
  
    const ctxValue = {
      items: shoppingCartState.items,
      addItemToCart: handleAddItemToCart,
      updateItemQuantity: handleUpdateCartItemQuantity,
      
    };

return <CartContext.Provider value={ctxValue}>
    {children}
    </CartContext.Provider>;
  
}


export default CartContextProvider;