import Image from "next/image";
import React from "react";
import styles from "../../../styles/main/Items.module.css";
import brownCoffee from "../../../../public/assets/10053.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemCard = ({ item, index }: any) => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className={index !== 1 ? styles.itemCard : styles.itemCardMid}
      // data-aos={index === 0  ? "fade-right" : index === 2 ? "fade-left" : ""}
      data-aos={index !== 1 ? "zoom-in" : ""}
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div>
        {/* this is the svg image for the middle part of the items. there are 3 items will be visible in the items section. the middle one will be different. the bg is browning and there will be a svg image below it. */}
        {index === 1 && (
          <Image
            className={styles.brownCoffee}
            src={brownCoffee}
            height={250}
            width={250}
            alt="coffee"
          ></Image>
        )}

        {/* common content for all three cards */}
        <Image className={styles.itemImage} src={item?.img} alt={"food"+ index} width={250} height={250}></Image>
        <h3 className={index === 1 ? "text-white" : ''}>{item.title}</h3>
        <p className={index === 1 ? "text-white" : ''}>{item.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
