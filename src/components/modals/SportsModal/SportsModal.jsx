import { useRef } from "react";
import "./SportModal.css";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

export default function SportModal({ isOpen = true, onClose }) {
  const { getLanguage } = useLanguage();
  const sports = [
    { id: "4", label: getLanguage(LanguageKey.CRICKET), icon: "🏏" },
    { id: "1", label: getLanguage(LanguageKey.FOOTBALL), icon: "⚽" },
    { id: "2", label: getLanguage(LanguageKey.TENNIS), icon: "🎾" },
    { id: "6", label: getLanguage(LanguageKey.POLITICS), icon: "🗳️" },
    { id: "5", label: getLanguage(LanguageKey.KABADDI), icon: "🤼" },
    { id: "7", label: getLanguage(LanguageKey.HORSE), icon: "🐎" },
    { id: "4339", label: getLanguage(LanguageKey.GREYHOUND), icon: "🐕" },
    { id: "7522", label: getLanguage(LanguageKey.BASKETBALL), icon: "🏀" },
    { id: "7511", label: getLanguage(LanguageKey.BASEBALL), icon: "⚾" },
    { id: "20", label: getLanguage(LanguageKey.TABLE_TENNIS), icon: "🏓" },
    { id: "998917", label: getLanguage(LanguageKey.VOLLYBALL), icon: "🏐" },
    { id: "7524", label: getLanguage(LanguageKey.ICE_HOCKY), icon: "🏒" },
    { id: "5", label: getLanguage(LanguageKey.RUGBY), icon: "🎱" },
    {
      id: "26420387",
      label: getLanguage(LanguageKey.MIXED_MARTIAL_ARTS),
      icon: "🥊",
    },
    { id: "3503", label: getLanguage(LanguageKey.DARTS), icon: "🤾" },
    { id: "29", label: getLanguage(LanguageKey.FUTSAL), icon: "🏉" },

    // { id: "matka", label: "Matka", icon: "💰" },
    // { id: "cricket-fight", label: "Cricket Fight", icon: "🏏" },
    // { id: "fifa-cup", label: "FIFA Cup Winner", icon: "🏆" },
    // { id: "winner-cup", label: "Winner Cup", icon: "🥇" },
    // { id: "election-2", label: "Election", icon: "🗳️" },
    // { id: "esports", label: "Esports", icon: "🎮" },
    // { id: "gaelic", label: "Gaelic Games", icon: "🏑" },
    // { id: "handball", label: "Handball", icon: "🤾" },
    // { id: "australian-rules", label: "Australian Rules", icon: "🏉" },
    // { id: "american-football", label: "American Football", icon: "🏈" },
    // { id: "snooker", label: "Snooker", icon: "🎱" },
  ];
  const navigate = useNavigate();
  const ref = useRef(null);
  useCloseModalClickOutside(ref, onClose);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={ref}
        className="modal-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className="modal-header">
          <span className="modal-title">Select Sport</span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div> */}
        <div className="sports-grid">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`sport-item`}
              onClick={() => {
                navigate(`/?eventTypeId=${sport.id}`);
                onClose();
              }}
            >
              <div className="sport-icon">{sport.icon}</div>
              <span className="sport-label">{sport.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
