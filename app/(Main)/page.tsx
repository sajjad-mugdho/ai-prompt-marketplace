"use client";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Layouts/Footer";
import PromptCard from "@/components/Prompts/PromptCard";
import About from "@/components/Route/About";
import Future from "@/components/Route/Future";
import Hero from "@/components/Route/Hero";
import Partners from "@/components/Route/Partners";
import BestSeller from "@/components/Shop/BestSeller";
import SellersBanner from "@/components/Shop/SellerBanner";
import { styles } from "@/utils/style";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

import React from "react";

import { useState, useEffect } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="banner">
        <Header activeItem={0}></Header>
        <Hero />
      </div>
      <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />

        <div>
          <h1 className={`${styles.heading} p-2 font-Montserrat`}>
            Latest Prompts
          </h1>
          <div className="flex flex-wrap">
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
          <br />
          <BestSeller />
          <Future />
          <Partners />
          <SellersBanner />
          <br />
          <br />
          <Divider className="bg-[#ffffff23]" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
