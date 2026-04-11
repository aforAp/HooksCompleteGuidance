import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedmeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3002/meals");
      if (!response.ok) {
        throw new Error("Failed to fetch meals");
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedmeals.map((meal) => (
       <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
