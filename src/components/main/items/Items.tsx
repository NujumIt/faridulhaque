import React from "react";
import styles from "../../../styles/main/Items.module.css";

import ItemCard from "./ItemCard";
import { GlobalContext } from "@/pages/_app";
import { itemCardItemsAr, itemCardItemsEn } from "@/variables/itemsCardItems";

const Items = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;
  const [hydrated, setHydrated] = React.useState(false);


 

  const cardItems =
    language === "ENGLISH"
      ? itemCardItemsEn
      : itemCardItemsAr.slice().reverse();

  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div

      className={styles.items}
      // data-aos="zoom-in"
    >
      {cardItems.map((item: any, i: number) => (
        <ItemCard key={i} item={item} index={i}></ItemCard>
      ))}
    </div>
  );
};

export default Items;
