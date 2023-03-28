import Image from "next/image";
import React from "react";
import styles from "../../../styles/main/ContactUs.module.css";
import contactUsImage from "../../../../public/assets/10036.jpg";
import { GlobalContext } from "@/pages/_app";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const ContactUs = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  React.useEffect(() => {
    AOS.init();
  }, []);
  const handleSubmit = (e: any) => {};

  return (
    <div
    id="contact"
    className={styles.contactUs}>
      <Image
        className={styles.contactUsImage}
        alt="bg-image"
        width={500}
        height={500}
        src={contactUsImage}
      ></Image>
      <form
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        onSubmit={handleSubmit}
      >
        <h2>{language === "ARABIC" ? "اتصل بنا" : "Contact Us"}</h2>
        <div>
          <input
            placeholder={language === "ARABIC" ? "اسم" : "NAME"}
            type="text"
            name="fullName"
          />
        </div>
        <div>
          <input
            placeholder={language === "ARABIC" ? "البريد الإلكتروني" : "EMAIL"}
            type="text"
            name="email"
          />
        </div>
        <div>
          <textarea
            placeholder={language === "ARABIC" ? " رسالتك" : "YOUR MESSAGE"}
            name="message"
          />
        </div>
        <button>{language !== "ARABIC" ? "SUBMIT" : "إرسال"}</button>
      </form>
      <Image
        className={styles.contactUsImage}
        alt="bg-image"
        width={500}
        height={500}
        src={contactUsImage}
      ></Image>
    </div>
  );
};

export default dynamic((): any => Promise.resolve(ContactUs), { ssr: false });
