import { create } from "zustand";
import { Product } from "../../types";
import cloneDeep from "clone-deep";

interface CartItem extends Product {
  count: number;
}

interface CartStore {
  items: CartItem[];
  addCartItem: (newItem: Omit<CartItem, "count">) => void;
}

const useCart = create<CartStore>((set, get) => ({
  items: [],
  addCartItem: (newItem) => {
    const cartItems = get().items;
    const cartItemsClone = cloneDeep(cartItems);

    const itemFoundIdx = cartItemsClone.findIndex(
      (item) => item.id === newItem.id,
    );

    // check if item already exists
    if (itemFoundIdx >= 0) {
      // if so, update count and cost
      const foundItem = cartItemsClone[itemFoundIdx];
      foundItem.count += 1;
      foundItem.price = (
        parseFloat(foundItem.price) + parseFloat(newItem.price)
      ).toFixed(2);
    } else {
      // else, add new item
      cartItemsClone.push({ ...newItem, count: 1 });
    }
    // update cart with clone
    console.log("x", cartItemsClone);
    set({ items: cartItemsClone });
  },
}));

export default useCart;
