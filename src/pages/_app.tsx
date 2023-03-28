import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import useToggleLanguage from "@/hooks/useToggleLanguage";
export const GlobalContext = React.createContext<any>({} as any);

export default function App({ Component, pageProps }: AppProps) {
  const toggleLanguageData = useToggleLanguage();

  const value = {
    toggleLanguageData
  }

  return (
    <GlobalContext.Provider value={value}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
