import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const NewCasinoThumbnails = ({ highlight_casino }) => {
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
    <div className="row newcasino_thumbs">
      {highlight_casino?.map((item) => {
        return (
          <div key={item?.id} className="col-md-3 col-6">
            <a
              onClick={() => handleNavigateToIFrame(item)}
              className="position-relative d-block popularDiv"
            >
              <img className="img-fluid" src={item?.url_thumb} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NewCasinoThumbnails;
