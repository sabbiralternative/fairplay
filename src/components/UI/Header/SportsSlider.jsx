import { useRef } from "react";
import "./SportsTabSlider.css";
import { useLocation, useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

export default function SportsTabSlider() {
  const { getLanguage } = useLanguage();
  const tabs = [
    { id: "4", label: getLanguage(LanguageKey.CRICKET), icon: "🏏", count: 39 },
    {
      id: "1",
      label: getLanguage(LanguageKey.FOOTBALL),
      icon: "⚽",
      count: 23,
    },
    { id: "2", label: getLanguage(LanguageKey.TENNIS), icon: "🎾", count: 182 },
    { id: "6", label: getLanguage(LanguageKey.POLITICS), icon: "🗳️", count: 0 },
    { id: "5", label: getLanguage(LanguageKey.KABADDI), icon: "🤼", count: 0 },
    { id: "7", label: getLanguage(LanguageKey.HORSE), icon: "🐎", count: 0 },
    {
      id: "4339",
      label: getLanguage(LanguageKey.GREYHOUND),
      icon: "🐕",
      count: 0,
    },
    { id: "favorites", label: "FAVORITES", icon: "⭐", count: null },
    { id: "matka", label: "MATKA", icon: "💰", count: null },
    { id: "fifa-cup", label: "FIFA CUP WINNER", icon: "🏆", count: 1 },
    { id: "winner-cup", label: "WINNER CUP", icon: "🥇", count: 1 },

    { id: "election2", label: "ELECTION", icon: "🗳️", count: 0 },
    { id: "esports", label: "ESPORTS", icon: "🎮", count: 0 },
    { id: "mma", label: "MIXED MARTIAL ARTS", icon: "🥊", count: 0 },
    { id: "gaelic", label: "GAELIC GAMES", icon: "🏑", count: 0 },
    { id: "volleyball", label: "VOLLEYBALL", icon: "🏐", count: 0 },
    { id: "handball", label: "HANDBALL", icon: "🤾", count: 0 },
    { id: "australian", label: "AUSTRALIAN RULES", icon: "🏉", count: 0 },
    { id: "ice-hockey", label: "ICE HOCKEY", icon: "🏒", count: 0 },
    { id: "basketball", label: "BASKETBALL", icon: "🏀", count: 0 },
    { id: "baseball", label: "BASEBALL", icon: "⚾", count: 0 },
    {
      id: "american-football",
      label: "AMERICAN FOOTBALL",
      icon: "🏈",
      count: 0,
    },
    { id: "snooker", label: "SNOOKER", icon: "🎱", count: 0 },
    { id: "table-tennis", label: "TABLE TENNIS", icon: "🏓", count: 0 },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");

  const scrollRef = useRef(null);

  const handleTabClick = (tab) => {
    navigate(`/?eventTypeId=${tab.id}&sportsSlider=true`);
  };

  return (
    <div className="sports-tab-bar">
      <div className="sports-tab-scroll" ref={scrollRef}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sports-tab${eventTypeId === tab.id ? " active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            <div className="sports-tab-icon-wrap">
              <span className="sports-tab-icon">{tab.icon}</span>
              {/* {tab.count !== null && (
                <span
                  className={`sports-tab-badge${tab.count === 0 ? " zero" : ""}`}
                >
                  {tab.count}
                </span>
              )} */}
            </div>
            <span className="sports-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
