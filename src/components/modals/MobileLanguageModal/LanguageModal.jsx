import { useState } from "react";
import "./LanguageModal.css";
import { useGetLanguage } from "../../../hooks/language.hook";
import { useLanguage } from "../../../context/LanguageProvider";

export default function LanguageModal({ onClose }) {
  const { setLanguage, language } = useLanguage();
  const { data } = useGetLanguage();
  const [query, setQuery] = useState("");

  const languages = data?.CRICKET && Object.keys(data?.CRICKET);

  const filtered =
    languages?.length > 0
      ? languages.filter((l) => l.toLowerCase().includes(query.toLowerCase()))
      : [];

  const handleSetLanguage = (lan) => {
    localStorage.setItem("language", lan);
    setLanguage(lan);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="modal-header">Select Language</div>
        <div className="search-wrap">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="lang-list">
          {filtered.length ? (
            filtered.map((lang) => (
              <div
                onClick={() => handleSetLanguage(lang)}
                data-v-2e7f2d5e=""
                key={lang}
                className={`lang-item${lang === language ? " active" : ""}`}
              >
                {lang?.charAt(0).toUpperCase() + lang?.slice(1)}
              </div>
            ))
          ) : (
            <div className="no-results">No languages found</div>
          )}
        </div>
        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
