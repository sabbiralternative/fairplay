import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const HighLight = ({ highlight_casino }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) {
      dispatch(setShowLoginModal(true));
    } else {
      navigate(
        `/casino?product=${casino?.product}&category=${casino?.category}`,
      );
    }
  };
  return (
    <div className="row">
      <div className="h-divider">
        <div className="shadow" />
      </div>
      <div className="col-12 pa-0 ma-0 col">
        <div className="inplay-live-card">
          <div className="circle" />
          <div className="diamond" />
          <div className="livecard">
            <div>
              <h3 className="live-text pa-1">Highlight Games</h3>
            </div>
          </div>
          <div className="diamond" />
          <div className="circle" />
        </div>
      </div>
      <div className="imgsec">
        {highlight_casino?.map((item) => {
          return (
            <a
              onClick={() => handleNavigateToIFrame(item)}
              key={item?.id}
              className="popularDiv"
            >
              <img className="img-fluid" src={item?.url_thumb} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HighLight;
