import NavBar from "../components/_molecules/NavBar/NavBar";

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

/**
 * global layout that wraps the app.
 */
export default function Layout({ children }: ILayout) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="grow">{children}</main>
      <footer className="mt-8 grid h-24 place-items-center border-t bg-black">
        <p className="p-4 text-sm font-light text-white sm:p-2">
          shop your favorite brands at convert_threads
        </p>
      </footer>
    </div>
  );
}
