import React from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const navItems = [
    { text: "COLLECTION" },
    { text: "PRODUCTS" },
    { text: "DESIGN" },
    { text: "BLOG" },
    { text: "CONTACT" },
    { text: "IDENTITY" },
  ];

  return (
    <nav className="">
      {" "}
      <div className="flex flex-row justify-evenly lg:justify-center items-center pt-[6svh] pb-[4svh]">
        <Logo className="lg:w-10 w-7" />
        <div className="w-[70%] menu menu-horizontal justify-evenly lg:inline-flex hidden">
          {navItems.map((item) => (
            <li key={item}>
              <a className="text-xl font-extrabold tracking-wider text-[#15375A]">
                {item.text}
              </a>
            </li>
          ))}
        </div>

        <MenuButton className="lg:w-10 w-7 block lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
