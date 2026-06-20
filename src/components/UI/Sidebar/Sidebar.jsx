import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { setShowMobileSidebar } from "../../../redux/features/global/globalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const { token } = useSelector((state) => state.auth);
  const { showMobileSidebar } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });

  useCloseModalClickOutside(ref, () => {
    if (showMobileSidebar) {
      dispatch(setShowMobileSidebar(false));
    }
  });

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
      {showMobileSidebar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(0 0 0 / 40%)",
          }}
        ></div>
      )}

      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <aside
        ref={showMobileSidebar ? ref : null}
        id="sidebar"
        className="sidebar"
        style={{ left: "0px" }}
      >
        <div className="mobile-menu">
          <ul id="sidebar-nav" className="sidebar-nav">
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=4"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/4.png" />
                <span>Cricket</span>

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=1"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/1.png" />
                <span>Football</span>

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=2"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/2.png" />
                <span>Tennis</span>

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
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
                onClick={() => dispatch(setShowMobileSidebar(false))}
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=7"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/7.png" />
                <span>Horse Racing</span>

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
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

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
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

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
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

                {/* <i className="bi bi-chevron-down ms-auto" /> */}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
