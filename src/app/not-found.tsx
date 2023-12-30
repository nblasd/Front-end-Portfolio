"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center  custom-bg">
      <motion.h2
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        className="text-[#6A63FE] text-[300px] font-bold"
      >
        404
      </motion.h2>
      <p className="text-white mb-8 text-xl">
        The page you&apos;re looking for seems to have vanished into thin air.
      </p>
      <Link
        className="text-2xl bg-transparent mt-8 hover:bg-[#6A63FE] text-[#6A63FE] hover:text-white font-bold py-2 px-4 border border-[#6A63FE] rounded-full"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
