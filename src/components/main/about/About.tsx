import React from "react";
import styles from "../../../styles/main/About.module.css";
import aboutImg from "../../../../public/assets/10011.jpg";
import Image from "next/image";
import { GlobalContext } from "@/pages/_app";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const About = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className={styles.about}>
      <div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className={`${styles.textContainer} ${
            language === "ARABIC" ? styles.arabicView : ""
          }`}
        >
          {language === "ARABIC" ? (
            <>
              <p>بضعة كلمات</p>
              <h1>عن المقهى</h1>
              <p>
                {" "}
                فيريتاتيس. أليكويد نوستروم إت فوغا سيت أكوساموس نيكوي
                ديجنيسيموس، إيتاكوي كويسكوام، كونسكتيتور موليستياس كوود! أنيمي
                أوت أليكوام إنفنتوري كونسيكواتور. أسوميندا كويس فيتاي أليكوام
                ديلينيتي كورروبتي ريسينديس!
              </p>
            </>
          ) : (
            <>
              <p>Few words</p>
              <h1>About Cafe</h1>
              <p>
                rem ullam assumenda excepturi placeat saepe quis alias, atque
                autem nobis doloribus harum veritatis. Aliquid nostrum et fuga
                sit accusamus neque dignissimos, itaque quisquam, consectetur
                molestias quod! Animi ut aliquam inventore consequatur.
                Assumenda quis vitae ullam deleniti corrupti reiciendis!
              </p>
            </>
          )}
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={aboutImg}
            alt="coffee_mug"
            className={styles.aboutImage}
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default dynamic((): any => Promise.resolve(About), { ssr: false });

