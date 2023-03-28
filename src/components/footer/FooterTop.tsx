import Image from "next/image";
import React from "react";
import styles from "../../styles/footer/FooterTop.module.css";
import lightLogo from "../../../public/assets/10033.png";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai";

const FooterTop = () => {
  return (
    <div className={styles.footerTop}>
      <div>
        <Image
          className={styles.footerLogo}
          src={lightLogo}
          alt="logo"
          width={100}
          height={200}
        ></Image>
        <div className={styles.socialIcons}>
          <span>
            <FaFacebookF className={styles.socialIcon}></FaFacebookF>
          </span>
          <span>
            <AiOutlineTwitter className={styles.socialIcon}></AiOutlineTwitter>
          </span>
          <span>
            <FaLinkedinIn className={styles.socialIcon}></FaLinkedinIn>
          </span>
          <span>
            <AiOutlineGooglePlus className={styles.socialIcon}></AiOutlineGooglePlus>
          </span>
          <span>
            <FaPinterestP className={styles.socialIcon}></FaPinterestP>
          </span>
          {/* <span></span> */}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
