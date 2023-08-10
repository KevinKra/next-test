import Modal from "../Modal/Modal";
import useCart from "../../../hooks/useCart/useCart";
import ProductImage from "../ProductImage/ProductImage";
import Button from "../../_atoms/Button/Button";

const Cart = () => {
  const isOpen = useCart((state) => state.isOpen);
  const onClose = useCart((state) => state.onClose);
  const clearCart = useCart((state) => state.clearCart);
  const items = useCart((state) => state.items);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="grid w-full place-items-center gap-y-2 border bg-white p-4 sm:w-[30rem]">
        {items.length ? (
          items.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-full justify-between gap-x-2 border"
              >
                <div className="w-fit border-r">
                  <ProductImage
                    noShadow
                    title={item.title}
                    image={item.images[0]}
                    width={150}
                  />
                </div>
                <aside className="w-full p-2">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <div className="flex gap-x-2">
                    <p className="text-sm">total x {item.count}</p>
                    <p>${item.price}</p>
                  </div>
                </aside>
              </div>
            );
          })
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

export default Cart;
