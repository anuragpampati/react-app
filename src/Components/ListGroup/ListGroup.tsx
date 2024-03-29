import * as React from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
              onSelectItem(item);
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
