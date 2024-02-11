function ListGroup() {
  let items = ["paris", "NY", "SF", "AL", "FL"];
  //   items = [];
  const m = items.length === 0 ? <p>No items left</p> : null;
  return (
    <>
      <h1>List</h1>
      {m}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
