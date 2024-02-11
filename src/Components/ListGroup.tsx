import * as React from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //   items = [];
  const m = items.length === 0 && <p>No items left</p>;
  const [se, setSelectedIndex] = React.useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
