import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Hamburger() {
  const [click, setClick] = useState(true);
  const clickToggle = () => {
    setClick(!click);
    // console.log(click);
  };
  return (
    <main
      onClick={clickToggle}
      className="h-12 w-8 flex flex-col gap-1 items-center justify-center overflow-hidden"
    >
      <AnimatePresence>
        {click && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="bg-[#018070] w-full h-1 rounded-full"
          ></motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#018070] w-full h-1 rounded-full"></div>
      <AnimatePresence>
        {click && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}
            className="bg-[#018070] w-full h-1 rounded-full"
          ></motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
