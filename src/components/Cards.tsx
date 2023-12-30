import React from "react";
import Image from "next/image";
import Link from "next/link";

interface propsType {
  projectName: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  link: string;
}

export default function Cards(props: propsType) {
  return (
    <div className="card">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      ></Image>

      <div className="card__content">
        <p className="card__title">{props.projectName}</p>
        <p className="card__description">{props.description}</p>

        <Link href={props.link} target="_blank">
          {" "}
          <button className="crush">
            <p>Live Demo</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
