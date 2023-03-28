import { GlobalContext } from "@/pages/_app";
import { galleryItems } from "@/variables/galleryItems";
import { navItemsAr, navItemsEn } from "@/variables/navItems";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/footer/FooterMid.module.css";

const FooterMid = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  const items = language === "ENGLISH" ? navItemsEn : navItemsAr;

  return (
    <div className={styles.footerMid}>
      <div>
        {/* about coffee shop */}
        <div className={styles.aboutShop}>
          <h2>{language === "ARABIC" ? "حول المقهى" : "About Coffee Shop"}</h2>

          <div className={styles.divider}></div>
          {language === "ARABIC" ? (
            <p>
              لوريم إيبسوم، دولور سيت أميت، كونسيكتيتور أديبايسينغ إليت. أومنيس
              أليكويد لابوريوسام فيريتاتيس بروفيدنت أب إت؟
            </p>
          ) : (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              aliquid laboriosam veritatis provident ab et?
            </p>
          )}
        </div>
        {/* quick links */}
        <div className={styles.quickLinks}>
          <h2>{language === "ARABIC" ? "روابط سريعة" : "Quick Links"}</h2>

          <div className={styles.divider}></div>
          {items.map((item: any, i: number) => (
            <p key={i}>
              <span> </span>
              <Link href={item.link}>{item.title}</Link>
            </p>
          ))}
        </div>
        {/* our gallery */}
        <div className={styles.gallery}>
          <h2>{language === "ARABIC" ? "معرضنا" : "Our Gallery"}</h2>
          <div className={styles.divider}></div>
          <div>
            {galleryItems.map((img: string) => (
              <Link key={img} href={img}>
                <Image width={83} height={83} alt="cup-with-coffee" src={img} />
              </Link>
            ))}
          </div>
        </div>

        {/* contact info */}

        <div className={styles.contact}>
          <h2>{language === "ARABIC" ? "معلومات التواصل" : "Contact Info"}</h2>

          <div className={styles.divider}></div>
          {language === "ARABIC" ? (
            <>
              <p>شارع جديد، الدوحة</p>
              {language === "ARABIC" ? (
                <p>
                  لوريم إيبسوم، دولور سيت أميت، كونسيكتيتور أديبايسينغ إليت.
                  أومنيس أليكويد لابوريوسام فيريتاتيس بروفيدنت أب إت؟
                </p>
              ) : (
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis aliquid laboriosam veritatis provident ab et?
                </p>
              )}
              <br />
              <br />
              <p>البريد الإلكتروني: support@nujum.dev</p>

              <br />
              <p>الهاتف : 098765432112</p>
            </>
          ) : (
            <>
              <p>New street, Doha</p>
              {language === "ARABIC" ? (
                <p>
                  لوريم إيبسوم، دولور سيت أميت، كونسيكتيتور أديبايسينغ إليت.
                  أومنيس أليكويد لابوريوسام فيريتاتيس بروفيدنت أب إت؟
                </p>
              ) : (
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis aliquid laboriosam veritatis provident ab et?
                </p>
              )}

              <br />
              <br />
              <p>Email: support@nujum.dev</p>

              <br />
              <p>Phone: +098765432112</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic((): any => Promise.resolve(FooterMid), { ssr: false });
