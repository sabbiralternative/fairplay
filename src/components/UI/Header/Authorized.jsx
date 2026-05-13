import { Fragment } from "react";
import useBalance from "../../../hooks/balance";

const Authorized = ({ setShowDropdown }) => {
  const { data } = useBalance();
  return (
    <Fragment>
      <li
        onClick={() => setShowDropdown(true)}
        className="nav-item dropdown pe-xl-3 pe-1"
      >
        <a
          id="account-menu-open-button"
          href="javascript:void(0);"
          className="nav-link nav-profile d-flex align-items-center v-btn top-btn"
        >
          <span className="d-md-block dropdown-toggle ps-2">
            {data?.availBalance}
          </span>
          <i className="bi bi-person" />
        </a>
      </li>
    </Fragment>
  );
};

export default Authorized;
