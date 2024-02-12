interface props {
  children: string;
}

const Alert = ({ children }: props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
