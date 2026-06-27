import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../api";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import Register from "../components/modals/Register/Register";
import ForgotPassword from "../components/modals/ForgotPassword/ForgotPassword";
import ChangePassword from "../components/modals/ChangePassword/ChangePassword";
import Rules from "../components/modals/Rules/Rules";
import { useLanguage } from "../context/LanguageProvider";

const MainLayout = () => {
  const { setLanguage } = useLanguage();
  const [, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const {
    group,
    showRegisterModal,
    showForgotPasswordModal,
    showChangePasswordModal,
    showRulesModal,
    showMobileSidebar,
    windowWidth,
  } = useSelector((state) => state.global);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

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
  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "english");
  }, [setLanguage]);
  return (
    <div>
      {showRulesModal && <Rules />}
      {showChangePasswordModal && <ChangePassword />}
      {showRegisterModal && <Register />}{" "}
      {showForgotPasswordModal && <ForgotPassword />}
      <div>
        {showMobileSidebar && windowWidth < 1199 && (
          <div
            style={{ position: "fixed", top: "0px", left: "0px", zIndex: 9999 }}
          >
            <Sidebar />
          </div>
        )}

        <Header />
        {windowWidth >= 1199 && !location.pathname.includes("/casino/") && (
          <Sidebar />
        )}

        <Outlet />
        {!location.pathname.includes("/casino/") && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
