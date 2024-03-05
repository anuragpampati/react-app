import { useState } from "react";
import Like from "./Components/Like/Like";
// import ListGroup from "./Components/ListGroup";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Peparoni",
    toppings: ["mushrooms"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };
  return (
    <div>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      ></Like>
    </div>
  );
}

export default App;
