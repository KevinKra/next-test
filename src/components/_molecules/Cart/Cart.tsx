import Modal from "../Modal/Modal";
import useCart from "../../../hooks/useCart/useCart";

const Cart = () => {
  const isOpen = useCart((state) => state.isOpen);
  const onClose = useCart((state) => state.onClose);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="grid w-fit place-items-center border border-red-400 bg-white p-4">
        <p>cart</p>
      </div>
    </Modal>
  );
};

export default Cart;
