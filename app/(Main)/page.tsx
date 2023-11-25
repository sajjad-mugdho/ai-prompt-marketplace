import { Header } from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header activeItem={0}></Header>
      <Hero />
    </div>
  );
};

export default Page;
