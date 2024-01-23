"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import { links } from "@/statics/statics";
import { useStore } from "@/store/store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggler = useStore((state) => state.setIsClicked);

  useEffect(() => {
    window.onscroll = () => {
      const scrollValue = window.scrollY;

      if (scrollValue >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const mobileMenuVariants = {
    initial: { x: "-100%" },
    animate: {
      x: 0,
      transition: { duration: 1, type: "spring", stiffness: 11, damping: 6 },
    },
    exit: {
      x: "-100vw",
      transition: { duration: 2, type: "spring", stiffness: 4, damping: 2 },
    },
  };
  const liVarinats = {
    initial: { x: "-100vw" },
    animate: { x: 0, transition: { delay: 1, duration: 1 } },
    exit: { x: "-100vw", transition: { duration: 1 } },
  };
  const logoVariants = {
    initail: { x: "-100vw" },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
      },
    },
    exit: { x: "-100vw", transition: { duration: 1 } },
  };
  const navOpen = (e: React.MouseEvent) => {
    // e.preventDefault();
    setIsOpen(!isOpen);
  };

  const mobileNav = () => {
    setIsOpen(!isOpen);
    toggler();
  };

  return (
    <main>
      <nav
        className={`fixed z-10 w-full h-24 flex items-center justify-center  ${
          scrolled
            ? "bg-[#14213d] duration-700 ease-out"
            : "bg-transparent duration-700 ease-out"
        }`}
      >
        <div className="w-[80%] flex items-center justify-between">
          <Link href={"/#hero"}>
            {" "}
            <div>
              <Image
                src={"/logo.png"}
                alt={"logo"}
                width={80}
                height={80}
              ></Image>
            </div>
          </Link>

          <div className="hidden md:flex gap-16 text-xl">
            {links.map((items, index) => (
              <Link key={index} href={items.href} className="link">
                {items.name}
              </Link>
            ))}
          </div>
          {/* hamburger ..........*/}
          <div className="md:hidden" onClick={navOpen}>
            <Hamburger />
          </div>
        </div>
      </nav>
      {/* mobile menu ................. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-10 top-0 left-0 min-h-full overflow-hidden w-[70%] bg-[#232D3F] flex flex-col items-center justify-center md:hidden gap-28"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              variants={logoVariants}
              initial="initail"
              animate="animate"
              exit="exit"
            >
              <Link onClick={mobileNav} href={"/#hero"}>
                {" "}
                <Image
                  src={"/logo.png"}
                  alt={"logo"}
                  width={80}
                  height={80}
                ></Image>
              </Link>
            </motion.div>

            <motion.div
              variants={liVarinats}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-5 mb-28"
            >
              {links.map((items, index) => (
                <Link
                  key={index}
                  href={items.href}
                  className="link"
                  onClick={mobileNav}
                >
                  {items.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
