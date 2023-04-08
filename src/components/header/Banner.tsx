import { GlobalContext } from "@/pages/_app";
import React, { useEffect, useState } from "react";
import styles from "../../styles/header/Banner.module.css";
import Image from "next/image";

import bottomBG from "../../../public/assets/10052.png";

import dynamic from "next/dynamic";

const Banner = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const images = [
    "https://res.cloudinary.com/dr2vztyib/image/upload/v1680031473/top-view-cup-coffee-with-pine-cones-bucket-with-coffee-beans-falling-out-glass-jar-wooden-surface_dhjyyy.jpg",
    "https://res.cloudinary.com/dr2vztyib/image/upload/v1679766175/the_coffee/10005_f4togc.jpg",
    "https://res.cloudinary.com/dr2vztyib/image/upload/v1680031468/top-view-female-barista-holding-cup-coffee_xbj3iy.jpg",
  ];

  useEffect((): any => {
    const intervalId = setInterval(() => {
      setShowImage(false); // Start the fade-out animation
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setShowImage(true); // Start the fade-in animation
      }, 1000);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div id="home" className={styles.banner}>
      {language === "ARABIC" ? (
        <div className={styles.textContainer}>
          <h2>مقهى</h2>
          <p>صباح بدون قهوة كنومٍ</p>
          <div>
            <button>اقرأ المزيد</button>
          </div>
        </div>
      ) : (
        <div className={styles.textContainer}>
          <h2>Coffee Shop</h2>
          <p>A morning without coffee like sleep</p>
          <div>
            <button>Read More</button>
          </div>
        </div>
      )}

      <div className={styles.imageBottom}>
        <Image
          style={{ width: "100%", height: "100%" }}
          width={500}
          height={500}
          src={bottomBG}
          alt="bg-img"
        ></Image>
      </div>

      <div>
        {images.map((imageUrl, index) => (
          <Image
            key={imageUrl}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
            }}
            width={500}
            height={500}
            src={imageUrl}
            alt={`Image ${index}`}
            className={`${styles.carouselImage} ${
              index === currentIndex && showImage ? styles.fadeIn : ""
            }`}
          />
        ))}
      </div>


    </div>
  );
};

export default dynamic((): any => Promise.resolve(Banner), { ssr: false });
