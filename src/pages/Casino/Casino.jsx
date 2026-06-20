import { useSelector } from "react-redux";
import { useIndexQuery } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import TabOne from "../../components/modules/Casino/TabOne";
import TabTwo from "../../components/modules/Casino/TabTwo";
import CasinoThumbnails from "../../components/modules/Casino/CasinoThumbnails";

const Casino = () => {
  const { token } = useSelector((state) => state.auth);
  const { data } = useIndexQuery({
    type: "99_all_casino",
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get("product");
  const category = params.get("category");

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const allTables = data?.data?.allTables;
  // const tables = data?.data?.tables?.[100000];

  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };

  // const allGames =
  //   allTables &&
  //   Object.values(allTables).flatMap((provider) =>
  //     Object.values(provider).flat(),
  //   );
  const allGames = useMemo(() => {
    if (!allTables) return [];
    return Object.values(allTables).flatMap((provider) =>
      Object.values(provider).flat(),
    );
  }, [allTables]);
  // const tablesGames =
  //   tables &&
  //   Object.values(tables).flatMap((provider) => Object.values(provider).flat());

  const categories =
    allGames && Array.from(new Set(allGames?.map((game) => game?.product)));

  // const a =
  //   allGames && allGames?.find((game) => game.product === "BIKINI GAMES");

  const subCategories = useMemo(() => {
    if (allGames && categories && product === "All") {
      return Array.from(new Set(allGames?.map((game) => game?.category)));
    }
    if (allGames && categories && product !== "All") {
      const allCategory = allGames?.filter((game) => game?.product === product);
      return Array.from(new Set(allCategory?.map((game) => game?.category)));
    }
  }, [categories, allGames, product]);

  const filteredData = useMemo(() => {
    if (allGames && categories && subCategories) {
      if (search) {
        return allGames?.filter((game) => game?.category?.includes(search));
      }
      if (!search) {
        if (product === "All" && category === "All") {
          return allGames;
        }
        if (product === "All" && category !== "All") {
          return allGames?.filter((game) => game?.category === category);
        }
        if (product !== "All" && category === "All") {
          return allGames?.filter((game) => game?.product === product);
        }
        if (product !== "All" && category !== "All") {
          return allGames?.filter(
            (game) => game?.product === product && game?.category === category,
          );
        }
      }
    }
  }, [allGames, categories, category, subCategories, product, search]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setSearch("");
  }, [location.search]);

  return (
    <main id="main" className="main">
      <div className="tab-content-main">
        <div className="ng-star-inserted">
          <div id="pills-tabContent" className="tab-content">
            <div
              id="Inplay"
              role="tabpanel"
              aria-labelledby="Inplay-tab"
              tabIndex={0}
              className="tab-pane fade show active"
            >
              <div className="tab-content-innter">
                <div className="page-content ng-star-inserted">
                  <div className="casino-new-title">
                    <img src="assets/img/icon/99998.png" /> casino{" "}
                    <div className="casino-searchbar">
                      <div className="input-group">
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          placeholder="Search game"
                          className="ng-untouched ng-pristine ng-valid"
                        />
                        <span className="input-group-text">
                          <i className="bi bi-search" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="casino-custom-design">
                    <div className="casino__new__tab container">
                      <div
                        type="nav-pills my-1 justify-content-center"
                        className="tab-container"
                      >
                        <TabOne
                          categories={categories}
                          selectedCategory={product}
                        />
                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            aria-labelledby
                            className="tab-pane active ng-star-inserted"
                          >
                            <div className="casino__new__tab container">
                              <div
                                type="nav-pills my-2 justify-content-center"
                                className="tab-container"
                              >
                                <TabTwo
                                  product={product}
                                  selectedSubCategory={category}
                                  subCategories={subCategories}
                                />
                                <div className="tab-content">
                                  <CasinoThumbnails
                                    handleNavigateToIFrame={
                                      handleNavigateToIFrame
                                    }
                                    filteredData={filteredData}
                                  />
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
    </main>
  );
};

export default Casino;
