import React from "react";

const useToggleLanguage = () => {
  const [language, setLanguage] = React.useState(() => {
    const storedLanguage =
      typeof window !== "undefined"
        ? window.localStorage.getItem("language")
        : null;
    return storedLanguage !== null ? JSON.parse(storedLanguage) : "ENGLISH";
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", JSON.stringify(language));
    }

    console.log(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "ENGLISH" ? "ARABIC" : "ENGLISH");
  };

  return {
    language,
    toggleLanguage,
  };
};

export default useToggleLanguage;
