import { useNavigate } from "react-router-dom";
import { useIndexQuery } from "../../../hooks";
import "./styles.css";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function GamePanel({ title, accent, games, handleNavigate }) {
  return (
    <div className="game-panel">
      <div className="panel-header">
        <h2>
          Live <span className={`accent-${accent}`}>{title}</span>
        </h2>
        {/* <a className="more-link">More ...</a> */}
      </div>
      <div className="game-grid">
        {games.map((g, i) => (
          <button
            key={i}
            className={`game-pill pill-${i % 2 === 0 ? "purple" : "orange"}`}
            onClick={() => handleNavigate(g)}
          >
            {g.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GameLobby() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { data } = useIndexQuery({ type: "fairplay_homepage" });

  const live_cards = data?.live_cards || [];
  const live_casino = data?.live_casino || [];
  const image = data?.image || {};

  const handleNavigate = (game) => {
    if (token) {
      navigate(
        `/casino/${game?.name?.replace(/ /g, "") || "game"}/${game?.game_id}`,
      );
    } else {
      toast.error("Please login to play the game");
    }
  };

  return (
    <div className="lobby-wrapper">
      <div className="panels-row">
        <GamePanel
          title="Cards"
          accent="orange"
          games={live_cards}
          handleNavigate={handleNavigate}
        />
        <GamePanel
          title="Casino"
          accent="orange"
          games={live_casino}
          handleNavigate={handleNavigate}
        />
      </div>

      <div onClick={() => handleNavigate(image)} className="promo-banner">
        <img
          style={{ width: "100%", height: "100%" }}
          src={image?.link}
          alt=""
        />
      </div>
    </div>
  );
}
