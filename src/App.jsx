import AppName from "./components/AppName";
import AppTitle from "./components/AppTitle";
import CurrentTime from "./components/CurrentTime";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";

function App() {
  let foodItems = ["Daal", "Roti", "Salad", "Vegetable", "Milk"];
  return (
    <center>
      <AppName />
      <AppTitle />
      <CurrentTime />
      <h1 className="food-heading">Food Items</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </center>
  );
}

export default App;
