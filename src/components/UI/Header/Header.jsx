import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { Link, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
  setShowLoginModal,
  setShowMobileSidebar,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import QuickLinks from "./QuickLinks";
import Login from "../../modals/Login/Login";
import Authorized from "./Authorized";
import Dropdown from "./Dropdown";
import Search from "./Search";
import AppPopup from "./AppPopUp";
// import Notification from "./Notification"
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import BuildVersion from "../../modals/BuildVersion/BuildVersion";
import Language from "./Language";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Header = () => {
  const { valueByLanguage } = useLanguage();
  const stored_build_version = localStorage.getItem("build_version");
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const location = useLocation();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const { showLoginModal } = useSelector((state) => state.global);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, closePopupForForever, showAPKModal } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}

      {Settings.apk_link && showAPKModal && (
        <DownloadAPK setShowAPKModal={setShowAPKModal} />
      )}
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={Settings?.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}
      <div>
        <header id="header" className="header fixed-top ">
          {/* <Notification /> */}
          {Settings.apk_link && showAppPopUp && windowWidth < 1040 && (
            <AppPopup />
          )}

          <div
            className="d-flex align-items-center mobile-padding"
            style={{ height: "100%" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <i
                onClick={() => dispatch(setShowMobileSidebar(true))}
                className="mdi mdi-menu toggle-sidebar-btn d-md-none"
              />
              <Link to="/" className="logo d-flex align-items-center">
                <img
                  alt=""
                  className="img-fluid"
                  style={{
                    height: Settings.logo_height,
                    width: Settings.logo_width,
                  }}
                  src={logo}
                />
              </Link>

              <Link
                data-v-5247495a=""
                to="/blog"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Blogs"
                className="cmn-tooltops-btn sm-d-none"
              >
                <img
                  data-v-5247495a=""
                  src="/assets/news-D4x4CLBw.svg"
                  alt="Blogs"
                />
                <div data-v-5247495a="" className="news">
                  <span data-v-5247495a="">Blogs</span>
                </div>
              </Link>
            </div>
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
                <Language />
                <Search />
                {token ? (
                  <Authorized setShowDropdown={setShowDropdown} />
                ) : (
                  <Fragment>
                    <li
                      onClick={() => dispatch(setShowLoginModal(true))}
                      className="nav-item pe-xl-1 pe-1"
                    >
                      <a style={{ minWidth: "65px" }} className="v-btn top-btn">
                        {" "}
                        {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                      </a>
                    </li>
                    <li
                      onClick={() => dispatch(setShowRegisterModal(true))}
                      className="nav-item pe-xl-1 pe-1"
                    >
                      <a
                        style={{
                          background: "var(--bg-secondary)",
                          border: "var(--bg-secondary) 1px solid",
                        }}
                        className="v-btn top-btn"
                      >
                        {" "}
                        {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                      </a>
                    </li>
                  </Fragment>
                )}

                <li className="nav-item pe-xl-1 pe-1"></li>
              </ul>
            </nav>
          </div>
        </header>

        <QuickLinks />
      </div>
    </Fragment>
  );
};

export default Header;
