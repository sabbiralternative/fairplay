import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token } = useSelector((state) => state.auth);

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
      dispatch(setShowLoginModal(true));
    }
  };
  return (
    <div>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="mobile__footer">
        <div className="mf_navbar">
          <Link to="/">
            <img src="/assets/home-DRd6byi1.svg" />
            <span>Home</span>
          </Link>
        </div>
        <div className="mf_navbar">
          <Link to="casino?product=All&category=All">
            <img src="/assets/img/icon/live-cards.png" />
            <span>Our Casino</span>
          </Link>
        </div>

        <div className="mf_navbar">
          <Link to="/?eventTypeId=0">
            <img src="/assets/img/icon/Inplay.png" />
            <span>Inplay</span>
          </Link>
        </div>
        <div className="mf_navbar">
          <a onClick={() => handleNavigateToIFrame("sportsbook", "550000")}>
            <img src="/assets/img/icon/99991.png" />
            <span>Sportsbook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
