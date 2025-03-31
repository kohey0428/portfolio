import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ">
        <Image src={assets.header_bg_color} alt="" className="full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
            width={112}
            height={40}
          />
        </a>

        <ul
          ref={sideMenuRef}
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>

        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow_icon"
              className="w-3"
              width={12}
              height={12}
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="menu_icon"
              className="w-6"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close_icon"
              className="w-6 cursor-pointer"
              width={24}
              height={24}
            />
          </div>

          <li onClick={closeMenu}>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about" className="font-Ovo">
              About
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
