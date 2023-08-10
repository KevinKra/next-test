import Modal from "../Modal/Modal";
import useCart from "../../../hooks/useCart/useCart";
import Button from "../../_atoms/Button/Button";
import CartItem from "../CartItem/CartItem";
import Icon from "../../_atoms/Icon/Icon";
import MdiWindowClose from "~icons/mdi/window-close";

const CartModal = () => {
  const { isOpen, items, cartTotal, onClose, clearCart } = useCart((state) => ({
    isOpen: state.isOpen,
    items: state.items,
    cartTotal: state.cartTotal,
    onClose: state.onClose,
    clearCart: state.clearCart,
  }));

  const cartHasItems = items.length;

  const CartBody = () => {
    if (cartHasItems) {
      return (
        <>
          {/* cart floating close button */}
          <div
            onClick={onClose}
            className="
              absolute 
              -right-0 
              -top-10 
              flex 
              cursor-pointer 
              items-center 
              gap-x-2 
              border 
              border-black 
              bg-white 
              p-1 
              px-2
              hover:bg-gray-50
            "
          >
            <p className="translate-y-[-1px] text-sm">close</p>
            <Icon>
              <MdiWindowClose style={{ fontSize: "0.8rem" }} />
            </Icon>
          </div>
          {/* cart items */}
          <div className="flex w-full flex-col gap-y-4 overflow-y-scroll">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          {/* cart total */}
          <div
            className="
              mt-6
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
              <span className="font-bold text-rose-500">
                ${cartTotal.toFixed(2)}
              </span>
            </p>
          </div>
          {/* cart buttons */}
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
        </>
      );
    } else {
      return (
        <>
          <div className="grid w-full select-none place-items-center border border-black p-8">
            <p>cart is currently empty</p>
          </div>
          <div className="relative mt-4 flex w-full flex-col gap-4 sm:flex-row">
            <Button fullWidth text="close" action={onClose} />
          </div>
        </>
      );
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="grid w-full place-items-center border border-black bg-white p-4 sm:w-[30rem]">
        <CartBody />
      </div>
    </Modal>
  );
};

export default CartModal;
