import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div style={{ padding: "50px", marginBottom: "20px" }}>
      <select onChange={(e) => handleChangeLng(e.target.value)}>
        <option value="en">English</option>
        <option value="jp">Jp</option>
        <option value="hi">Hindi</option>
      </select>

      <nav>
        <li>
          <a href="/">Home</a>
        </li>
      </nav>

      <h1>{t("about")}</h1>
    </div>
  );
}
