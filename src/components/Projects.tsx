import React from "react";
import Cards from "./Cards";
import { cardsInfo as card } from "@/statics/statics";

export default function Projects() {
  return (
    <main
      id="Projects"
      className="w-screen min-h-screen flex flex-col gap-32 items-center justify-center"
    >
      <h1 className="text-6xl text-[#06806D] font-bold mt-10">Projects</h1>
      <div className="w-full md:w-[90%] grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20 ">
        {card.map((item, index) => (
          <Cards
            key={index}
            projectName={item.projectName}
            description={item.description}
            link={item.link}
            alt={item.alt}
            src={item.src}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </main>
  );
}
