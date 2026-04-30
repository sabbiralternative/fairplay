import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TabOne = ({ categories, selectedCategory }) => {
  const navigate = useNavigate();
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedCategory, categories]);
  return (
    <ul
      role="tablist"
      className="nav nav-nav-pills my-1 justify-content-center"
      aria-label="Tabs"
    >
      <li
        onClick={() => {
          navigate(`/casino?product=All&category=All`);
        }}
        ref={selectedCategory === "All" ? activeRef : null}
        className="active nav-item ng-star-inserted"
      >
        <a
          role="tab"
          className={`nav-link ${selectedCategory === "All" ? "active" : ""}`}
          aria-controls
          aria-selected="true"
          id
        >
          <span />
          <span id="parentTab-0" className="ng-star-inserted">
            {" "}
            all{" "}
          </span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            onClick={() => {
              navigate(`/casino?product=${category}&category=All`);
            }}
            key={category}
            ref={category === selectedCategory ? activeRef : null}
            className="nav-item ng-star-inserted"
          >
            <a
              role="tab"
              className={`nav-link ${selectedCategory === category ? "active" : ""}`}
              aria-controls
              aria-selected="false"
              id
            >
              <span />
              <span id="parentTab-1" className="ng-star-inserted">
                {" "}
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TabOne;
