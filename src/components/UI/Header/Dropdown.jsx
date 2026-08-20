import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import useBalance from "../../../hooks/balance";
import { Link } from "react-router-dom";
import {
  setShowChangePasswordModal,
  setShowRulesModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Dropdown = ({ setShowDropdown }) => {
  const { getLanguage } = useLanguage();
  const { data } = useBalance();
  const { user } = useSelector((state) => state.auth);
  const { closePopupForForever } = useSelector((state) => state.global);
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
            onClick={() => setShowDropdown(false)}
            id="account-menu-hide-button"
            className="closebtn"
          >
            <i className="mdi mdi-close" />
          </a>
        </li>
        <li className="balance-information">
          <div className="balance-title text-white">
            <i aria-hidden="true" className="mdi mdi-bank theme-color" />{" "}
            {getLanguage(LanguageKey.BALANCE_INFORMATION)}{" "}
          </div>
          <div className="balance-row">
            <div className="balance-text-left">
              {getLanguage(LanguageKey.WALLET_AMOUNT)}{" "}
              <small>(Inclusive bonus)</small>
            </div>
            <div className="balance-price"> {data?.availBalance}</div>
          </div>
          <div className="balance-row">
            <div className="balance-text-left">
              {getLanguage(LanguageKey.EXPOSURE)}
            </div>
            <div className="balance-price"> {data?.deductedExposure}</div>
          </div>
          {/* <div className="balance-row">
            <div className="balance-text-left">Bonus</div>
            <div className="balance-price">0.00</div>
          </div>
          <div className="balance-row">
            <div className="balance-text-left">Available Withdrawal</div>
            <div className="balance-price">{data?.availBalance}</div>
          </div> */}
        </li>
        {/* <li className="ab_rae_btns">
          <button className="ab_btns" tabIndex={0}>
            Awaiting Bonus <span>1800</span>
          </button>
          <button className="rae_btns" tabIndex={0}>
            REFER AND EARN
          </button>
        </li> */}

        <li
          style={{ padding: "0px" }}
          className="dropdown-item d-flex align-items-center"
          data-v-0a7cbcb0=""
        >
          <div data-v-0a7cbcb0="" className="user-deposit-and-withdrawal-btn">
            <div data-v-0a7cbcb0="" className="deposit-v-btn">
              <Link
                onClick={() => setShowDropdown(false)}
                to="/deposit"
                data-v-0a7cbcb0=""
                href="Javascript:void(0);"
              >
                {getLanguage(LanguageKey.DEPOSIT)}
              </Link>
            </div>
            <div data-v-0a7cbcb0="" className="deposit-v-btn">
              <Link
                onClick={() => setShowDropdown(false)}
                to="/withdraw"
                data-v-0a7cbcb0=""
                className="text-white"
              >
                {getLanguage(LanguageKey.WITHDRAW)}
              </Link>
            </div>
          </div>
        </li>

        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/deposit-withdraw-report"
            className="dropdown-item d-flex align-items-center"
          >
            <img
              src="/assets/dw_report.webp"
              className="mdi mdi-google-analytics"
            />
            <span>{getLanguage(LanguageKey.DEPOSIT_WITHDRAW_REPORT)}</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/open-bets"
            className="dropdown-item d-flex align-items-center"
          >
            <img
              src="/assets/open_bets.webp"
              className="mdi mdi-google-analytics"
            />
            <span>{getLanguage(LanguageKey.OPEN_BETS)}</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/betting-profit-loss"
            className="dropdown-item d-flex align-items-center"
          >
            <img
              src="/assets/pnl.webp"
              className="mdi mdi-google-analytics"
              style={{ height: "18px" }}
            />
            <span>{getLanguage(LanguageKey.BETTING_PROFIT_AND_LOSS)}</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/my-bank-details"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-google-analytics" />
            <span> {getLanguage(LanguageKey.MY_BANK_DETAILS)}</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/bonus-statement"
            className="dropdown-item d-flex align-items-center"
          >
            <img
              src="/assets/statements.svg"
              className="mdi mdi-google-analytics"
            />
            <span> {getLanguage(LanguageKey.BONUS_STATEMENT)}</span>
          </Link>
        </li>
        {Settings?.referral && (
          <li>
            <Link
              onClick={() => setShowDropdown(false)}
              to="/affiliate"
              className="dropdown-item d-flex align-items-center"
            >
              <img
                src="/assets/affiliate.svg"
                className="mdi mdi-google-analytics"
              />
              <span>{getLanguage(LanguageKey.AFFILIATE)}</span>
            </Link>
          </li>
        )}

        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/promotions"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-google-analytics" />
            <span>{getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/lossback-bonus"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="mdi mdi-chart-gantt" />
            <span> {getLanguage(LanguageKey.LOSSBACK_BONUS)}</span>
          </Link>
        </li>
        {closePopupForForever && (
          <li>
            <Link
              onClick={() => setShowDropdown(false)}
              to="/app-only-bonus"
              className="dropdown-item d-flex align-items-center"
            >
              <i className="mdi mdi-text-box-outline" />
              <span> {getLanguage(LanguageKey.APP_ONLY_BONUS)}</span>
            </Link>
          </li>
        )}

        <li>
          <Link
            onClick={() => {
              dispatch(setShowChangePasswordModal(true));
              setShowDropdown(false);
            }}
            className="dropdown-item d-flex align-items-center"
          >
            <img
              src="/assets/reset_password.webp"
              className="mdi mdi-google-analytics"
            />
            <span>{getLanguage(LanguageKey.CHANGE_PASSWORD)}</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/stake-settings"
            className="dropdown-item"
          >
            <img
              src="/assets/settings.webp"
              className="mdi mdi-google-analytics"
            />
            <span>{getLanguage(LanguageKey.SETTINGS)}</span>
          </Link>
        </li>

        <li>
          <a
            onClick={() => {
              dispatch(setShowRulesModal(true));
              setShowDropdown(false);
            }}
            className="dropdown-item d-flex align-items-center"
          >
            <img
              src="/assets/rules.webp"
              className="mdi mdi-google-analytics"
            />
            <span>{getLanguage(LanguageKey.RULES_AND_REGULATION)}</span>
          </a>
        </li>
        <li className="logout-li">
          <Link onClick={handleLogout}>
            <span> {getLanguage(LanguageKey.LOGOUT)}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
