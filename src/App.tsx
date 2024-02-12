import Alert from "./Components/Alert";
import Button from "./Components/Button";
// import ListGroup from "./Components/ListGroup";

function App() {
  // let items = ["paris", "NY", "SF", "AL", "FL"];
  // const handlItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup items={items} heading={"cities"} onSelectItem={handlItem} />
  //   </div>
  // );
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>
        newButton<h1>Hello</h1>
      </Button>
    </div>
  );
}

export default App;
