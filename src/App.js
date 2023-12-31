import React from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div style={{ padding: "50px" }}>
      <select
        style={{ marginBottom: "20px" }}
        onChange={(e) => handleChangeLng(e.target.value)}
      >
        <option value="en">English</option>
        <option value="jp">Jp</option>
        <option value="hi">Hindi</option>
      </select>

      <nav>
        <li>
          <a href="/about">About</a>
        </li>
      </nav>

      <h1>{t("home")}</h1>
    </div>
  );
}
