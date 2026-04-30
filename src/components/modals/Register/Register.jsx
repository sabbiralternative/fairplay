import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useLogo } from "../../../context/ApiProvider";

const Register = () => {
  const { logo } = useLogo();
  const [getOTP] = useGetOtpMutation();
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [mobile, setMobile] = useState("");
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const dispatch = useDispatch();

  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
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

  const closeModal = () => {
    dispatch(setShowRegisterModal(false));
  };

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeModal();
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
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
                        onChange={handleMobileNo}
                        value={mobile}
                        type="text"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                      <label className="floating-label">Mobile Number *</label>
                      <a
                        onClick={() => setShowPassword(!showPassword)}
                        className="eye-on-off"
                        style={{ right: "0px" }}
                      >
                        {timer > 0 ? (
                          <button
                            style={{ height: "30px", marginBottom: "0px" }}
                            type="button"
                            className="v-btn demobtn"
                          >
                            Resend in {timer}s
                          </button>
                        ) : (
                          <button
                            onClick={handleOTP}
                            disabled={mobile?.length < 10}
                            style={{ height: "30px", marginBottom: "0px" }}
                            type="button"
                            className="v-btn demobtn"
                          >
                            Get OTP
                          </button>
                        )}
                      </a>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="mdi mdi-account" />
                        </span>
                      </div>
                      <input
                        {...register("otp", { required: true })}
                        type="text"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                      <label className="floating-label">Enter OTP *</label>
                    </div>
                    <div className="form-group input-group">
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
                      <label className="floating-label">Password *</label>
                      <a
                        onClick={() => setShowConfirmPassword(!showPassword)}
                        className="eye-on-off"
                      >
                        <i
                          className={`mdi  ${showPassword ? "mdi-eye-off" : "mdi-eye-off"}`}
                        />
                      </a>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="mdi mdi-lock" />
                        </span>
                      </div>
                      <input
                        {...register("confirmPassword", { required: true })}
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                      <label className="floating-label">
                        Confirm Password *
                      </label>
                      <a
                        onClick={() => setShowPassword(!showConfirmPassword)}
                        className="eye-on-off"
                      >
                        <i
                          className={`mdi  ${showConfirmPassword ? "mdi-eye-off" : "mdi-eye-off"}`}
                        />
                      </a>
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
                        readOnly={referralCode}
                        {...register("referralCode")}
                        defaultValue={referralCode}
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                      <label className="floating-label">
                        Referral(Optional)
                      </label>
                    </div>

                    <div className="btn-group">
                      <button type="submit" className="v-btn">
                        Register
                      </button>
                    </div>
                    <div style={{ textAlign: "center", fontSize: "12px" }}>
                      <span>Already have an account ? </span>
                      <a
                        onClick={() => {
                          dispatch(setShowLoginModal(true));
                          closeModal();
                        }}
                        style={{ textDecoration: "underline" }}
                      >
                        Login
                      </a>
                    </div>
                    <div className="whatsapp_ids_section">
                      <div className="row">
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

export default Register;
