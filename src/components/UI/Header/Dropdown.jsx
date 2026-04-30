import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import useBalance from "../../../hooks/balance";
import { Link } from "react-router-dom";
import { setShowChangePasswordModal } from "../../../redux/features/global/globalSlice";

const Dropdown = ({ setShowDropdown }) => {
  const { data } = useBalance();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const ref = useRef();
  useCloseModalClickOutside(ref, () => setShowDropdown(false));

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };
  return (
    <div
      ref={ref}
      id="mySidenav"
      className="sidenav"
      style={{ width: "256px" }}
    >
      <ul className="dropdown-menu show dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>
            <span>Hi,</span> &nbsp; {user}
          </h6>
          <Link
            onClick={() => setShowDropdown(false)}
            id="account-menu-hide-button"
            className="closebtn"
          >
            <i className="mdi mdi-close" />
          </Link>
        </li>
        <li className="balance-information">
          <div className="balance-title text-white">
            <i aria-hidden="true" className="mdi mdi-bank theme-color" />{" "}
            Balance Information{" "}
          </div>
          <div className="balance-row">
            <div className="balance-text-left">
              Wallet Amount <small>(Inclusive bonus)</small>
            </div>
            <div className="balance-price"> {data?.availBalance}</div>
          </div>
          <div className="balance-row">
            <div className="balance-text-left">Net Exposure</div>
            <div className="balance-price"> {data?.deductedExposure}</div>
          </div>
          <div className="balance-row">
            <div className="balance-text-left">Bonus</div>
            <div className="balance-price">0.00</div>
          </div>
          <div className="balance-row">
            <div className="balance-text-left">Available Withdrawal</div>
            <div className="balance-price">{data?.availBalance}</div>
          </div>
        </li>
        <li className="ab_rae_btns">
          <button className="ab_btns" tabIndex={0}>
            Awaiting Bonus <span>1800</span>
          </button>
          <button className="rae_btns" tabIndex={0}>
            REFER AND EARN
          </button>
        </li>

        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/account/account_statement"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-google-analytics" />
            <span>Account Statement</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/account/unsettled-bets"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-chart-gantt" />
            <span>Open Bets</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="javascript:void(0)"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-text-box-outline" />
            <span>Bonus rules</span>
          </Link>
        </li>

        <li>
          <Link
            onClick={() => {
              dispatch(setShowChangePasswordModal(true));
              setShowDropdown(false);
            }}
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-lock" />
            <span>Reset Password</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/stake-settings"
            className="dropdown-item"
          >
            <i className="mdi mdi-tune" />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/account/my-bets"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-format-list-bulleted-square" />
            <span>My Bets</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/multi-market"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-heart-outline" />
            <span>Favorites</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="javascript:void(0)"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-text-box-outline" />
            <span>Rules &amp; Regulations</span>
          </Link>
        </li>
        <li className="logout-li">
          <Link onClick={handleLogout}>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
