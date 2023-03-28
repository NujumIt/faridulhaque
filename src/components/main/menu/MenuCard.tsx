import Image from 'next/image';
import React from 'react';
import styles from "../../../styles/main/Menu.module.css";

const MenuCard = ({item}:any) => {
    return (
        <div className={styles.menuCard}>
            <Image className={styles.menuImage} width={200} height={200} src={item.img} alt=""/>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
        </div>
    );
};

export default MenuCard;