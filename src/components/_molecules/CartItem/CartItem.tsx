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
    <div key={item.id} className="flex w-full justify-between gap-x-2 border">
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
        <div>
          <Icon onClick={handleRemoveItem}>
            <MdiWindowClose style={{ fontSize: "1rem" }} />
          </Icon>
        </div>
      </aside>
    </div>
  );
};

export default CartItem;
