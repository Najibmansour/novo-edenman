import * as React from "react";
const MenuButton = (props) => (
  <svg
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 2H22" stroke="#15375A" strokeWidth={3} strokeLinecap="round" />
    <path d="M2 9H22" stroke="#15375A" strokeWidth={3} strokeLinecap="round" />
    <path d="M2 16H22" stroke="#15375A" strokeWidth={3} strokeLinecap="round" />
  </svg>
);
export default MenuButton;
