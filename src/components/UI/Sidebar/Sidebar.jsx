import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { setShowMobileSidebar } from "../../../redux/features/global/globalSlice";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import images from "../../../assets/images";
import LanguageModal from "../../modals/MobileLanguageModal/LanguageModal";

const Sidebar = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const { language, valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const ref = useRef();
  const { token } = useSelector((state) => state.auth);
  const { showMobileSidebar, windowWidth } = useSelector(
    (state) => state.global,
  );
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
      if (showMobileSidebar) {
        dispatch(setShowMobileSidebar(false));
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

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const navigateWhatsApp = () => {
    if (token && Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
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
        {showLanguageModal && (
          <LanguageModal onClose={() => setShowLanguageModal(false)} />
        )}
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
                <span>
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.CRICKET)}
                </span>

                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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
                <span>
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
                </span>

                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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
                <span>
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.TENNIS)}
                </span>
                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
                to="/casino?product=All&category=All"
                className="nav-link final-link hightlight-smenu"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99998.png"
                />
                <span>Casino</span>
                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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
                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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
                <span>
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.HORSE)}
                </span>
                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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
                <span>
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
                </span>

                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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
                <span>
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.KABADDI)}
                </span>

                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
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

                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
              </Link>
            </li>
            {windowWidth < 500 && (
              <li className="nav-item">
                <a
                  onClick={() => setShowLanguageModal(true)}
                  data-bs-toggle="collapse"
                  className="nav-link"
                >
                  <img
                    alt=""
                    className="menu-icon"
                    src="/assets/world-BcbIijKx.webp"
                  />
                  <span>{language}</span>

                  <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
                </a>
              </li>
            )}

            <li className="nav-item">
              <Link
                onClick={() => dispatch(setShowMobileSidebar(false))}
                data-bs-toggle="collapse"
                className="nav-link"
                to="/blog"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/2378961.png"
                />
                <span>Blog</span>

                <MdOutlineKeyboardArrowRight className="ms-auto" size={24} />
              </Link>
            </li>
            {Settings.apk_link && (
              <li className="nav-item">
                <div className="online-betting-app-btn download_app_btn">
                  <a
                    style={{ width: "130px", color: "#fff" }}
                    onClick={handleDownload}
                  >
                    <div className="down-app-btn">
                      <span>Download App</span>
                    </div>
                  </a>
                </div>
              </li>
            )}
            {(Settings?.instagramLink ||
              Settings?.branchWhatsapplink ||
              Settings?.whatsapplink ||
              Settings?.telegramLink) && (
              <li className="nav-item">
                <div className="remove-padding">
                  <div className="socail-link">
                    <h4> Social Link </h4>
                    <ul>
                      {(Settings?.whatsapplink ||
                        Settings?.branchWhatsapplink) && (
                        <li style={{ borderBottom: "none" }}>
                          <a onClick={navigateWhatsApp}>
                            <img
                              loading="lazy"
                              src={images.whatsApp}
                              alt="telegram"
                              title="telegram"
                            />
                          </a>
                        </li>
                      )}

                      {Settings?.telegramLink && (
                        <li style={{ borderBottom: "none" }}>
                          <a
                            onClick={() =>
                              window.open(Settings?.telegramLink, "_blank")
                            }
                          >
                            <img
                              loading="lazy"
                              src={images.telegram}
                              alt="telegram"
                              title="telegram"
                            />
                          </a>
                        </li>
                      )}
                      {Settings?.instagramLink && (
                        <li style={{ borderBottom: "none" }}>
                          <a
                            onClick={() =>
                              window.open(Settings?.instagramLink, "_blank")
                            }
                          >
                            <img
                              loading="lazy"
                              src={images.instagram}
                              alt="telegram"
                              title="telegram"
                            />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
