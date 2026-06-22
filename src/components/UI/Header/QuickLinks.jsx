import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { useState } from "react";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { latestEvent } from "../../../static/latest-event";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const QuickLinks = () => {
  const { valueByLanguage } = useLanguage();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${name}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
      }
    } else {
      toast.error("Please login to access the game");
    }
  };

  return (
    <div className="navbar-main">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="navbar-content">
        <ul id="pills-tab" role="tablist" className="nav nav-tabs nav-pills">
          {/* <li className="nav-item">
            <Link
              className="nav-link blinker theme-color"
              to="/event-details/4/28127348"
            >
              <div className="menu-icon">
                <img
                  alt=""
                  src="https://speedcdn.io/assets/score_card/worldcup-icon.png"
                  className="me-2"
                  style={{ filter: "invert(1)" }}
                />
              </div>
              IPL 2026
            </Link>
          </li> */}
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=0"
              id="Inplay-tab"
              className={`nav-link  ${
                location.pathname === "/" &&
                !(eventTypeId || eventTypeId === "0")
                  ? "active"
                  : ""
              }`}
            >
              <div className="menu-icon">
                <img
                  src="/assets/img/icon/Inplay.png"
                  alt=""
                  className="me-2"
                />
              </div>
              Inplay
            </Link>
          </li>
          {latestEvent
            ?.filter((item) => item?.show)
            .map((item) => (
              <li
                key={item?.eventName}
                role="presentation"
                className="nav-item"
              >
                <Link
                  to={item?.pathname}
                  className={`nav-link  ${eventTypeId === item?.pathname ? "active" : ""}`}
                >
                  <div className="menu-icon">
                    <img
                      alt=""
                      className="me-2"
                      src="/assets/img/icon/Inplay.png"
                    />
                  </div>
                  {item.eventName}
                </Link>
              </li>
            ))}
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=4"
              className={`nav-link  ${eventTypeId === "4" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/4.png" />
              </div>
              {languageValue(valueByLanguage, LanguageKey.CRICKET)}{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=1"
              className={`nav-link  ${eventTypeId === "1" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/1.png" />
              </div>
              {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=2"
              className={`nav-link  ${eventTypeId === "2" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/2.png" />
              </div>
              {languageValue(valueByLanguage, LanguageKey.TENNIS)}{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/casino?product=All&category=All"
              id="Inplay-tab"
              className={`nav-link  ${location.pathname === "/casino" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/99998.png" />
              </div>
              Casino{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <a
              onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
              id="Inplay-tab"
              className={`nav-link  ${location.pathname === "/casino/sportsbook/550000" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/99991.png" />
              </div>
              Sportsbook{" "}
            </a>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              t
              to="/?eventTypeId=7"
              className={`nav-link  ${eventTypeId === "7" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/7.png" />
              </div>
              {languageValue(valueByLanguage, LanguageKey.HORSE)}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=4339"
              className={`nav-link  ${eventTypeId === "4339" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/4339.png" />
              </div>
              {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
            </Link>
          </li>

          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=5"
              className={`nav-link  ${eventTypeId === "5" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/99994.png" />
              </div>
              {languageValue(valueByLanguage, LanguageKey.KABADDI)}{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=6"
              className={`nav-link  ${eventTypeId === "6" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img
                  alt=""
                  className="me-2"
                  src="/assets/img/icon/2378961.png"
                />
              </div>
              Politics{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
