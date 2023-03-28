import Image from "next/image";
import React from "react";
import styles from "../../../styles/main/BaseDetails.module.css";
import coffee_cup from "../../../../public/assets/10023.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobalContext } from "@/pages/_app";
import BaseItemCard from "./BaseItemCard";
import { baseItemsAr, baseItemsEn } from "@/variables/baseItems";
import dynamic from "next/dynamic";

const BaseDetails = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  const items = language === "ARABIC" ? baseItemsAr : baseItemsEn;

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.baseDetails}>
      <p>{language === "ARABIC" ? "القهوة تبني" : "Coffee Build"}</p>
      <h2>{language === "ARABIC" ? "قاعدتك" : "Your Base"}</h2>
      <div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {items.slice(0, 3).map((item: any, i: number) => (
            <BaseItemCard key={i} item={item}></BaseItemCard>
          ))}
        </div>
        {/* this image is positionally absolute to the baseDetails section for large devices */}
        <Image
          className={styles.baseDetailsImage}
          src={coffee_cup}
          width={500}
          height={500}
          alt="coffee_mug"
        ></Image>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {items.slice(3, 6).map((item: any, i: number) => (
            <BaseItemCard key={i} item={item}></BaseItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic((): any => Promise.resolve(BaseDetails), { ssr: false });
