import { Settings } from "../../../api";

const DownloadAPKSection = () => {
  return (
    <section data-v-3c6bc75a className="download-app-sec" loading="lazy">
      <div data-v-3c6bc75a className="download-row-wrapper">
        <div data-v-3c6bc75a className="download">
          <img
            data-v-3c6bc75a
            loading="lazy"
            src="/assets/download-app-xGpE8edG.webp"
            alt="download"
          />
        </div>
        <div data-v-3c6bc75a className="download-fair-ply">
          <div data-v-3c6bc75a className="club-title-name">
            <span
              data-v-3c6bc75a
              className="para-two"
              style={{ color: "white" }}
            >
              DOWNLOAD THE APP
            </span>
          </div>
          <div data-v-3c6bc75a className="download-text">
            <span data-v-3c6bc75a>
              Now download the {Settings.site_name} Official app and get easier,
              quicker access to your winnings!
            </span>
            <div data-v-3c6bc75a className="down-load-btn-text">
              <a data-v-3c6bc75a href="empty.apk" download>
                Download App
              </a>
            </div>
            <p data-v-3c6bc75a className="ply-text">
              Download now outside Google Playstore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAPKSection;
