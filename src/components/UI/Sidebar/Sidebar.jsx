import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <div className="mobile-menu">
          <ul id="sidebar-nav" className="sidebar-nav">
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=4"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/4.png" />
                <span>Cricket</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=1"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/1.png" />
                <span>Football</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=2"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/2.png" />
                <span>Tennis</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link final-link hightlight-smenu">
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99998.png"
                />
                <span>Casino</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="javascript:void(0)" className="nav-link final-link">
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99991.png"
                />
                <span>Sports book</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="#collapse5"
              >
                <img alt="" className="menu-icon" src="assets/img/icon/7.png" />
                <span>Horse Racing</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="#collapse6"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/4339.png"
                />
                <span>Greyhound Racing</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=5"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/99994.png"
                />
                <span>Kabaddi</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                data-bs-toggle="collapse"
                className="nav-link"
                to="/?eventTypeId=6"
              >
                <img
                  alt=""
                  className="menu-icon"
                  src="assets/img/icon/2378961.png"
                />
                <span>Politics</span>

                <i className="bi bi-chevron-down ms-auto" />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
