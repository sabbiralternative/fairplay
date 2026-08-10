import { useNavigate, useLocation } from "react-router-dom";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useEffect, useState } from "react";
import HorseGreyhound from "./HorseGreyhound";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import { useSelector } from "react-redux";

const EventTableSection = () => {
  const [liveVirtual, setLiveVirtual] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { valueByLanguage } = useLanguage();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const { data } = useGroupQuery(
    { sportsType: Number(eventTypeId) || 0 },
    { pollingInterval: 10000 },
  );
  const eventName = {
    4: languageValue(valueByLanguage, LanguageKey.CRICKET),
    2: languageValue(valueByLanguage, LanguageKey.TENNIS),
    1: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
    7: languageValue(valueByLanguage, LanguageKey.HORSE),
    4339: languageValue(valueByLanguage, LanguageKey.GREYHOUND),
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => {
              return item.visible === true;
            })
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

  const onChangeLiveVirtual = (type, eventTypeId, isChecked) => {
    const obj = { type, eventTypeId, isChecked };

    setLiveVirtual((prev) => {
      const index = prev.findIndex(
        (item) => item.eventTypeId === eventTypeId && item.type === type,
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          isChecked,
        };
        return updated;
      }

      return [...prev, obj];
    });
  };

  return (
    <div>
      <div className="events-table-section">
        <div>
          <div
            data-v-3c6bc75a=""
            className="inply-heading-with-logo sports-icons-head upcoming-sports-title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 0px",
            }}
          >
            <li
              data-v-3c6bc75a=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                color: "#fff",
                padding: "5px 5px",
              }}
            >
              <img
                style={{ height: "20px", width: "20px" }}
                data-v-3c6bc75a=""
                loading="lazy"
                src="/assets/inplayico.40798d4-AajJC3tM.webp"
                alt="inplay"
                title="inplay"
              />{" "}
              <span
                style={{ textTransform: "uppercase", fontSize: "13px" }}
                data-v-3c6bc75a=""
              >
                Inplay
              </span>
            </li>
            {token && (
              <div data-v-3c6bc75a="" className="inplay_wallat_btn">
                <button
                  onClick={() => navigate("/deposit")}
                  data-v-3c6bc75a=""
                  className="btn deposit_btn_inplay green_btn"
                >
                  Deposit
                </button>
                <button
                  onClick={() => navigate("/withdraw")}
                  data-v-3c6bc75a=""
                  className="btn deposit_btn_inplay red_btn"
                >
                  Withdraw
                </button>
              </div>
            )}
          </div>
          <div>
            {(eventTypeId == 7 || eventTypeId == 4339) && data?.length > 0 && (
              <HorseGreyhound data={data} eventTypeId={eventTypeId} />
            )}
            {(eventTypeId !== 7 || eventTypeId != 4339) && (
              <div>
                {data &&
                  categories?.map((category) => {
                    const categorySettings = liveVirtual.filter(
                      (item) => item.eventTypeId === category,
                    );

                    const live =
                      categorySettings.find((item) => item.type === "live")
                        ?.isChecked ?? false;

                    const virtual =
                      categorySettings.find((item) => item.type === "virtual")
                        ?.isChecked ?? false;

                    const groupedData = Object.entries(data)
                      .filter(([, value]) => {
                        if (value.eventTypeId !== category) return false;
                        if (!value.visible) return false;
                        if (value.inPlay !== 1) return false;
                        const isSRL =
                          value.eventName?.toLowerCase().includes("srl") ??
                          false;

                        // both checked OR both unchecked => show all
                        if (live === virtual) return true;

                        // live only
                        if (live) return !isSRL;

                        // virtual only
                        return isSRL;
                      })
                      .sort(([, a], [, b]) => b.inPlay - a.inPlay);

                    return (
                      <div key={category} className="events-col gradient mb-3">
                        <div className="bet-table-header">
                          <div className="row d-flex align-items-center">
                            <div className=" col-12">
                              <div className="game-title-box">
                                <img
                                  className="game-icon-img"
                                  src={`/assets/img/icon/${category}.png`}
                                />
                                {eventName[category]}
                                <ul className="live_virtual">
                                  <li>
                                    <input
                                      onChange={(e) =>
                                        onChangeLiveVirtual(
                                          "live",
                                          category,
                                          e.target?.checked,
                                        )
                                      }
                                      type="checkbox"
                                      defaultValue="Order one"
                                      id={`checkboxOnein_play-inplay-4-${category}`}
                                      className="ng-untouched ng-pristine ng-valid"
                                    />
                                    <label
                                      htmlFor={`checkboxOnein_play-inplay-4-${category}`}
                                    >
                                      LIVE
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      onChange={(e) =>
                                        onChangeLiveVirtual(
                                          "virtual",
                                          category,
                                          e.target?.checked,
                                        )
                                      }
                                      type="checkbox"
                                      defaultValue="Order Two"
                                      id={`checkboxTwoin_play--inplay--4-${category}`}
                                      className="ng-untouched ng-pristine ng-valid"
                                    />
                                    <label
                                      htmlFor={`checkboxTwoin_play--inplay--4-${category}`}
                                    >
                                      VIRTUAL
                                    </label>
                                  </li>
                                  {/* <li>
                                    <input
                                      type="checkbox"
                                      defaultValue="Order Two"
                                      id="checkboxThreein_play--inplay--4"
                                      className="ng-untouched ng-pristine ng-valid"
                                    />
                                    <label htmlFor="checkboxThreein_play--inplay--4">
                                      PREMIUM
                                    </label>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                            {/* <div className="col-md-4 text-center ms-auto game-title-box-right d-none d-lg-block">
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
                          </div> */}
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
                                  <div className="d-flex">
                                    {" "}
                                    <div className="col-md-6 col-6 d-flex">
                                      {/* <span className="multi-pin">
                                  <a className="add-pin">
                                    <i className="mdi mdi-star-outline" />
                                  </a>
                                </span> */}
                                      <a>
                                        <div className="d-flex flex-column ps-2">
                                          <span className="manage-overflow match-name fw-semibold">
                                            {value?.eventName}
                                          </span>
                                          {/* <span className="manage-overflow match-name fw-semibold leaguename">
                                          {value?.player2}
                                        </span> */}
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-md-6 col-6 d-flex justify-content-end">
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
                                  </div>
                                  <div className="col-md-12 col-12 mobile_odds_section">
                                    <div className="row g-0  d-flex">
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

                                    {/* <div className="row d-block d-md-none odds_xs_scroll">
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
                                  </div> */}
                                  </div>
                                  <div className="d-flex">
                                    <div className="calendar-space col-6 ">
                                      {value?.date}
                                    </div>
                                    {/* <div className="col-6 minmax_value d-flex justify-content-end">
                                    <span className="match-name">
                                      <span className="light-text">
                                        Min : {value?.minLiabilityPerBet}
                                      </span>
                                      <img
                                        loading="lazy"
                                        src="/assets/min-max-icon-BIsl0oNE.svg"
                                        alt="min-max-icon"
                                      />
                                      <span className="light-text">
                                        Max : 5000
                                      </span>
                                    </span>
                                  </div> */}
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
