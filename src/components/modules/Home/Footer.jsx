import { Settings } from "../../../api";
import "./footer.css";

const gameLinks = [
  "Live Card",
  "Cricket Betting",
  "IPL Betting",
  "Football Betting",
  "Tennis Betting",
  "Live Casino Betting",
  `${Settings.site_name} Online Betting App`,
];

const companyLinks = [
  "About Us",
  "Rules & Regulation",
  "Privacy Policy",
  "Responsible Gambling",
  "Terms And Conditions",
  "Market",
];

const resourceLinks = [`${Settings.site_name} News`, "Sportsbook Betting"];

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: "10px 15px" }}>
      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-text">
              {/* <span className="footer__logo-fair">{Settings.site_name}</span> */}
              <span className="footer__logo-play">{Settings.site_name}</span>
            </span>
          </a>
          <p className="footer__tagline">
            © Established in 2026, {Settings.site_name} is the most trusted
            betting exchange and leading online casino.
          </p>
        </div>

        {/* Game Column */}
        <nav className="sm-d-none">
          <h4 className="footer__col-title">Game</h4>
          <ul style={{ paddingLeft: "0px" }} className="footer__links">
            {gameLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company Column */}
        <nav className="sm-d-none">
          <h4 className="footer__col-title">Company</h4>
          <ul style={{ paddingLeft: "0px" }} className="footer__links">
            {companyLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="d-flex d-md-none"
          style={{ gap: "10px", justifyContent: "space-between" }}
        >
          {" "}
          {/* Game Column */}
          <nav>
            <h4 className="footer__col-title">Game</h4>
            <ul style={{ paddingLeft: "0px" }} className="footer__links">
              {gameLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Company Column */}
          <nav>
            <h4 className="footer__col-title">Company</h4>
            <ul style={{ paddingLeft: "0px" }} className="footer__links">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Resources Column */}
        <nav>
          <h4 className="footer__col-title">Resources</h4>
          <ul style={{ paddingLeft: "0px" }} className="footer__links">
            {resourceLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 {Settings.site_name} . All Rights Reserved.
        </p>
        {/* Telegram paper-plane icon */}
        {/* <a
          href="https://t.me/"
          className="footer__telegram"
          aria-label="Join us on Telegram"
          target="_blank"
          rel="noreferrer"
        >
        
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </a> */}
      </div>
    </footer>
  );
}
