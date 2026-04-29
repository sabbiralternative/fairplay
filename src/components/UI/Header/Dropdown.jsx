import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import useBalance from "../../../hooks/balance";

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
          <a
            href="javascript:void(0)"
            id="account-menu-hide-button"
            className="closebtn"
          >
            <i className="mdi mdi-close" />
          </a>
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
          <a
            href="/account/account_statement"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-google-analytics" />
            <span>Account Statement</span>
          </a>
        </li>
        <li>
          <a
            href="/account/unsettled-bets"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-chart-gantt" />
            <span>Open Bets</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-text-box-outline" />
            <span>Bonus rules</span>
          </a>
        </li>

        <li>
          <a
            href="javascript:void(0)"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-lock" />
            <span>Reset Password</span>
          </a>
        </li>
        <li>
          <a href="/account/set-button-variables" className="dropdown-item">
            <i className="mdi mdi-tune" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a
            href="/account/my-bets"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-format-list-bulleted-square" />
            <span>My Bets</span>
          </a>
        </li>
        <li>
          <a
            href="/multi-market"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-heart-outline" />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-text-box-outline" />
            <span>Rules &amp; Regulations</span>
          </a>
        </li>
        <li className="logout-li">
          <a onClick={handleLogout}>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
