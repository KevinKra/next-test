import Button from "../../_atoms/Button/Button";

const NavBar = () => {
  return (
    <nav className="flex h-12 w-full  border-b bg-black px-4 text-center sm:h-16 sm:bg-white sm:px-2">
      <div className="mx-auto flex place-items-center gap-x-4">
        <h1 className="cursor-pointer text-lg font-bold text-white sm:text-2xl sm:text-black">
          Convert_Threads
        </h1>
        <div>
          <Button outlined text="cart" action={() => {}} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
