import React from "react";
import styles from "../../../styles/main/BaseBanner.module.css";
import brownCoffee from "../../../../public/assets/logobrown.svg";
import greenPartImg from "../../../../public/assets/10018.png";
import brownPartImg from "../../../../public/assets/10019.png";
import yellowPartImg from "../../../../public/assets/10020.png";
import Image from "next/image";
import { GlobalContext } from "@/pages/_app";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

const BaseBanner = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  React.useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles.baseBanner}>
      {/* green part */}
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <Image src={greenPartImg} height={250} width={250} alt="item"></Image>
        <h1>{language !== "ARABIC" ? "Special" : "نكهات "}</h1>
        <p>{language !== "ARABIC" ? "Flavors" : "خاصة "}</p>
      </div>

      {/* brown part */}

      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className={styles.brownPart}
      >
        <h5>{language !== "ARABIC" ? "Strong" : "قهوة"}</h5>
        <Image src={brownPartImg} height={250} width={250} alt="item"></Image>
        <h1>{language !== "ARABIC" ? "Coffee" : "قويّ"}</h1>
        <p>{language !== "ARABIC" ? "Order Now!" : "اطلب الآن!"}</p>

        <div className={styles.brownPartTop}></div>
        <div className={styles.brownPartLeft}></div>
        <div className={styles.brownPartRight}></div>
        <Image
          className={styles.brownCoffee}
          src={brownCoffee}
          height={250}
          width={250}
          alt="coffee"
        ></Image>
      </div>

      {/* yellow part */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Image src={yellowPartImg} height={250} width={250} alt="item"></Image>
        <h1>{language !== "ARABIC" ? "Cookie" : "كوكيز  "}</h1>
        <p>{language !== "ARABIC" ? "& More" : "وأكثر "}</p>
      </div>
    </div>
  );
};

export default dynamic((): any => Promise.resolve(BaseBanner), { ssr: false });
