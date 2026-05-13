import { useNavigate, useLocation } from "react-router-dom";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useEffect, useState } from "react";
import HorseGreyhound from "./HorseGreyhound";

const EventTableSection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const { data } = useGroupQuery(
    { sportsType: Number(eventTypeId) || 0 },
    { pollingInterval: 10000 },
  );
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  const navigateGameList = (eventTypeId, keys) => {
    navigate(`/event-details/${eventTypeId}/${keys}`);
  };

  return (
    <div>
      <div className="events-table-section">
        <div>
          <div>
            {(eventTypeId == 7 || eventTypeId == 4339) && data?.length > 0 && (
              <HorseGreyhound data={data} eventTypeId={eventTypeId} />
            )}
            {(eventTypeId !== 7 || eventTypeId != 4339) && (
              <div>
                {categories?.map((category) => {
                  const groupedData = Object.entries(data)
                    .filter(
                      ([, value]) =>
                        value.visible === true &&
                        value.eventTypeId === category,
                    )
                    .sort(([, a], [, b]) => {
                      return b.inPlay - a.inPlay;
                    });

                  return (
                    <div key={category} className="events-col gradient mb-3">
                      <div className="bet-table-header">
                        <div className="row d-flex align-items-center">
                          <div className="col-md-8 col-12">
                            <div className="game-title-box">
                              <img
                                className="game-icon-img"
                                src={`/assets/img/icon/${category}.png`}
                              />
                              {eventName[category]}
                              <ul className="live_virtual">
                                <li>
                                  <input
                                    type="checkbox"
                                    defaultValue="Order one"
                                    id="checkboxOnein_play-inplay-4"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <label htmlFor="checkboxOnein_play-inplay-4">
                                    LIVE
                                  </label>
                                </li>
                                <li>
                                  <input
                                    type="checkbox"
                                    defaultValue="Order Two"
                                    id="checkboxTwoin_play--inplay--4"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <label htmlFor="checkboxTwoin_play--inplay--4">
                                    VIRTUAL
                                  </label>
                                </li>
                                <li>
                                  <input
                                    type="checkbox"
                                    defaultValue="Order Two"
                                    id="checkboxThreein_play--inplay--4"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <label htmlFor="checkboxThreein_play--inplay--4">
                                    PREMIUM
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-4 text-center ms-auto game-title-box-right d-none d-lg-block">
                            <div className="row no-gutters">
                              <div className="text-center col-4 text-white caption">
                                1
                              </div>
                              <div className="text-center col-4 text-white caption">
                                X
                              </div>
                              <div className="text-center col-4 text-white caption">
                                2
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bet-table-body">
                        {groupedData.map(([key, value]) => {
                          return (
                            <div
                              onClick={() =>
                                navigateGameList(value?.eventTypeId, key)
                              }
                              key={key}
                              className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay"
                            >
                              <div className="row d-flex align-items-center">
                                <div className="col-md-4 col-4 d-flex">
                                  {/* <span className="multi-pin">
                                  <a className="add-pin">
                                    <i className="mdi mdi-star-outline" />
                                  </a>
                                </span> */}
                                  <a>
                                    <div className="d-flex flex-column ps-2">
                                      <div className="calendar-space">
                                        {value?.date}
                                      </div>

                                      <span className="manage-overflow match-name fw-semibold">
                                        {value?.player1}
                                      </span>
                                      <span className="manage-overflow match-name fw-semibold leaguename">
                                        {value?.player2}
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div className="col-md-4 col-2">
                                  <div className="itbfc">
                                    {value?.inPlay === 1 && (
                                      <span title="INPLAY">
                                        <i className="green-text mdi mdi-play" />
                                      </span>
                                    )}

                                    {value?.isTv === 1 && (
                                      <span title="TV">
                                        <i className="green-text mdi mdi-television" />
                                      </span>
                                    )}

                                    {value.isBookmaker === 1 && (
                                      <span title="BM">BM</span>
                                    )}

                                    {value?.isFancy === 1 && (
                                      <span title="F">F</span>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-4 col-6 mobile_odds_section">
                                  <div className="row g-0 d-none d-md-flex">
                                    <div className="col-md-4 col-4">
                                      <div className="btn-block">
                                        <div className="back">
                                          <div className="odd-button__price">
                                            {
                                              value?.[0]?.ex
                                                ?.availableToBack?.[0]?.price
                                            }
                                          </div>
                                          <div className="odd-button__volume">
                                            {
                                              value?.[0]?.ex
                                                ?.availableToBack?.[0]?.size
                                            }
                                          </div>
                                        </div>
                                        <div className="lay">
                                          <div className="odd-button__price">
                                            {
                                              value?.[0]?.ex
                                                ?.availableToLay?.[0]?.price
                                            }
                                          </div>
                                          <div className="odd-button__volume">
                                            {
                                              value?.[0]?.ex
                                                ?.availableToLay?.[0]?.size
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                      <div className="btn-block">
                                        <div className="back">
                                          <div className="odd-button__price">
                                            {
                                              value?.[2]?.ex
                                                ?.availableToBack?.[0]?.price
                                            }
                                          </div>
                                          <div className="odd-button__volume">
                                            {
                                              value?.[2]?.ex
                                                ?.availableToBack?.[0]?.size
                                            }
                                          </div>
                                        </div>
                                        <div className="lay">
                                          <div className="odd-button__price">
                                            {
                                              value?.[2]?.ex
                                                ?.availableToLay?.[0]?.price
                                            }
                                          </div>
                                          <div className="odd-button__volume">
                                            {
                                              value?.[2]?.ex
                                                ?.availableToLay?.[0]?.size
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                      <div className="btn-block">
                                        <div className="back">
                                          <div className="odd-button__price">
                                            {
                                              value?.[1]?.ex
                                                ?.availableToBack?.[0]?.price
                                            }
                                          </div>
                                          <div className="odd-button__volume">
                                            {
                                              value?.[1]?.ex
                                                ?.availableToBack?.[0]?.size
                                            }
                                          </div>
                                        </div>
                                        <div className="last lay">
                                          <div className="odd-button__price">
                                            {
                                              value?.[1]?.ex
                                                ?.availableToLay?.[0]?.price
                                            }
                                          </div>
                                          <div className="odd-button__volume">
                                            {
                                              value?.[1]?.ex
                                                ?.availableToLay?.[0]?.size
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row d-block d-md-none odds_xs_scroll">
                                    <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                                      <div className="back">
                                        <div className="odd-button__price">
                                          {
                                            value?.[0]?.ex?.availableToBack?.[0]
                                              ?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {
                                            value?.[0]?.ex?.availableToBack?.[0]
                                              ?.size
                                          }
                                        </div>
                                      </div>
                                      <div className="back">
                                        <div className="odd-button__price">
                                          {" "}
                                          {
                                            value?.[2]?.ex?.availableToBack?.[0]
                                              ?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {
                                            value?.[2]?.ex?.availableToBack?.[0]
                                              ?.size
                                          }
                                        </div>
                                      </div>
                                      <div className="back">
                                        <div className="odd-button__price">
                                          {
                                            value?.[1]?.ex?.availableToBack?.[0]
                                              ?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {
                                            value?.[1]?.ex?.availableToBack?.[0]
                                              ?.size
                                          }
                                        </div>
                                      </div>
                                      <div className="lay">
                                        <div className="odd-button__price">
                                          {
                                            value?.[0]?.ex?.availableToLay?.[0]
                                              ?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {
                                            value?.[0]?.ex?.availableToLay?.[0]
                                              ?.size
                                          }
                                        </div>
                                      </div>
                                      <div className="lay">
                                        <div className="odd-button__price">
                                          {" "}
                                          {
                                            value?.[2]?.ex?.availableToLay?.[0]
                                              ?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {
                                            value?.[2]?.ex?.availableToLay?.[0]
                                              ?.size
                                          }
                                        </div>
                                      </div>
                                      <div className="last lay">
                                        <div className="odd-button__price">
                                          {
                                            value?.[1]?.ex?.availableToLay?.[0]
                                              ?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {
                                            value?.[1]?.ex?.availableToLay?.[0]
                                              ?.size
                                          }
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTableSection;
