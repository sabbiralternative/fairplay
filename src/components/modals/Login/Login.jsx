import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogo } from "../../../context/ApiProvider";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowChangePasswordModal,
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";

const Login = () => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const closeModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        localStorage.setItem("changePassword", true);
        closeModal();
        dispatch(setShowChangePasswordModal(true));
      }
      if (!result?.result?.changePassword && token && user) {
        closeModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeModal();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
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

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Fragment>
      <div className="modal-backdrop fade in show"></div>
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <div
          role="document"
          className="login_modal modal-dialog modal-dialog-centered"
        >
          <div className="modal-content">
            <div>
              <div className="modal-body">
                <button
                  onClick={closeModal}
                  type="button"
                  className="close"
                  style={{ display: "block" }}
                >
                  <span aria-hidden="true">
                    <i className="mdi mdi-home" />
                  </span>
                </button>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="col-md-4 col-12 ng-untouched ng-pristine ng-invalid"
                >
                  <img
                    className="img-fluid"
                    tabIndex={0}
                    src={logo}
                    style={{
                      height: Settings.logo_height,
                      width: Settings.logo_width,
                    }}
                  />
                  <div className="my-3">
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="mdi mdi-account" />
                        </span>
                      </div>
                      <input
                        type="text"
                        {...register("username", { required: true })}
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                      <label className="floating-label">Enter Username</label>
                    </div>
                    <div
                      style={{ marginBottom: "0px" }}
                      className="form-group input-group"
                    >
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="mdi mdi-lock" />
                        </span>
                      </div>
                      <input
                        {...register("password", { required: true })}
                        type={showPassword ? "text" : "password"}
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                      <label className="floating-label">
                        Enter Your Password
                      </label>
                      <a
                        onClick={() => setShowPassword(!showPassword)}
                        className="eye-on-off"
                      >
                        <i
                          className={`mdi  ${showPassword ? "mdi-eye" : "mdi-eye-off"}`}
                        />
                      </a>
                    </div>
                    <div style={{ textAlign: "end" }}>
                      {" "}
                      <a
                        onClick={() => {
                          closeModal();
                          dispatch(setShowForgotPasswordModal(true));
                        }}
                        style={{
                          textDecoration: "underline",
                          fontSize: "12px",
                        }}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        defaultValue
                        id="invalidCheck"
                        required
                        defaultChecked
                        className="form-check-input"
                      />
                      <label
                        htmlFor="invalidCheck"
                        className="form-check-label"
                      >
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                    <div className="btn-group">
                      <button type="submit" className="v-btn">
                        login
                      </button>
                      <button
                        onClick={loginWithDemo}
                        type="button"
                        className="v-btn demobtn"
                      >
                        demo login
                      </button>
                    </div>
                    <div style={{ textAlign: "center", fontSize: "12px" }}>
                      <span>Don&apos;t have an account ? </span>
                      <a
                        onClick={() => {
                          dispatch(setShowRegisterModal(true));
                          closeModal();
                        }}
                        style={{ textDecoration: "underline" }}
                      >
                        Register
                      </a>
                    </div>
                    <div className="whatsapp_ids_section">
                      <span>OR</span>
                      <h4>Get your ready-made ID from whatsapp</h4>
                      <div className="row">
                        <div className="col-4">
                          <div className="wis_div">
                            <img src="data:image/png;base64,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" />
                            <b>diamond upgrade</b>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="wis_div">
                            <img src="data:image/png;base64,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" />
                            <b>1 to 1 customer support</b>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="wis_div">
                            <img src="data:image/png;base64,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" />
                            <b>24/7 instatnt withdrawal</b>
                          </div>
                        </div>
                        {Settings?.whatsapplink &&
                          Settings.registration_whatsapp && (
                            <div className="col-12">
                              <a
                                onClick={() =>
                                  getWhatsAppId(Settings?.whatsapplink)
                                }
                                className="whatsapp_link"
                              >
                                <img
                                  src="https://88panel.com/images/icon/whatsapp.svg"
                                  className="img-fluid"
                                />
                                WhatsApp
                              </a>
                            </div>
                          )}
                        {Settings.apk_link && (
                          <div
                            onClick={handleDownload}
                            className="btn-group"
                            style={{ marginTop: "5px" }}
                          >
                            <button
                              type="submit"
                              className="v-btn"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                              }}
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
                              </svg>{" "}
                              Download .apk
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
      </div>
    </Fragment>
  );
};

export default Login;
