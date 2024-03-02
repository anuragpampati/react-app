import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
// import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["paris", "NY", "SF", "AL", "FL"];
  const handlItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={items} heading={"cities"} onSelectItem={handlItem} />
    </div>
  );
  // const [visible, setvisibility] = useState(false);
  // return (
  //   <div>
  //     {visible && <Alert Onclose={() => setvisibility(false)}>My Alert</Alert>}
  //     <Button color="primary" onClick={() => setvisibility(true)}>
  //       newButton<h1>Hello</h1>
  //     </Button>
  //   </div>
  // );
}

export default App;
