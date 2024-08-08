"use client";
import { useEffect, useState } from "react";
import NavbarDesktop from "./desktop";
import NavbarMobile from "./mobile";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 py-4 bg:transparent transition-all duration-300 z-50",
        scrollY > 0 && "bg-white shadow-md"
      )}
    >
      <NavbarDesktop scrollY={scrollY} />
      <NavbarMobile scrollY={scrollY} />
    </nav>
  );
};

export default Navbar;
