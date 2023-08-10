import React from "react";
import useCart, { CartItem } from "../../../hooks/useCart/useCart";
import Icon from "../../_atoms/Icon/Icon";
import ProductImage from "../ProductImage/ProductImage";
import MdiWindowClose from "~icons/mdi/window-close";

interface ICartItem {
  item: CartItem;
}

const CartItem = ({ item }: ICartItem) => {
  const removeCartItem = useCart((state) => state.removeCartItem);

  const handleRemoveItem = () => {
    removeCartItem(item.id);
  };

  return (
    <div
      key={item.id}
      className="flex w-full justify-between gap-x-2 border border-black"
    >
      <div className="w-fit border-r">
        <ProductImage
          noShadow
          title={item.title}
          image={item.images[0]}
          width={150}
        />
      </div>
      <aside className="flex w-full p-2">
        <div className="grow">
          <h3 className="text-xl font-medium">{item.title}</h3>
          <div className="flex items-center gap-x-2 text-sm">
            <p>total x {item.count}</p>
            <p className="font-bold">${item.price}</p>
          </div>
        </div>
        <div className="mr-1 mt-1">
          <Icon onClick={handleRemoveItem}>
            <MdiWindowClose style={{ fontSize: "1rem" }} />
          </Icon>
        </div>
      </aside>
    </div>
  );
};

export default CartItem;
