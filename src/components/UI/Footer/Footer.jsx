import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
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
    <div>
      <div className="mobile__footer">
        <div className="mf_navbar">
          <Link to="/casino/99998">
            <img src="/assets/img/icon/live-cards.png" />
            <span>Our Casino</span>
          </Link>
        </div>
        <div className="mf_navbar">
          <Link to="/popular-events">
            <img src="/assets/img/icon/4.png" />
            <span>Popular Events</span>
          </Link>
        </div>
        <div className="mf_navbar">
          <Link to="/?eventTypeId=0">
            <img src="/assets/img/icon/Inplay.png" />
            <span>Inplay</span>
          </Link>
        </div>
        <div className="mf_navbar">
          <Link to="/">
            <img src="/assets/img/icon/99991.png" />
            <span>Sportsbook</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
