import { useState, useEffect } from "react";

interface IModal {
  isOpen?: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Modal = ({ isOpen, onClose, children }: IModal) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 z-50">
      <div onClick={handleClose} className="h-screen w-screen bg-black/40" />
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          z-20
          w-[90%]
          -translate-x-1/2
          overflow-hidden
          shadow-lg 
          duration-300
          sm:w-fit 
          ${showModal ? "-translate-y-1/2" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
