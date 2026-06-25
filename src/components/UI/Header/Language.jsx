import { useLanguage } from "../../../context/LanguageProvider";
import { useGetLanguage } from "../../../hooks/language.hook";

const Language = () => {
  const { setLanguage, language } = useLanguage();
  const { data } = useGetLanguage();

  const languages = data?.CRICKET;

  const handleSetLanguage = (e) => {
    const selectedLan = e.target.value;
    localStorage.setItem("language", selectedLan);
    setLanguage(selectedLan);
  };

  return (
    <select
      value={language}
      onChange={handleSetLanguage}
      data-v-5247495a=""
      className="form-select language sm-d-none"
    >
      {languages &&
        Object.keys(languages)?.map((item, idx) => {
          return (
            <option key={idx} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          );
        })}
    </select>
  );
};

export default Language;
