import Banner from "@/components/header/Banner";
import Navbar from "@/components/header/Navbar";
import About from "@/components/main/about/About";
import BaseBanner from "@/components/main/base/BaseBanner";
import BaseDetails from "@/components/main/base/BaseDetails";
import Items from "@/components/main/items/Items";
import Menu from "@/components/main/menu/Menu";
import Products from "@/components/main/products/Products";
import Testimonials from "@/components/main/testimonials/Testimonials";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./_app";
import bgFooter from "../../public/assets/10038.jpg";
import FooterBottom from "@/components/footer/FooterBottom";
import FooterTop from "@/components/footer/FooterTop";
import FooterMid from "@/components/footer/FooterMid";
import ContactUs from "@/components/main/contact/ContactUs";

export default function Home() {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 0.75 * window.innerHeight) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 0.75 * window.innerHeight) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);


  return (
    <>
      <Head>
        <title>The Coffee</title>
        <meta name="description" content="your description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Navbar></Navbar>
          <Banner></Banner>
        </header>
        <section>
          <Items></Items>
          <About></About>
          <Menu></Menu>
          <BaseBanner></BaseBanner>
          <BaseDetails></BaseDetails>
          <Products></Products>
          <Testimonials></Testimonials>
          <ContactUs></ContactUs>
        </section>
        {/* footer tag's and the image inside it have styles in the global css file  */}
        <footer className="footer">
          <FooterTop></FooterTop>
          <FooterMid></FooterMid>
          <FooterBottom></FooterBottom>
        </footer>

        <span
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={`puller ${!showScroll ? "onTop" : "onScroll"}`}
         
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="chevron-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </main>
    </>
  );
}
