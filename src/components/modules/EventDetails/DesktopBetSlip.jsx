import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const DesktopBetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

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
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };
  console.log(placeBetValues);

  return (
    <div>
      {placeBetValues ? (
        <div className="betslip__div back-border">
          <div id="goto-1.257456606-42821394" />
          <div className="ruuner_names">
            {" "}
            {placeBetValues?.name?.join(" vs ")}
            <div> {placeBetValues?.selectedBetName} </div>
          </div>
          <div className="row mx-0 mt-2">
            <div className="col-6">
              <div className="input-group">
                <label>odds</label>
                {!placeBetValues?.isWeak && (
                  <div
                    onClick={() => {
                      handleDecreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className="input-group-text"
                  >
                    <i className="mdi mdi-minus" />
                  </div>
                )}

                <input
                  type="number"
                  onChange={(e) => {
                    dispatch(setPrice(e.target.value));
                    setIsCashOut(false);
                  }}
                  value={price}
                  placeholder="Enter Odds"
                  className="form-control ng-untouched ng-pristine ng-valid"
                />
                {!placeBetValues?.isWeak && (
                  <div
                    onClick={() => {
                      handleIncreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className="input-group-text"
                  >
                    <i className="mdi mdi-plus" />
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <input
                type="number"
                onChange={(e) => {
                  dispatch(setStake(e.target.value));
                  setIsCashOut(false);
                }}
                placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                value={stake || ""}
                className="form-control bs_stakes_i ng-untouched ng-pristine ng-valid"
              />
            </div>
          </div>
          <div className="row mx-0 stakes_btns mt-2">
            <div className="col-12">
              {parseButtonValues?.slice(0, 6)?.map((button, i) => (
                <button
                  key={i}
                  onClick={() => handleButtonValue(button?.value)}
                >
                  <b>
                    <i className="mdi mdi-plus" />
                  </b>{" "}
                  {button?.value}
                </button>
              ))}
            </div>
            <div className="col-12 quick-bet quick-bet-extra">
              <button
                onClick={() => dispatch(setStake(parseButtonValues[0]?.value))}
                className="min-stake"
              >
                Min Stake
              </button>
              <button
                onClick={() =>
                  dispatch(
                    setStake(
                      parseButtonValues?.[parseButtonValues?.length - 1]?.value,
                    ),
                  )
                }
                className="max-stake"
              >
                Max Stake
              </button>

              <button
                onClick={() => {
                  dispatch(setStake(null));
                }}
                className="clear-stake"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-6">
              <button onClick={handleCancelBet} className="bs_cancel">
                cancel
              </button>
            </div>
            <div className="col-6">
              <button onClick={handleOrderBets} type="button" className="bs_pb">
                placebet
              </button>
            </div>
          </div>
          <p className="mmm_text">
            <i className="mdi mdi-information" /> Min Bet:
            {placeBetValues?.minLiabilityPerBet} Max Bet:
            {placeBetValues?.maxLiabilityPerBet}{" "}
          </p>
          {loading && (
            <div className="ng-star-inserted">
              <div className="overlay">
                <div className="overlay__inner">
                  <div className="overlay__content">
                    <span className="spinner" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="betslip__div back-border d-none d-md-block">
          <p>Click on the odds to add selections to the betslip.</p>
        </div>
      )}
    </div>
  );
};

export default DesktopBetSlip;
