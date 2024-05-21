import React from "react";
import Logo from "../svgs/Logo";
import { SheetMenu } from "./SheetMenu";
import { isMobile } from "react-device-detect";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      href: "/#infinit-cards",
      text: "COLLECTION",
    },
    {
      href: "/#products",
      text: "PRODUCTS",
    },
    {
      href: "#",
      text: "DESIGN",
    },
    {
      href: "/return-policy",
      text: "POLICY",
    },
    {
      href: "/#contact",
      text: "CONTACT",
    },
    {
      href: "/connections",
      text: "CONNECTIONS",
    },
  ];

  return (
    <nav className="fixed z-40 w-full border-b-[1px] border-gray-100 border-opacity-50">
      <div className=" flex flex-row items-center justify-evenly bg-white bg-opacity-70 pb-[2.5svh] pt-[4svh] filter backdrop-blur-md lg:justify-center lg:pb-[2svh] lg:pt-[2svh]">
        <Link href="/">
          <Logo className="w-7 lg:w-10" color="#15375A" />
        </Link>
        <div className="menu menu-horizontal hidden w-[70%] list-none justify-evenly lg:inline-flex">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={item.href}
                className="hover-underline-animation text-xl font-extrabold tracking-wider text-[#15375A] after:bg-[#15375A]"
              >
                {item.text}
              </Link>
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
