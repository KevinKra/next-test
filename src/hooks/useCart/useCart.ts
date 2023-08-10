import { create } from "zustand";
import { Product } from "../../types";
import cloneDeep from "clone-deep";

export interface CartItem extends Product {
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
   * total combined value of all the cart items.
   */
  cartTotal: number;
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
  cartTotal: 0,
  addCartItem: (newItem) => {
    const cartTotal = get().cartTotal;
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
      // cartTotal + parseFloat(newItem.price);
    } else {
      // else, add new item
      cartItemsClone.push({ ...newItem, count: 1 });
      // cartTotal + parseFloat(newItem.price);
    }
    set({
      items: cartItemsClone,
      cartTotal: cartTotal + parseFloat(newItem.price),
    });
  },
  removeCartItem: (itemId) => {
    const cartTotal = get().cartTotal;
    const cartItems = get().items;

    let removedItemsPrice: string;

    const filteredCartItems = cartItems.filter((item) => {
      if (item.id === itemId) removedItemsPrice = item.price;
      return item.id !== itemId;
    });

    set({
      items: filteredCartItems,
      cartTotal: cartTotal - parseFloat(removedItemsPrice),
    });
  },
  clearCart: () => set({ items: [], cartTotal: 0 }),
}));

export default useCart;
