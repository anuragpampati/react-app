import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["paris", "NY", "SF", "AL", "FL"];
  return (
    <div>
      <ListGroup items={items} heading={"cities"} />
    </div>
  );
}

export default App;
