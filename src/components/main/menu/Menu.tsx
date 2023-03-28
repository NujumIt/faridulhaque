import { GlobalContext } from "@/pages/_app";
import { menuItemsAr, menuItemsEn } from "@/variables/menuItems";
import React from "react";
import styles from "../../../styles/main/Menu.module.css";
import MenuCard from "./MenuCard";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const Menu = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  const [items, setItems] = React.useState<any>([]);

  React.useEffect(() => {
    const updatedItems = language === "ARABIC" ? menuItemsAr : menuItemsEn;
    setItems(updatedItems);
    AOS.init();
  }, [language]);

  return (
    <div id="menu" className={styles.menu}>
      <p>{language === "ARABIC" ? "استكشف ما لدينا" : "Explore our"}</p>
      <h2>{language === "ARABIC" ? "القائمة" : "Menu"}</h2>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        {items.map((item: any, i: number) => (
          <MenuCard key={i} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default dynamic((): any => Promise.resolve(Menu), { ssr: false });
