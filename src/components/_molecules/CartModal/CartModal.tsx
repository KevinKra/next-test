import Modal from "../Modal/Modal";
import useCart from "../../../hooks/useCart/useCart";
import Button from "../../_atoms/Button/Button";
import CartItem from "../CartItem/CartItem";

const CartModal = () => {
  const isOpen = useCart((state) => state.isOpen);
  const onClose = useCart((state) => state.onClose);
  const clearCart = useCart((state) => state.clearCart);
  const items = useCart((state) => state.items);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="grid w-full place-items-center gap-y-2 border bg-white p-4 sm:w-[30rem]">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="grid w-full select-none place-items-center border border-black p-8">
            <p>cart is currently empty</p>
          </div>
        )}
        {items.length ? (
          <div
            className="
            mt-4
            grid 
            w-full 
            select-none
            place-items-center
            border
            border-black
            p-4
          "
          >
            <p>
              cart total:{" "}
              <span className="font-bold text-rose-500">$350.50</span>
            </p>
          </div>
        ) : null}
        <div className="relative my-4 flex w-full flex-col gap-4 sm:flex-row">
          <Button fullWidth outlined text="clear cart" action={clearCart} />
          <Button
            fullWidth
            disabled={!items.length}
            showButtonMirror
            text="checkout"
            action={() => {}}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
