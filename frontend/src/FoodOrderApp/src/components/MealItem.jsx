import { useContext } from "react";
import { currenyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
export default function MealItem({ meal }) {
      const cartCtx = useContext(CartContext);
    function handleAddMealToCart() {
      cartCtx.addItem(meal);
    }

    const {name, image} = meal;

    return (
        <li className="meal-item">
           <article>
              <img src={`http://localhost:3002/${image}`} alt={name} />
              <div>
                <h3>{name}</h3>
                 <p className="meal-item-price">{currenyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
              </div>
<p className="meal-item-action">
    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
</p>
           </article>
        </li>
    )
}