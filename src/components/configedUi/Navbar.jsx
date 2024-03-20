import React from "react";
import Logo from "../svgs/Logo";
import MenuButton from "./MenuButton";
import { SheetMenu } from "./SheetMenu";
import { isMobile } from "react-device-detect";

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
    <nav className="z-50">
      <div className=" flex flex-row items-center justify-evenly pb-[3svh] pt-[4svh] filter backdrop-blur-md lg:justify-center">
        <Logo className="w-7 lg:w-10" />
        <div className="menu menu-horizontal hidden w-[70%] list-none justify-evenly lg:inline-flex">
          {navItems.map((item) => (
            <li key={item}>
              <a className="hover-underline-animation text-xl font-extrabold tracking-wider text-[#15375A] after:bg-[#15375A]">
                {item.text}
              </a>
            </li>
          ))}
        </div>

        {/* <MenuButton className="block w-7 lg:hidden lg:w-10" /> */}
        <div>
          {isMobile ? (
            <SheetMenu navItems={navItems} />
          ) : (
            <SheetMenu navItems={navItems} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
