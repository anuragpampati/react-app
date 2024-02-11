import ListGroup from "./Components/ListGroup";

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
}

export default App;
