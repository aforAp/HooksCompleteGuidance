import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import { currenyFormatter } from "../../util/formatting";
import Input from "./Input";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "./Button.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    const response = await fetch("http://localhost:3002/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
    // we are stopping the default creating & send process here.
    //with the help of the event.preventDefault() method.
    if (!response.ok) {
      throw new Error("Failed to send order");
    }

    const data = await response.json();
    console.log(data);
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currenyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>

        <p className="modal-actions">
          <Button onClick={handleClose} type="button" textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
