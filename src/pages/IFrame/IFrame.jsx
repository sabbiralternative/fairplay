import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API, Settings } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";
import toast from "react-hot-toast";
import { Loader } from "rsuite";

const IFrame = () => {
  const [loading, setLoading] = useState(false);
  const [iFrame, setIFrame] = useState("");
  const { gameId } = useParams();
  const { token } = useSelector((state) => state.auth);

  /* get iframe url */
  useEffect(() => {
    window.scrollTo(0, 0);
    const getCasinoVideo = async () => {
      setLoading(true);
      const payload = {
        gameId: gameId,
        isHome: false,
        mobileOnly: true,
        casinoCurrency: Settings.casino_currency,
      };

      try {
        const res = await AxiosSecure.post(API.liveCasinoIFrame, payload);
        const data = res?.data;

        setIFrame(data?.gameUrl);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error?.message);
      }
    };
    getCasinoVideo();
  }, [gameId, token]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Loader size="md" />
      </div>
    );
  }

  return (
    <main
      id="main"
      className="main"
      style={{ marginLeft: "0px", marginTop: "55px" }}
    >
      <div className="tab-content-main">
        <div>
          <div id="casino-frm" className="casino__details">
            <iframe
              scrolling="yes"
              allowFullScreen="true"
              title="game"
              id="casino-link"
              src={iFrame}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IFrame;
