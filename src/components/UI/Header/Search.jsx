import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const token = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });

        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* filter the search value */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  /* hide the search modal */
  const handleNavigate = (item) => {
    setSearchText("");
    setData([]);
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  return (
    <div className="search-bar sm-d-none">
      <div className="search-form d-flex align-items-center ng-untouched ng-pristine ng-valid">
        <button type="submit" title="Search">
          <i className="bi bi-search" />
        </button>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search for a Sport, Game or Team"
          className="apl-form-large -qa-search-bar ng-untouched ng-pristine ng-valid"
          aria-expanded="false"
          aria-autocomplete="list"
        />
        {data?.length > 0 && searchText?.length > 2 && (
          <div
            className="dropdown open bottom ng-tns-c51-0 dropdown-menu ng-star-inserted typeahead-container"
            style={{
              position: "absolute",
              display: "block",
              visibility: "visible",
              willChange: "transform",
              top: "0px",
              left: "0px",
              transform: "translate3d(36px, 34px, 0px)",
              height: "179.167px",
            }}
            id="ngb-typeahead-0"
            role="listbox"
          >
            {categories?.map((category) => (
              <Fragment key={category}>
                <button
                  role="option"
                  className="dropdown-item ng-tns-c51-0 ng-trigger ng-trigger-typeaheadAnimation ng-star-inserted"
                  id="ngb-typeahead-0-0"
                >
                  <span className="ng-tns-c51-0 ng-star-inserted" style={{}}>
                    {category}
                  </span>
                </button>
                {data
                  .filter((item) => item.eventType === category)
                  .map((item, i) => (
                    <button
                      onClick={() => handleNavigate(item)}
                      key={i}
                      role="option"
                      className="dropdown-item ng-tns-c51-0 ng-trigger ng-trigger-typeaheadAnimation ng-star-inserted"
                      id="ngb-typeahead-0-0"
                    >
                      <span
                        className="ng-tns-c51-0 ng-star-inserted"
                        style={{}}
                      >
                        {item?.name} {item?.openDate}
                      </span>
                    </button>
                  ))}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
