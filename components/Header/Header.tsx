"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

type Props = {
  activeItem: number;
};

export const Header = ({ activeItem }: Props) => {
  const [active, setactive] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }
  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
        active && "fixed top-0 left-0 bg-[#00000] z-[9999]"
      }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              Prompt <span className="text-[#64ff4c]">Market</span>
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem}></Navigation>
        </div>
      </div>
    </div>
  );
};
