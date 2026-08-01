import { useEffect, useState } from "react";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import { Settings } from "../../api";
import OpenBets from "../../components/modules/EventDetails/OpenBets";
import Score from "../../components/modules/EventDetails/Score";
import TennisScore from "../../components/modules/EventDetails/TennisScore";
import FootballScore from "../../components/modules/EventDetails/FootballScore";
import Premium from "../../components/modules/EventDetails/Premium";
import ToggleButtons from "../../components/modules/EventDetails/ToggleButtons";

const EventDetails = () => {
  const [fancyPremiumTab, setFancyPremiumTab] = useState("");
  const navigate = useNavigate();
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const [tab, setTab] = useState("market");
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );
  const fancy = data?.result?.filter(
    (normal) =>
      normal.btype === "FANCY" &&
      normal.tabGroupName === "Normal" &&
      normal?.visible == true,
  );
  useEffect(() => {
    const handleGetVideo = async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: Settings.casino_currency,
      };
      await sportsVideo(payload).unwrap();
    };
    handleGetVideo();
  }, []);
  return (
    <main id="main" className="main">
      <div className="tab-content-main">
        <div>
          <div id="pills-tabContent" className="tab-content">
            <div id="Inplay" className="tab-pane fade show active">
              <div className="tab-content-innter">
                <div className="breadcrumb-section">
                  <a onClick={() => navigate(-1)} className="back__btn">
                    <i className="mdi mdi-chevron-left" />
                  </a>
                  <span className="event___name">
                    {data?.result?.[0]?.eventName}
                  </span>
                  <span className="event-date">
                    <span> {data?.result?.[0]?.openDate} </span>
                  </span>
                </div>
                <div className="inplay-main detail-page">
                  <div
                    id="collapseMobileTv"
                    aria-hidden="true"
                    className="collapse"
                    style={{ display: "none" }}
                  >
                    <div className="row d-block d-sm-none">
                      <div>
                        <div className="ratio ratio-16x9">
                          <iframe allowFullScreen src />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div
                        type="pills nav nav-pills detail__tabs mb-1"
                        style={{ position: "relative" }}
                        className="tab-container"
                      >
                        <ul
                          role="tablist"
                          className="nav nav-pills detail__tabs mb-1"
                          aria-label="Tabs"
                        >
                          <li className="active nav-item">
                            <a
                              onClick={() => setTab("market")}
                              role="tab"
                              className={`nav-link  ${tab === "market" ? "active" : ""}`}
                              aria-controls
                              aria-selected="true"
                              id
                            >
                              <span />
                              <button className="nav-link">
                                <i>
                                  <img
                                    src="/assets/img/market-chart.svg"
                                    className="img-fluid"
                                  />
                                </i>{" "}
                                Markets{" "}
                              </button>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              onClick={() => setTab("open-bets")}
                              role="tab"
                              className={`nav-link  ${tab === "open-bets" ? "active" : ""}`}
                              aria-controls
                              aria-selected="false"
                              id
                            >
                              <span />
                              <button className="nav-link d-block d-md-none">
                                <i>
                                  <img
                                    src="/assets/img/open-bet.svg"
                                    className="img-fluid"
                                  />
                                </i>{" "}
                                openbet{" "}
                              </button>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <tab
                            role="tabpanel"
                            aria-labelledby
                            className="tab-pane active"
                          >
                            <div
                              id="collapseBasicScore"
                              aria-hidden="false"
                              className="collapse in show"
                              style={{ display: "block" }}
                            >
                              <div className="sr-widget-1" />
                            </div>
                            {tab === "market" && (
                              <div>
                                {eventTypeId == 2 &&
                                  data?.score &&
                                  Object.keys(data?.score).length > 1 && (
                                    <TennisScore
                                      eventTypeId={eventTypeId}
                                      score={data?.score}
                                    />
                                  )}
                                {eventTypeId == 1 && data?.score && (
                                  <FootballScore score={data?.score} />
                                )}

                                {data?.score?.tracker && (
                                  <div
                                    style={{
                                      width: "100%",
                                      height: "125px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {" "}
                                    <iframe
                                      style={{
                                        width: "100%",
                                      }}
                                      // className="premium-iframe"
                                      src={data?.score?.tracker}
                                    ></iframe>
                                  </div>
                                )}
                                {iframe?.result?.url &&
                                  data?.score?.hasVideo && (
                                    <div
                                      style={{
                                        marginTop: "10px",
                                        width: "100%",

                                        overflow: "hidden",
                                        padding: "0px 8px",
                                      }}
                                      className="embed-responsive embed-responsive-16by9 ng-star-inserted"
                                    >
                                      <iframe
                                        id="tvStr"
                                        className="embed-responsive-item w-100"
                                        src={iframe?.result?.url}
                                      ></iframe>
                                    </div>
                                  )}
                                {eventTypeId == 4 && data?.iscore && (
                                  <Score iscore={data?.iscore} />
                                )}
                                {matchOdds?.length > 0 && (
                                  <MatchOdds data={matchOdds} />
                                )}

                                <div className="empty-div">
                                  {bookmaker?.length > 0 && (
                                    <Bookmaker data={bookmaker} />
                                  )}
                                </div>
                                {data && (
                                  <ToggleButtons
                                    data={data}
                                    fancy={fancy}
                                    setFancyPremiumTab={setFancyPremiumTab}
                                    fancyPremiumTab={fancyPremiumTab}
                                  />
                                )}
                                {data?.result?.length > 0 &&
                                  fancyPremiumTab === "fancy" && (
                                    <Fancy data={data?.result} />
                                  )}
                                {data?.premium &&
                                  data?.premium?.eventId &&
                                  fancyPremiumTab === "premium" && (
                                    <Premium premium={data?.premium} />
                                  )}
                                {tiedMatch?.length > 0 && (
                                  <MatchOdds data={tiedMatch} />
                                )}
                              </div>
                            )}
                            {tab === "open-bets" && (
                              <OpenBets sportsBook={data?.sportsbook?.Result} />
                            )}
                          </tab>
                        </div>
                      </div>
                    </div>
                    <RightSidebar sportsBook={data?.sportsbook?.Result} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetails;
