import useBannerImage from "../../../hooks/banner.hook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const { data: bannerImage } = useBannerImage();
  if (bannerImage?.banner?.length === 0) return null;

  return (
    <div className="a23_css banner-ctn">
      <div className="banner" style={{ padding: "0 10px" }}>
        <div className="s1sfm7zm">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="c1mxe6k6 horizontal">
              <div
                className="motion-container"
                draggable="false"
                style={{
                  pointerEvents: "auto",
                  width: "100%",
                  flexDirection: "row",
                  transform: "translateX(0px) translateZ(0px)",
                  userSelect: "none",
                  touchAction: "pan-y",
                }}
              >
                {bannerImage?.banner?.map((image, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div
                        className="swiper-slide"
                        style={{ marginRight: "8px" }}
                        draggable="false"
                      >
                        <a className="img-box w-1" draggable="false">
                          <img src={image} alt="" draggable="false" />
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
