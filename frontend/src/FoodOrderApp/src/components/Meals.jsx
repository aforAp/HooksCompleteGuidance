import useHttp from "./hooks/useHttp.js";
import MealItem from "./MealItem.jsx";
import Error from "./UI/Error.jsx";
const requestConfig = {};

export default function Meals() {
  const {
    data: loadedmeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3002/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      {loadedmeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
