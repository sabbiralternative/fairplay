import DesktopBetSlip from "./DesktopBetSlip";
import OpenBets from "./OpenBets";

const RightSidebar = () => {
  return (
    <div
      id="betslip-section-id"
      className="col-md-4 d-none d-md-block betslip-section-fixed"
    >
      <div
        id="collapseDesktopTv"
        aria-hidden="true"
        className="collapse"
        style={{ display: "none" }}
      >
        <div className="row">
          <div className="ratio ratio-16x9">
            <iframe allowFullScreen src />
          </div>
        </div>
      </div>
      <div className="right__sidebar theme-bg2 p-2">
        <div type="pills nav nav-pills" className="tab-container">
          <ul role="tablist" className="nav nav-pills" aria-label="Tabs">
            <li className="active nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link active"
                aria-controls
                aria-selected="true"
                id
              >
                <span />
                <button className="nav-link"> Betslip </button>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link"
                aria-controls
                aria-selected="false"
                id
              >
                <span />
                <button className="nav-link"> Open Bet </button>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" aria-labelledby className="tab-pane active">
              <DesktopBetSlip />
            </div>

            <div role="tabpanel" aria-labelledby className="tab-pane">
              <OpenBets />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
