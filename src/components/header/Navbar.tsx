import { navItemsAr, navItemsEn } from "@/variables/navItems";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/header/Navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import iconImage from "../../../public/assets/10002.png";
import whiteCoffeeSvg from "../../../public/assets/10054.svg";
import dynamic from "next/dynamic";
import { GlobalContext } from "@/pages/_app";

const Navbar = () => {
  const { toggleLanguageData } = React.useContext(GlobalContext);
  const { language, toggleLanguage } = toggleLanguageData;

  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  const items = language === "ENGLISH" ? navItemsEn : navItemsAr;

  return (
    <div className={styles.navbar}>
      {/* navbar for larger devices started*/}
      <nav>
        <ul>
          {/* svg image of coffee going down */}
          <svg
            className={styles.whiteCoffee}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 399.000000 130.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,130.000000) scale(0.100000,-0.100000)"
              fill="#FFFFFF"
              stroke="none"
            >
              <path
                d="M0 1231 l0 -69 37 -7 c21 -4 42 -10 48 -13 9 -6 14 -8 33 -11 4 0 22
-14 39 -30 l32 -29 53 27 c96 47 208 27 272 -50 l27 -32 33 32 c18 18 40 34
47 35 8 2 23 7 34 12 37 16 137 9 182 -14 51 -27 100 -85 114 -137 15 -52 5
-262 -14 -335 -31 -112 -31 -137 -3 -165 31 -31 49 -32 77 -2 20 21 21 27 13
122 -15 169 -10 256 17 310 39 78 95 93 186 50 75 -34 150 -108 184 -180 28
-57 29 -67 29 -201 0 -86 -8 -196 -20 -284 -23 -165 -25 -231 -8 -248 17 -17
73 -15 88 4 16 18 17 117 6 444 -10 266 -1 326 54 381 33 34 59 36 117 10 91
-42 118 -134 87 -298 -10 -54 -18 -138 -18 -186 -1 -77 2 -91 18 -103 24 -17
26 -17 51 2 19 14 20 27 20 272 0 247 1 259 23 299 28 54 49 65 94 52 40 -10
102 -70 171 -164 56 -76 93 -110 139 -129 49 -21 71 -20 119 4 40 21 78 71
129 174 55 107 107 132 160 76 47 -50 65 -119 63 -242 -2 -84 1 -109 13 -119
12 -10 18 -9 32 5 18 18 19 39 11 216 -3 84 -1 100 19 137 27 52 53 67 104 60
49 -7 79 -38 109 -114 19 -50 22 -77 23 -198 0 -77 -3 -165 -8 -196 -8 -51 -6
-59 13 -78 25 -25 49 -27 77 -7 18 14 19 26 16 196 -2 138 1 195 12 241 48
185 212 246 342 127 57 -52 79 -121 70 -212 -6 -53 -4 -64 14 -84 25 -27 32
-27 55 -2 19 20 19 26 -1 191 -10 86 2 139 46 207 59 91 178 162 270 162 l40
0 0 80 0 80 -1995 0 -1995 0 0 -69z"
              ></path>
            </g>
          </svg>
          <li>
            <Link href="/">
              <Image className={styles.iconImage} src={iconImage} alt="icon" />
            </Link>
          </li>
        </ul>
        <ul>
          {items.map((item: any) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            {/* <BsFillCartFill
              className={`${styles.cartIcon} pointer`}
            ></BsFillCartFill> */}
          </li>
          <li>
            <button onClick={toggleLanguage} className="pointer">
              {language !== "ENGLISH"
                ? "Switch to English"
                : "التحوّل إلى العربية"}
            </button>
          </li>
        </ul>
      </nav>
      {/* navbar for larger devices ended*/}
      {/* -------------------------------- */}
      {/* navbar for smaller devices started*/}
      <nav>
        <Image className={styles.iconImage} src={iconImage} alt="icon" />
        <span>
          {/* <BsFillCartFill
            className={`${styles.cartIconDrawer}`}
          ></BsFillCartFill> */}
          {openDrawer ? (
            <AiOutlineClose
              onClick={() => setOpenDrawer(!openDrawer)}
              className={styles.iconCloser}
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenu
              onClick={() => setOpenDrawer(!openDrawer)}
              className={styles.iconMenu}
            ></AiOutlineMenu>
          )}
        </span>

        <ul
          className={`${styles.navbarDrawer} ${
            openDrawer ? styles.openDrawer : styles.closeDrawer
          }`}
        >
          <li>
            <button onClick={toggleLanguage} className="pointer">
              {language !== "ENGLISH"
                ? "Switch to English"
                : "التحوّل إلى العربية"}
            </button>
          </li>
          {language === "ENGLISH"
            ? items.map((item: any) => (
                <li key={item.title}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))
            : items
                .slice()
                .reverse()
                .map((item: any) => (
                  <li key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
        </ul>
      </nav>
      {/* navbar for smaller devices ended*/}
    </div>
  );
};

export default dynamic((): any => Promise.resolve(Navbar), { ssr: false });
