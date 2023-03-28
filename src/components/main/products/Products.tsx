import { GlobalContext } from "@/pages/_app";
import { productItemsAr, productItemsEn } from "@/variables/productItems";
import React from "react";
import styles from "../../../styles/main/Products.module.css";
import ProductCard from "./ProductCard";

const Products = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  const [hydrated, setHydrated] = React.useState(false);

  const items = language === "ARABIC" ? productItemsAr : productItemsEn;



  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div id="products" className={styles.products}>
      <p>{language === "ARABIC" ? "اختر منتج القهوة" : "Choose your coffee"}</p>
      <h2>{language === "ARABIC" ? " الخاص بك" : "Product"}</h2>

      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        {items.map((item: any, i: number) => (
          <ProductCard key={i} item={item}></ProductCard>
        ))}
      </div>

    </div>
  );
};
export default Products;
