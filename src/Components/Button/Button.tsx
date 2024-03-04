import styles from "./Button.module.css";

interface props {
  children: string;
  onClick: () => void;
  color?: "red" | "blue" | "black";
}

const Button = ({ children, onClick, color }: props) => {
  return (
    <button
      className={[styles.btn, styles["btn" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
