const OpenBets = () => {
  return (
    <app-bet-list _nghost-ewv-c89>
      <div className="openbet__designing">
        <div id="matchedBets" className="accordion">
          <accordion
            role="tablist"
            className="panel-group"
            style={{ display: "block" }}
            aria-multiselectable="true"
          >
            <accordion-group
              heading="Matched Bets"
              className="panel panel-open"
              style={{ display: "block" }}
              _nghost-ewv-c54
            >
              <div className="panel card panel-default">
                <div
                  role="tab"
                  className="panel-heading card-header panel-enabled"
                >
                  <div className="panel-title">
                    <div
                      role="button"
                      className="accordion-toggle"
                      aria-expanded="true"
                    >
                      <button type="button" className="btn btn-link">
                        {" "}
                        Matched Bets{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="panel-collapse collapse in show"
                  aria-hidden="false"
                  style={{ display: "block" }}
                >
                  <div className="panel-body card-block card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: "60%" }}>market</th>
                          <th className="text-right">odds</th>
                          <th className="text-center">stake</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            colSpan={3}
                            className="text-center"
                            style={{ color: "#fff" }}
                          >
                            No records Found
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </accordion-group>
            <accordion-group
              heading="Unmatched Bets"
              className="panel"
              style={{ display: "block" }}
              _nghost-ewv-c54
            >
              <div className="panel card panel-default">
                <div
                  role="tab"
                  className="panel-heading card-header panel-enabled"
                >
                  <div className="panel-title">
                    <div
                      role="button"
                      className="accordion-toggle"
                      aria-expanded="false"
                    >
                      <button type="button" className="btn btn-link">
                        {" "}
                        Unmatched Bets{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="panel-collapse collapse"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="panel-body card-block card-body">
                    <p>Content 1</p>
                  </div>
                </div>
              </div>
            </accordion-group>
            <accordion-group
              heading="Premium SportsBook"
              className="panel"
              style={{ display: "block" }}
              _nghost-ewv-c54
            >
              <div className="panel card panel-default">
                <div
                  role="tab"
                  className="panel-heading card-header panel-enabled"
                >
                  <div className="panel-title">
                    <div
                      role="button"
                      className="accordion-toggle"
                      aria-expanded="false"
                    >
                      <button type="button" className="btn btn-link">
                        {" "}
                        Premium SportsBook{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="panel-collapse collapse"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="panel-body card-block card-body">
                    <p>Content 2</p>
                  </div>
                </div>
              </div>
            </accordion-group>
          </accordion>
        </div>
      </div>
    </app-bet-list>
  );
};

export default OpenBets;
