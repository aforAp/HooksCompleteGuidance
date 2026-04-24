
import { uiAction } from "./ui-slice.js";
import { cartActions } from "./cart-slice.js";

export const fetchCartData = () => {

    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://chat-app-8c4b2-default-rtdb.firebaseio.com/cart.json');
             
            if(!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        }
try {

   const cartData = await fetchData();
   dispatch(cartActions.replaceCart({
    items: cartData.items || [],
    totalQuantity: cartData.totalQuantity
   }));
} 
catch (error) {
    dispatch(
        uiAction.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed!'
        })
    );
    }
}
}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
                status: 'pending',
                title: 'Sending....',
                message: 'Sending cart data!'
            })
        );

    const sendRequest = async () => {
      
         const response = await fetch('https://chat-app-8c4b2-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
              });
        
              if(!response.ok) {
               throw new Error('Sending cart data failed.');
              }
    };
      try {

          await sendRequest();
           dispatch(uiAction.showNotification({
           status: 'success',
           title: 'Success!',
           message: 'Cart data sent successfully!'
      }));
      }
      catch (error) {
           dispatch(uiAction.showNotification({
           status: 'error',
           title: 'Error!',
           message: 'Failed to send cart data!'
      }));
      }

             
    };
}