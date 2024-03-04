import { useState } from "react";
import Like from "./Components/Like/Like";
// import ListGroup from "./Components/ListGroup";

function App() {
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
