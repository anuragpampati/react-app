import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick: () => void;
  color: string;
}

const Button = ({ children, onClick, color }: props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
