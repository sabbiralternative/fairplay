import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TabTwo = ({ subCategories, product, selectedSubCategory }) => {
  const activeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedSubCategory, subCategories, product]);
  return (
    <ul
      role="tablist"
      className="nav nav-nav-pills my-2 justify-content-center"
      aria-label="Tabs"
    >
      <li
        ref={selectedSubCategory === "All" ? activeRef : null}
        onClick={() => {
          navigate(`/casino?product=${product}&category=All`);
        }}
        className="active nav-item ng-star-inserted"
      >
        <a
          role="tab"
          className={`nav-link ${
            selectedSubCategory === "All"
              ? "active"
              : product === "All"
                ? "active"
                : ""
          }`}
          aria-controls
          aria-selected="true"
          id
        >
          <span />
          <span id="childTab-0-0" className="ng-star-inserted">
            <img
              style={{ height: "24px" }}
              className="img-fluid"
              src={`/icon/all.svg`}
            />{" "}
            all
          </span>
        </a>
      </li>
      {subCategories?.map((category) => {
        return (
          <li
            key={category}
            ref={category === selectedSubCategory ? activeRef : null}
            onClick={() => {
              navigate(`/casino?product=${product}&category=${category}`);
            }}
            className="nav-item ng-star-inserted"
          >
            <a
              role="tab"
              className={`nav-link ${
                selectedSubCategory === category ? "active" : ""
              }`}
              aria-controls
              aria-selected="false"
              id
            >
              <span />
              <span id="childTab-0-1" className="ng-star-inserted">
                <img
                  style={{ height: "24px" }}
                  className="img-fluid"
                  src={`/icon/${category?.split(" ").join("").toLowerCase()}.svg`}
                  onError={(e) => {
                    if (e.target.src.endsWith(".svg")) {
                      // Try webp only once after svg fails
                      e.target.src = `/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.webp`;
                    } else if (e.target.src.endsWith(".webp")) {
                      // Try webp only once after svg fails
                      e.target.src = `/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.png`;
                    } else {
                      // If webp fails, do nothing (leave broken img)
                      // e.target.onerror = null;
                      e.target.src = `/icon/all.svg`;
                    }
                  }}
                />{" "}
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TabTwo;
