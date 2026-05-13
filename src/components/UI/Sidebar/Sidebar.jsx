import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";

const Sidebar = () => {
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
    <div>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <aside id="sidebar" className="sidebar">
        <div className="mobile-menu">
          <ul id="sidebar-nav" className="sidebar-nav">
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=4"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/4.png" />
                <span>Cricket</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=1"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/1.png" />
                <span>Football</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=2"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/2.png" />
                <span>Tennis</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/casino"
                className="nav-link final-link hightlight-smenu"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99998.png"
                />
                <span>Casino</span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
                className="nav-link final-link"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99991.png"
                />
                <span>Sports book</span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=7"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/7.png" />
                <span>Horse Racing</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=4339"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/4339.png"
                />
                <span>Greyhound Racing</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=5"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99994.png"
                />
                <span>Kabaddi</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=6"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/2378961.png"
                />
                <span>Politics</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
