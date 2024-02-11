import * as React from "react";

function ListGroup() {
  let items = ["paris", "NY", "SF", "AL", "FL"];
  //   items = [];
  const m = items.length === 0 && <p>No items left</p>;
  const [se, setSelectedIndex] = React.useState(-1);

  return (
    <>
      <h1>List</h1>
      {m}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              se === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
