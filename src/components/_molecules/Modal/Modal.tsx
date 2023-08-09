interface IModal {
  children: JSX.Element;
}

const Modal = ({ children }: IModal) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
