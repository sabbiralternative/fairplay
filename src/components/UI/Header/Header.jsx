import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import QuickLinks from "./QuickLinks";
import Login from "../../modals/Login/Login";
import Authorized from "./Authorized";
import Dropdown from "./Dropdown";

const Header = () => {
  const location = useLocation();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const { showLoginModal } = useSelector((state) => state.global);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, closePopupForForever } = useSelector(
    (state) => state?.global,
  );

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

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
      {/* <Notification />
      {Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />} */}
      <div>
        <div>
          <div className="commentary_main marquee">
            <span />
            <button>
              <i className="mdi mdi-close" />
            </button>
          </div>
        </div>

        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div className="d-flex align-items-center justify-content-between">
            <i className="mdi mdi-menu toggle-sidebar-btn d-md-none" />
            <a
              href="/exchange_sports/inplay"
              className="logo d-flex align-items-center"
            >
              <img
                alt=""
                className="img-fluid"
                style={{
                  height: Settings.logo_height,
                  width: Settings.logo_width,
                }}
                src={logo}
              />
            </a>
          </div>
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a href="javascript:void(0);" className="m-refresh-icon">
                  <i className="bi bi-search" />
                </a>
              </li>

              <div className="search-bar">
                <form
                  noValidate
                  method="POST"
                  action="#"
                  className="search-form d-flex align-items-center ng-untouched ng-pristine ng-valid"
                >
                  <button type="submit" title="Search">
                    <i className="bi bi-search" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search for a Sport, Game or Team"
                    className="apl-form-large -qa-search-bar ng-untouched ng-pristine ng-valid"
                    aria-expanded="false"
                    aria-autocomplete="list"
                  />
                </form>
              </div>
              {token ? (
                <Authorized setShowDropdown={setShowDropdown} />
              ) : (
                <li
                  onClick={() => dispatch(setShowLoginModal(true))}
                  className="nav-item pe-xl-1 pe-1"
                >
                  <a className="v-btn top-btn">Login</a>
                </li>
              )}

              <li className="nav-item pe-xl-1 pe-1"></li>
            </ul>
          </nav>
        </header>
        <div
          id="mobsearcbar"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          className="modal fade"
        >
          <div
            role="document"
            className="modal-dialog modal-dialog-centered mob_searchbar"
          >
            <div className="modal-content">
              <div className="modal-body">
                <div className="search-bar">
                  <h2>search</h2>
                  <form
                    noValidate
                    method="POST"
                    action="#"
                    className="search-form d-flex align-items-center ng-untouched ng-pristine ng-valid"
                  >
                    <button type="submit" title="Search">
                      <i className="bi bi-search" />
                    </button>
                    <input
                      type="text"
                      placeholder="Search for a Sport, Game or Team"
                      className="apl-form-large -qa-search-bar ng-untouched ng-pristine ng-valid"
                      aria-expanded="false"
                      aria-autocomplete="list"
                    />
                  </form>
                  <a className="close">
                    <i className="mdi mdi-close" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <QuickLinks />
      </div>
    </Fragment>
  );
};

export default Header;
