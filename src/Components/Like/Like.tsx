import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return (
      <div>
        <AiFillHeart color="red" size={30} onClick={toggle} />
      </div>
    );
  } else {
    return (
      <div>
        <AiOutlineHeart color="red" size={30} onClick={toggle} />
      </div>
    );
  }
};

export default Like;
