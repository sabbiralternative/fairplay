import { Link, useLocation } from "react-router-dom";

const QuickLinks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");

  return (
    <div className="navbar-main">
      <div className="navbar-content">
        <ul id="pills-tab" role="tablist" className="nav nav-tabs nav-pills">
          <li className="nav-item">
            <Link
              className="nav-link blinker theme-color"
              to="/event-details/4/28127348"
            >
              <div className="menu-icon">
                <img
                  alt=""
                  src="https://speedcdn.io/assets/score_card/worldcup-icon.png"
                  className="me-2"
                  style={{ filter: "invert(1)" }}
                />
              </div>
              IPL 2026
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=0"
              id="Inplay-tab"
              className={`nav-link  ${
                location.pathname === "/" &&
                !(eventTypeId || eventTypeId === "0")
                  ? "active"
                  : ""
              }`}
            >
              <div className="menu-icon">
                <img
                  src="/assets/img/icon/Inplay.png"
                  alt=""
                  className="me-2"
                />
              </div>
              Inplay
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=4"
              className={`nav-link  ${eventTypeId === "4" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/4.png" />
              </div>
              Cricket{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=1"
              className={`nav-link  ${eventTypeId === "1" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/1.png" />
              </div>
              Football{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=2"
              className={`nav-link  ${eventTypeId === "2" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/2.png" />
              </div>
              Tennis{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/casino?product=All&category=All"
              id="Inplay-tab"
              className="nav-link"
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/99998.png" />
              </div>
              Casino{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to="Javascript:void(0)" id="Inplay-tab" className="nav-link">
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/99991.png" />
              </div>
              Sportsbook{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to="/exchange_sports/7" id="Inplay-tab" className="nav-link">
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/7.png" />
              </div>
              Horse Racing{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/exchange_sports/4339"
              id="Inplay-tab"
              className="nav-link"
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/4339.png" />
              </div>
              Greyhound Racing{" "}
            </Link>
          </li>

          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=5"
              className={`nav-link  ${eventTypeId === "5" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img alt="" className="me-2" src="/assets/img/icon/99994.png" />
              </div>
              Kabaddi{" "}
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link
              to="/?eventTypeId=6"
              className={`nav-link  ${eventTypeId === "6" ? "active" : ""}`}
            >
              <div className="menu-icon">
                <img
                  alt=""
                  className="me-2"
                  src="/assets/img/icon/2378961.png"
                />
              </div>
              Politics{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
