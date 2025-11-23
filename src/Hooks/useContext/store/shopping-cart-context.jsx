// CartContext.js
import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = [...state.items];
      const existingIndex = updatedItems.findIndex(
        (item) => item.id === action.payload
      );

      if (existingIndex >= 0) {
        updatedItems[existingIndex].quantity += 1;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload
        );
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    }

    case 'UPDATE_ITEM': {
      const updatedItems = [...state.items];
      const index = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      if (index >= 0) {
        updatedItems[index].quantity += action.payload.amount;
        if (updatedItems[index].quantity <= 0) {
          updatedItems.splice(index, 1);
        }
      }

      return { items: updatedItems };
    }

    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(shoppingCartReducer, { items: [] });

  const addItemToCart = (id) => dispatch({ type: 'ADD_ITEM', payload: id });
  const updateItemQuantity = (productId, amount) =>
    dispatch({ type: 'UPDATE_ITEM', payload: { productId, amount } });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItemToCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
