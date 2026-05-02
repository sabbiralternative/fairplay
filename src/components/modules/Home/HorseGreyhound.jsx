import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";

const HorseGreyhound = ({ data, eventTypeId }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    data?.[0]?.childs?.[0]?.countryCode,
  );

  useEffect(() => {
    if (data) {
      setSelectedCategory(data?.[0]?.childs?.[0]?.countryCode);
    }
  }, [data]);

  const findChildByCountryCode =
    selectedCategory &&
    data &&
    data?.[0]?.childs?.find((child) => child?.countryCode === selectedCategory);

  const convertToIST = (utc) => {
    return moment(utc).tz("Asia/Kolkata").format("HH:mm");
  };

  const eventName = { 7: "Horse Racing", 4339: "Greyhound Racing" };
  return (
    <div>
      <div className="events-col gradient mb-3">
        <div className="bet-table-header">
          <div className="row d-flex align-items-center">
            <div className="col-md-8 col-12">
              <div className="game-title-box">
                <img
                  className="game-icon-img"
                  src={`/assets/img/icon/${eventTypeId}.png`}
                />
                {eventName[eventTypeId]}
              </div>
            </div>
            <div className="col-md-4 col-6 text-center ms-auto game-title-box-right d-none d-lg-block">
              <div className="row no-gutters">
                <div className="text-center col-4 text-white caption" />
                <div className="text-center col-4 text-white caption" />
                <div className="text-center col-4 text-white caption" />
              </div>
            </div>
          </div>
        </div>
        <div className="bet-table-body">
          <div className="Tabul-design tab-container">
            <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
              {data?.map((item) =>
                item?.childs?.map((child) => {
                  return (
                    <li
                      key={child?.countryCode}
                      onClick={() => setSelectedCategory(child?.countryCode)}
                      className={`${
                        child?.countryCode === selectedCategory ? "active" : ""
                      } nav-item`}
                    >
                      <a
                        role="tab"
                        className={`nav-link ${
                          child?.countryCode === selectedCategory
                            ? "active"
                            : ""
                        }`}
                        aria-controls
                        aria-selected="true"
                        id
                      >
                        <span> {child?.countryCode}</span>
                      </a>
                    </li>
                  );
                }),
              )}
            </ul>
            <div className="tab-content">
              <div role="tabpanel" aria-labelledby className="tab-pane active">
                <div className="bet-table-row bg-light pt-1 pb-1 item-odds horse-table">
                  <div className="bet-table-body horse-table-body">
                    {findChildByCountryCode?.childs?.map((child) => {
                      return (
                        <div key={child?.trackName} className="horse-table-row">
                          <div className="bet-nation-name">
                            <div className="game-icon">
                              <i className="fa fa-tv icon-tv" />
                            </div>
                            <div className="bet-nation-game-name">
                              <span>{child?.trackName}</span>
                            </div>
                          </div>
                          <div className="horse-time-detail">
                            {child?.childs?.map((children) => {
                              return (
                                <Link
                                  to={`/event-details/${eventTypeId}/${children?.eventId}`}
                                  key={children?.eventId}
                                >
                                  <span>
                                    {" "}
                                    {convertToIST(children?.startTime)}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseGreyhound;
