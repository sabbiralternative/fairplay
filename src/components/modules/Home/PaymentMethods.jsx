import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const PaymentMethods = () => {
  const { getLanguage } = useLanguage();
  return (
    <section data-v-3c6bc75a className="payment-mnethod-sec" loading="lazy">
      <div data-v-3c6bc75a className="remove-padding">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          data-v-3c6bc75a
          className="cmn-head-3"
        >
          <span
            data-v-3c6bc75a
            className="para-three"
            style={{ fontSize: "15px" }}
          >
            {getLanguage(LanguageKey.PAYMENT_METHODS)}
          </span>
        </div>
        <div className="payment-app-name container" data-v-3c6bc75a>
          <ul style={{ paddingLeft: "0px" }} data-v-3c6bc75a>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/paytm-D2MVaJKW.webp"
                  title="paytm"
                  alt="paytm"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/paypal-Ch4mDE0y.webp"
                  title="paypal"
                  alt="paypal"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/gpay-Cr2DNozE.webp"
                  title="gpay"
                  alt="gpay"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/upi-DbPF5oog.webp"
                  title="upi"
                  alt="upi"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/ethereum-cYvWBUCB.webp"
                  title="ethereum"
                  alt="ethereum"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/bitcoin-C_J2HZrD.webp"
                  title="bitcoin"
                  alt="bitcoin"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/bitcoin-C_J2HZrD.webp"
                  title="bitcoin"
                  alt="bitcoin"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/microgaming-wBAzRr4K.webp"
                  title="microgaming"
                  alt="microgaming"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/bet-soft-Y9Iqs48R.webp"
                  title="bet-soft"
                  alt="bet-soft"
                  data-v-3c6bc75a
                />
              </div>
            </li>
            <li data-v-3c6bc75a>
              <div className="payment-app-border" data-v-3c6bc75a>
                <img
                  loading="lazy"
                  src="/assets/tether-CMAqZP0L.webp"
                  title="tether"
                  alt="tether"
                  data-v-3c6bc75a
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
