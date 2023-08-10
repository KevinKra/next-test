import useCart from "../../../hooks/useCart/useCart";
import MdiCart from "~icons/mdi/cart.jsx";
import Icon from "../../_atoms/Icon/Icon";

const NavBar = () => {
  const onOpen = useCart((state) => state.onOpen);
  const cartTotal = useCart((state) => state.cartTotal);

  return (
    <nav className="sticky top-0 z-40 flex h-14 w-full border-b bg-black sm:h-16 sm:bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-x-4 px-4">
        <h1
          className="
            cursor-pointer 
            text-lg 
            font-bold 
            text-white 
            sm:text-2xl 
            sm:text-black
          "
        >
          Convert_Threads
        </h1>
        <div
          onClick={onOpen}
          className="flex cursor-pointer items-center gap-x-4 rounded border p-2 text-white sm:text-gray-800"
        >
          <Icon>
            <MdiCart style={{ fontSize: "1.2rem" }} />
          </Icon>
          <p className="text-sm">
            {cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : "empty"}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
