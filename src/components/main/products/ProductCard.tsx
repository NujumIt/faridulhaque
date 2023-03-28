import Image from "next/image";
import React from "react";
import styles from "../../../styles/main/Products.module.css";
import productPic from "../../../../public/assets/10030.jpg";

const ProductCard = ({ item }: any) => {
  return (
    <div className={styles.productCard}>
      <Image
        className={styles.productCartImage}
        width={200}
        height={200}
        src={productPic}
        alt=""
      />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
