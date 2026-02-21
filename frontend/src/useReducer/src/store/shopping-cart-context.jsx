import { createContext,useState, useReducer } from "react";
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
   return state;
}
//it would nt need access for the state and action, so we can move it outside of the component function, and we can use it in the useReducer hook, and we can also export it for testing purposes


export function CartContextProvider({children}) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []});
  //connecting the function as a first arguments
  //second argumnet helps us to set the intiail state of the reducers.

   const [shoppingCart, setShoppingCart] = useState({
      items: [],
    });
  
    function handleAddItemToCart(id) {
      setShoppingCart((prevShoppingCart) => {
        const updatedItems = [...prevShoppingCart.items];
  
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === id,
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === id);
          updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
          items: updatedItems,
        };
      });
    }
  
    function handleUpdateCartItemQuantity(productId, amount) {
      setShoppingCart((prevShoppingCart) => {
        const updatedItems = [...prevShoppingCart.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === productId,
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
          items: updatedItems,
        };
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