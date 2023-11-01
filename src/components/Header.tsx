import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className=" w-screen bg-lgBackground ">
      <div className="h-[150px] container w-[1024px] mx-auto bg-lgBackground text-3xl flex flex-col items-center justify-center">
        <NavMenu />
      </div>
    </header>
  );
}
