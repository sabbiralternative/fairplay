import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useSBCashOut from "../../../hooks/sb_cashout";
import toast from "react-hot-toast";

const OpenBets = ({ sportsBook }) => {
  const { mutate: cashOut } = useSBCashOut();
  const { eventId } = useParams();
  const { data: currentBets, refetch } = useCurrentBets(eventId);

  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials",
    );

  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId,
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetch();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };
  return (
    <div>
      <div className="openbet__designing">
        <div id="matchedBets" className="accordion">
          <accordion
            role="tablist"
            className="panel-group"
            style={{ display: "block" }}
            aria-multiselectable="true"
          >
            <div className="panel panel-open" style={{ display: "block" }}>
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
                  <div
                    className="panel-body card-block card-body"
                    style={{ height: "auto" }}
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: "60%" }}>Title</th>
                          <th className="text-right">Market Name</th>
                          <th className="text-center">Place Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(currentBets?.length === 0 || !currentBets) && (
                          <tr>
                            <td
                              colSpan={3}
                              className="text-center"
                              style={{ color: "#fff" }}
                            >
                              No records Found
                            </td>
                          </tr>
                        )}
                        {currentBets?.length > 0 &&
                          currentBets?.map((bet) => {
                            let column;
                            sports?.forEach((group) => {
                              group?.Items?.forEach((data) => {
                                if (bet?.marketId == data?.Id) {
                                  column = data?.Items?.find(
                                    (col) => col?.Id === bet?.selectionId,
                                  );
                                }
                              });
                            });

                            const price = (
                              0.92 *
                                bet?.amount *
                                (bet?.userRate / column?.Price) -
                              bet?.amount
                            )?.toFixed(2);
                            return (
                              <tr key={bet?.betId}>
                                <td
                                  colSpan={3}
                                  className="text-center"
                                  style={{ color: "#fff" }}
                                >
                                  {bet?.title}
                                  {bet?.cashout && column && (
                                    <button
                                      onClick={() =>
                                        handleCashOut({
                                          betHistory: bet,
                                          sportsBook,
                                          price: column?.Price,
                                          cashout_value: price,
                                        })
                                      }
                                      type="button"
                                      className="btn_box "
                                      style={{
                                        width: "100px",
                                        backgroundColor: "#f3f3f3ff",
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: `pointer`,
                                        justifyContent: "center",
                                        gap: "0px 2px",
                                        borderRadius: "2px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "black",
                                        }}
                                      >
                                        Cashout
                                      </span>
                                      {price && (
                                        <span
                                          style={{
                                            color: "black",
                                            fontSize: "10px",
                                          }}
                                        >
                                          :
                                        </span>
                                      )}

                                      {price && (
                                        <span
                                          style={{
                                            color: `${price > 0 ? "green" : "red"}`,
                                            fontSize: "10px",
                                          }}
                                        >
                                          {price}
                                        </span>
                                      )}
                                    </button>
                                  )}
                                </td>
                                <td
                                  colSpan={3}
                                  className="text-center"
                                  style={{ color: "#fff" }}
                                >
                                  {bet?.marketName}
                                </td>
                                <td
                                  colSpan={3}
                                  className="text-center"
                                  style={{ color: "#fff" }}
                                >
                                  <span>{bet?.placeDate}</span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </accordion>
        </div>
      </div>
    </div>
  );
};

export default OpenBets;
