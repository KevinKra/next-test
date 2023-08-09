import { create } from "zustand";
import { Product } from "../../types";
import cloneDeep from "clone-deep";

interface CartItem extends Product {
  count: number;
}

interface CartStore {
  // cart modal controls
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  /**
   * when product `objects` are added to the cart, they are stored in this stateful array.
   */
  items: CartItem[];
  /**
   * adds new items or increments (count and price) of existing items in the cart.
   */
  addCartItem: (newItem: Omit<CartItem, "count">) => void;
  /**
   * removes item (regardless of count) from the cart.
   */
  removeCartItem: (itemId: string) => void;
  /**
   * removes all items from the cart, sets cart as empty array `[]`
   */
  clearCart: () => void;
}

const useCart = create<CartStore>((set, get) => ({
  // cart modal controls
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),

  // cart state and logic
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

    set({ items: cartItemsClone });
  },
  removeCartItem: (itemId) => {
    const cartItems = get().items;
    const cartItemsClone = cloneDeep(cartItems);

    const filteredCartItems = cartItemsClone.filter(
      (item) => item.id !== itemId,
    );
    set({ items: filteredCartItems });
  },
  clearCart: () => set({ items: [] }),
}));

export default useCart;
