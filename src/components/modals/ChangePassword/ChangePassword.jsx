import { Fragment, useRef } from "react";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setShowChangePasswordModal } from "../../../redux/features/global/globalSlice";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const ChangePassword = () => {
  const ref = useRef(null);
  const [handleChangePassword] = useChangePasswordMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
      dispatch(setShowChangePasswordModal(false));
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  useCloseModalClickOutside(ref, () =>
    dispatch(setShowChangePasswordModal(false)),
  );
  return (
    <Fragment>
      <div className="modal-backdrop fade in show" />
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
          className="cp_modal modal-dialog modal-dialog-centered"
        >
          <div className="modal-content">
            <div>
              <div className="modal-body" ref={ref}>
                <button
                  onClick={() => dispatch(setShowChangePasswordModal(false))}
                  type="button"
                  className="close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="change__password__ui ng-pristine ng-invalid ng-touched"
                >
                  <h3>Change Password</h3>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="mdi mdi-lock" />
                    </span>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Enter Old Password"
                      className="form-control ng-pristine ng-invalid ng-touched"
                      aria-autocomplete="list"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="mdi mdi-lock" />
                    </span>
                    <input
                      type="password"
                      placeholder="Enter New Password"
                      {...register("newPassword", {
                        required: true,
                      })}
                      className="form-control ng-pristine ng-invalid ng-touched"
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="mdi mdi-lock" />
                    </span>
                    <input
                      type="password"
                      placeholder="Enter Confirm Password"
                      {...register("newPasswordConfirm", {
                        required: true,
                      })}
                      className="form-control ng-untouched ng-pristine ng-invalid"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-cp"
                    style={{ color: "#000" }}
                  >
                    change password &nbsp;
                  </button>
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

export default ChangePassword;
