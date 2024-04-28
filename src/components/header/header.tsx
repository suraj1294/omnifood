"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

function NavItem({
  children,
  href,
}: Readonly<{ children: React.ReactNode; href: string }>) {
  return (
    <li>
      <a
        className="block text-[3rem] lg:text-[1.8rem] text-[#333] font-medium"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

function NavItems() {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-16">
      <NavItem href="#how">How it works</NavItem>
      <NavItem href="#meals">Meals</NavItem>
      <NavItem href="#testimonials">Testimonials</NavItem>
      <NavItem href="#pricing">Pricing</NavItem>
      <li>
        <a
          className="rounded-2xl text-[3rem] lg:text-[1.8rem] text-white bg-[#e67e22] px-8 py-4 font-medium"
          href="#cta"
        >
          Try for free
        </a>
      </li>
    </ul>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const [showNav, setShowNav] = useState(false);

  const mobileButtonClickHandler = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  return (
    <header
      className="flex justify-between items-center bg-[#fdf2e9] relative h-[9.6rem] px-[4.8rem]"
      ref={headerRef}
    >
      <a href="#" className="w-[15rem] h-[2.2rem] relative">
        <Image layout="fill" alt="Omnifood logo" src="/img/omnifood-logo.png" />
      </a>

      <nav className="hidden lg:block">
        <NavItems />
      </nav>

      <nav
        className={`lg:hidden fixed top-0 left-0 h-screen w-screen bg-white/30 backdrop-blur-lg transition-all duration-500 flex items-center justify-center  ${
          showNav
            ? "opacity-1 translate-x-0 visible"
            : "opacity-0 translate-x-[100%] invisible"
        }`}
      >
        <NavItems />
      </nav>

      <button
        onClick={mobileButtonClickHandler}
        className={`lg:hidden block w-14 h-14 z-10`}
      >
        {!showNav ? (
          <FiAlignJustify className="w-full h-full" />
        ) : (
          <VscChromeClose className="w-full h-full" />
        )}
      </button>
    </header>
  );
}
