"use client";

import Footer from "@/components/Layouts/Footer/Footer";
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
import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
import Loader from "@/utils/Loader";
import Header from "@/components/Layouts/Header/Header";

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/me")
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <div className="banner">
            <Header user={user} activeItem={0}></Header>
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
      )}
    </>
  );
};

export default Page;
