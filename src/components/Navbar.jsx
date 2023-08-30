import React from "react";
import styles from "./styles";
import { nandys } from "../assets";

const Navbar = () => {
  return (
    <>
      {/* Desktop */}
      <nav className={`${styles.flexBetween} mx-auto max-w-[1440px] px-4`}>
        <div>
          <img className="h-30 w-96" src={nandys} alt="" />
        </div>
        <ul className="bg-sl md: hidden flex-row justify-end md:flex md:space-x-10">
          <li className="text-main cursor-pointer">
            <a href="">About</a>
          </li>
          <li className="text-main cursor-pointer">
            <a href="">Work</a>
          </li>
        </ul>
      </nav>
      {/* Mobile */}
      <nav></nav>
    </>
  );
};

export default Navbar;
