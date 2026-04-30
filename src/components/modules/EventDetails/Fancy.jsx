import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import toast from "react-hot-toast";
import DesktopBetSlip from "./DesktopBetSlip";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (games?.status !== "OPEN") return;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };

      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      toast.error("Please login to place a bet.");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <Fragment>
      {fancyData?.length > 0 && (
        <div className="newtab_collect tab-container">
          <div className="tab-content">
            <div role="tabpanel" aria-labelledby className="tab-pane active">
              <div className="events-col gradient mb-3 fancy__data">
                <div
                  type="tabs fancy-nav"
                  className="Tabul-design tab-container"
                >
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane active"
                    >
                      <div className="fancy-market-tabset-body">
                        <div className="fancy-market">
                          <div className="empty-div">
                            <div className="empty-div">
                              <div className="events-col gradient mb-3 fancy__data">
                                <div className="bet-table-header">
                                  <div className="row d-flex align-items-center">
                                    <div className="col-md-5 col-6">
                                      <div className="game-title-box">
                                        {" "}
                                        Fancy
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-6 text-center ms-auto game-title-box-right">
                                      <div className="row no-gutters">
                                        <div className="text-center col-md-4 text-white caption d-none d-md-block" />
                                        <div className="text-center col-md-4 col-12 text-white caption">
                                          <button className="bl__text">
                                            no
                                          </button>
                                          <button className="bl__text">
                                            yes
                                          </button>
                                        </div>
                                        <div className="text-center col-md-4 text-white caption d-none d-md-block">
                                          <a className="info-modal">
                                            <i className="mdi mdi-information-outline" />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="bet-table-body">
                                    {fancyData?.map((game) => {
                                      const pnl = pnlBySelection?.find(
                                        (pnl) => pnl?.MarketId === game?.id,
                                      );
                                      return (
                                        <Fragment key={game?.id}>
                                          <div className="ex__div">
                                            <div className="bet-table-row bg-light pt-1 pb-1 item-odds">
                                              <div className="row d-flex align-items-center">
                                                <div className="col-md-6 col-7">
                                                  <a href="Javascript:void(0)">
                                                    <span className="match-name">
                                                      <span className="multi-pin"></span>
                                                    </span>
                                                  </a>
                                                  <a
                                                    href="javascript:void(0);"
                                                    className="add-pin"
                                                  >
                                                    <i className="mdi mdi-star-outline" />
                                                  </a>
                                                  {game?.name}
                                                  <span className="runpls"></span>
                                                </div>
                                                <div className="col-md-6 col-5">
                                                  <div className="row g-0 position-relative">
                                                    <div className="col-md-4 col-4 d-none d-md-block" />
                                                    <div className="col-md-4 col-12 position-relative">
                                                      <div className="btn-block">
                                                        <div
                                                          onClick={() =>
                                                            handleBetSlip(
                                                              "lay",
                                                              game,
                                                              game
                                                                ?.runners?.[0],
                                                              game?.runners?.[0]
                                                                ?.lay?.[0]
                                                                ?.line,
                                                              game?.runners?.[0]
                                                                ?.lay?.[0]
                                                                ?.price,
                                                            )
                                                          }
                                                          className="lay"
                                                        >
                                                          <div className="odd-button__price">
                                                            {
                                                              game?.runners?.[0]
                                                                ?.lay?.[0]?.line
                                                            }
                                                          </div>
                                                          <div className="odd-button__volume">
                                                            {
                                                              game?.runners?.[0]
                                                                ?.lay?.[0]
                                                                ?.price
                                                            }
                                                          </div>
                                                        </div>
                                                        <div
                                                          onClick={() =>
                                                            handleBetSlip(
                                                              "back",
                                                              game,
                                                              game
                                                                ?.runners?.[0],
                                                              game?.runners?.[0]
                                                                ?.back?.[0]
                                                                ?.line,
                                                              game?.runners?.[0]
                                                                ?.back?.[0]
                                                                ?.price,
                                                            )
                                                          }
                                                          className="back"
                                                        >
                                                          <div className="odd-button__price">
                                                            {
                                                              game?.runners?.[0]
                                                                ?.back?.[0]
                                                                ?.line
                                                            }
                                                          </div>
                                                          <div className="odd-button__volume">
                                                            {
                                                              game?.runners?.[0]
                                                                ?.back?.[0]
                                                                ?.price
                                                            }
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div className="col-md-4 col-4 d-none d-md-block text-center">
                                                      <span className="fancy_stakes">
                                                        Min:{" "}
                                                        {
                                                          game?.minLiabilityPerBet
                                                        }{" "}
                                                        Max:{" "}
                                                        {
                                                          game?.maxLiabilityPerBet
                                                        }
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                {game?.id === runnerId && (
                                                  <div className="mobile-view mobile__betslip-data d-block d-md-none ng-star-inserted">
                                                    {" "}
                                                    <DesktopBetSlip
                                                      currentPlaceBetEvent={
                                                        game
                                                      }
                                                    />
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </Fragment>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Fancy;
