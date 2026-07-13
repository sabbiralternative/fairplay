import { useRef } from "react";
import "./SportModal.css";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useNavigate } from "react-router-dom";

const sports = [
  { id: "4", label: "Cricket", icon: "🏏" },
  { id: "1", label: "Soccer", icon: "⚽" },
  { id: "2", label: "Tennis", icon: "🎾" },
  { id: "6", label: "Election", icon: "🗳️" },
  { id: "5", label: "Kabaddi", icon: "🤼" },
  { id: "7", label: "Horse Racing", icon: "🐎" },
  { id: "4339", label: "Greyhound Racing", icon: "🐕" },
  { id: "7522", label: "Basketball", icon: "🏀" },
  { id: "7511", label: "Baseball", icon: "⚾" },
  { id: "20", label: "Table Tennis", icon: "🏓" },
  { id: "998917", label: "Volleyball", icon: "🏐" },
  { id: "7524", label: "Ice Hockey", icon: "🏒" },
  { id: "5", label: "Rugby", icon: "🎱" },
  { id: "26420387", label: "Mixed Martial Arts", icon: "🥊" },
  { id: "3503", label: "Darts", icon: "🤾" },
  { id: "29", label: "Futsal", icon: "🏉" },

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

export default function SportModal({ isOpen = true, onClose }) {
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
