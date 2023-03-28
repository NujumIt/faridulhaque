import { GlobalContext } from "@/pages/_app";
import dynamic from "next/dynamic";
import React from "react";
import styles from "../../styles/footer/FooterBottom.module.css";

const FooterBottom = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  return (
    <div className={styles.footerBottom}>
      <div>
        {language === "ARABIC" ? (
          <>
            <p>
              © حقوق النشر 2020 <span>مقهى القهوة</span>. جميع الحقوق محفوظة.
            </p>
            <p>
              التصميم بواسطة <span>NujumIt</span>.
            </p>
          </>
        ) : (
          <>
            <p>
              © Copyright 2020 <span>Coffee Shop</span>. All Rights Reserved.
            </p>
            <p>
              Design by <span>NujumIt</span>.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default dynamic((): any => Promise.resolve(FooterBottom), {
  ssr: false,
});
