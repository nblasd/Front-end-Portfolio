import React from "react";
import Contactcard from "./Contactcard";

export default function Contact() {
  return (
    <main
      id="Contact"
      className="w-screen min-h-screen flex flex-col gap-20 items-center justify-center"
    >
      <h1 className="text-6xl text-[#06806D] font-bold mt-20">Contact</h1>
      <Contactcard />
    </main>
  );
}
