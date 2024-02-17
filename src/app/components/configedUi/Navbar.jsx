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
      <div className="flex flex-row items-center justify-evenly pb-[4svh] pt-[4svh] lg:justify-center">
        <Logo className="w-7 lg:w-10" />
        <div className="menu menu-horizontal hidden w-[70%] justify-evenly lg:inline-flex list-none">
          {navItems.map((item) => (
            <li key={item}>
              <a className="text-xl font-extrabold tracking-wider text-[#15375A]">
                {item.text}
              </a>
            </li>
          ))}
        </div>

        <MenuButton className="block w-7 lg:hidden lg:w-10" />
      </div>
    </nav>
  );
};

export default Navbar;
