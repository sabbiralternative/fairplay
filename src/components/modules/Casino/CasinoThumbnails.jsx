const CasinoThumbnails = ({ filteredData, handleNavigateToIFrame }) => {
  return (
    <div
      role="tabpanel"
      aria-labelledby
      className="tab-pane active ng-star-inserted"
    >
      <div className="casino_container ng-star-inserted">
        <div className="row">
          {filteredData?.map((casino, i) => {
            return (
              <div
                onClick={() => handleNavigateToIFrame(casino)}
                key={`${casino?.id}-${casino?.category}-${casino?.product}-${i}`}
                className="col-md-3 col-4 ng-star-inserted"
              >
                <div className="casino-div">
                  <img
                    className="img-fluid  ng-lazyloaded"
                    src={casino?.url_thumb}
                    title={casino?.name}
                  />
                  <div className="overlaybutton">
                    <button className="casinoBtn">
                      <i className="fa fa-play" /> play now{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CasinoThumbnails;
