interface props {
  children: string;
  Onclose: () => void;
}

const Alert = ({ children, Onclose }: props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>"Holy guacamole!"</strong> {children}
      <button
        type="button"
        className="btn-close"
        onClick={Onclose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
