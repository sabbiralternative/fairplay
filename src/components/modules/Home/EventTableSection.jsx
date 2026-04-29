const EventTableSection = () => {
  return (
    <div>
      <div className="events-table-section">
        <div>
          <div>
            <div>
              <div className="events-col gradient mb-3">
                <div className="bet-table-header">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-8 col-12">
                      <div className="game-title-box">
                        <img
                          className="game-icon-img"
                          src="assets/img/icon/4.png"
                        />
                        Cricket
                        <ul className="live_virtual">
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order one"
                              id="checkboxOnein_play-inplay-4"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxOnein_play-inplay-4">
                              LIVE
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order Two"
                              id="checkboxTwoin_play--inplay--4"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxTwoin_play--inplay--4">
                              VIRTUAL
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order Two"
                              id="checkboxThreein_play--inplay--4"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxThreein_play--inplay--4">
                              PREMIUM
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 text-center ms-auto game-title-box-right d-none d-lg-block">
                      <div className="row no-gutters">
                        <div className="text-center col-4 text-white caption">
                          1
                        </div>
                        <div className="text-center col-4 text-white caption">
                          X
                        </div>
                        <div className="text-center col-4 text-white caption">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-table-body">
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35533331">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 08:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Mumbai Indians v Sunrisers Hyderabad
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indian Premier League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>

                          <span title="T">T</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.88</div>
                                <div className="odd-button__volume">
                                  5613.56
                                </div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.89</div>
                                <div className="odd-button__volume">
                                  10820.1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.12</div>
                                <div className="odd-button__volume">
                                  12411.83
                                </div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.14</div>
                                <div className="odd-button__volume">
                                  5075.71
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.88</div>
                              <div className="odd-button__volume">5613.56</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.12</div>
                              <div className="odd-button__volume">12411.83</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.89</div>
                              <div className="odd-button__volume">10820.1</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.14</div>
                              <div className="odd-button__volume">5075.71</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/28127348">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              25-03-2026 08:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Indian Premier League
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indian Premier League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/28102621">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              26-03-2026 06:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Pakistan Super League
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Pakistan Super League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35541318">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 09:45 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Nepal v Oman
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ICC Cricket World Cup League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">75</div>
                                <div className="odd-button__volume">7.46</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">110</div>
                                <div className="odd-button__volume">2.83</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.01</div>
                                <div className="odd-button__volume">307.74</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.02</div>
                                <div className="odd-button__volume">
                                  8031.85
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">75</div>
                              <div className="odd-button__volume">7.46</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.01</div>
                              <div className="odd-button__volume">307.74</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">110</div>
                              <div className="odd-button__volume">2.83</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.02</div>
                              <div className="odd-button__volume">8031.85</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70975514">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              India SRL V Australia SRL
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Simulated Reality League / T20 International SRL
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1777280086">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🎮SRI LANKA T10 VS AFGHANISTAN T10
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="VR">
                            <i className="mdi mdi-gamepad-variant" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1777290520">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🎮LUCKNOW SUPER GIANTS T10 VS GUJARAT TITANS T10
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="VR">
                            <i className="mdi mdi-gamepad-variant" />
                          </span>

                          <span title="F">F</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70976218">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              St Kitts And Nevis Patriots SRL V Barbados Royals
                              SRL
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Simulated Reality League / Caribbean Premier
                              League SRL
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1777358516">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:10 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🥊 SETH ROLLINS VS SAMI ZAYN
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="VR">
                            <i className="mdi mdi-gamepad-variant" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1777361900">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:15 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🏏MI CAPE TOWN SO V DURBANS SUPER GIANTS SO
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="VR">
                            <i className="mdi mdi-gamepad-variant" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35533568">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Somerset W v Essex W
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Metro Bank Womens One Day Cup
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.77</div>
                                <div className="odd-button__volume">2.86</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.91</div>
                                <div className="odd-button__volume">22.13</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.1</div>
                                <div className="odd-button__volume">20.13</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.3</div>
                                <div className="odd-button__volume">2.2</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.77</div>
                              <div className="odd-button__volume">2.86</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.1</div>
                              <div className="odd-button__volume">20.13</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.91</div>
                              <div className="odd-button__volume">22.13</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.3</div>
                              <div className="odd-button__volume">2.2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35533964">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              The Blaze W v Warwickshire W
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Metro Bank Womens One Day Cup
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.34</div>
                                <div className="odd-button__volume">5</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.4</div>
                                <div className="odd-button__volume">125.37</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.55</div>
                                <div className="odd-button__volume">1.33</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">3.95</div>
                                <div className="odd-button__volume">1.7</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.34</div>
                              <div className="odd-button__volume">5</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.55</div>
                              <div className="odd-button__volume">1.33</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.4</div>
                              <div className="odd-button__volume">125.37</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">3.95</div>
                              <div className="odd-button__volume">1.7</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35534003">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Hampshire W v Surrey W
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Metro Bank Womens One Day Cup
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.68</div>
                                <div className="odd-button__volume">108.27</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.7</div>
                                <div className="odd-button__volume">16.83</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.42</div>
                                <div className="odd-button__volume">11.82</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.48</div>
                                <div className="odd-button__volume">73.35</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.68</div>
                              <div className="odd-button__volume">108.27</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.42</div>
                              <div className="odd-button__volume">11.82</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.7</div>
                              <div className="odd-button__volume">16.83</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.48</div>
                              <div className="odd-button__volume">73.35</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35533571">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Yorkshire W v Durham W
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Metro Bank Womens One Day Cup
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.3</div>
                                <div className="odd-button__volume">163.4</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.36</div>
                                <div className="odd-button__volume">197.57</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.75</div>
                                <div className="odd-button__volume">71.64</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">4.4</div>
                                <div className="odd-button__volume">48.28</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.3</div>
                              <div className="odd-button__volume">163.4</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.75</div>
                              <div className="odd-button__volume">71.64</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.36</div>
                              <div className="odd-button__volume">197.57</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">4.4</div>
                              <div className="odd-button__volume">48.28</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1777358537">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:40 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🥊 BROCK LESNAR VS FINN BALOR
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="VR">
                            <i className="mdi mdi-gamepad-variant" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1777358556">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 04:10 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🥊 RANDY ORTON VS JOHN CENA
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="VR">
                            <i className="mdi mdi-gamepad-variant" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35539608">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 08:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Multan Sultans v Hyderabad Kingsmen
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Pakistan Super League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>

                          <span title="T">T</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.76</div>
                                <div className="odd-button__volume">22.26</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.78</div>
                                <div className="odd-button__volume">
                                  2601.14
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.28</div>
                                <div className="odd-button__volume">
                                  2054.37
                                </div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.32</div>
                                <div className="odd-button__volume">16.89</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.76</div>
                              <div className="odd-button__volume">22.26</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.28</div>
                              <div className="odd-button__volume">2054.37</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.78</div>
                              <div className="odd-button__volume">2601.14</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.32</div>
                              <div className="odd-button__volume">16.89</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35542207">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              30-04-2026 08:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Gujarat Titans v Royal Challengers Bengaluru
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indian Premier League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>

                          <span title="T">T</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.28</div>
                                <div className="odd-button__volume">168.35</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">2.32</div>
                                <div className="odd-button__volume">102.74</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.76</div>
                                <div className="odd-button__volume">48.71</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.78</div>
                                <div className="odd-button__volume">215.64</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">2.28</div>
                              <div className="odd-button__volume">168.35</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.76</div>
                              <div className="odd-button__volume">48.71</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">2.32</div>
                              <div className="odd-button__volume">102.74</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.78</div>
                              <div className="odd-button__volume">215.64</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1774820038">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              04-05-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              🏎️MIAMI GRAND PRIX🏁- RACE
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35541507">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Bangladesh v New Zealand
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              International Twenty20 Matches
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="F">F</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.72</div>
                                <div className="odd-button__volume">52.61</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.75</div>
                                <div className="odd-button__volume">154.6</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.32</div>
                                <div className="odd-button__volume">135.06</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.38</div>
                                <div className="odd-button__volume">2.95</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.72</div>
                              <div className="odd-button__volume">52.61</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.32</div>
                              <div className="odd-button__volume">135.06</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.75</div>
                              <div className="odd-button__volume">154.6</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.38</div>
                              <div className="odd-button__volume">2.95</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="events-col gradient mb-3">
                <div className="bet-table-header">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-8 col-12">
                      <div className="game-title-box">
                        <img
                          className="game-icon-img"
                          src="assets/img/icon/2.png"
                        />
                        Tennis
                        <ul className="live_virtual">
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order one"
                              id="checkboxOnein_play-inplay-2"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxOnein_play-inplay-2">
                              LIVE
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order Two"
                              id="checkboxTwoin_play--inplay--2"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxTwoin_play--inplay--2">
                              VIRTUAL
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order Two"
                              id="checkboxThreein_play--inplay--2"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxThreein_play--inplay--2">
                              PREMIUM
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 text-center ms-auto game-title-box-right d-none d-lg-block">
                      <div className="row no-gutters">
                        <div className="text-center col-4 text-white caption">
                          1
                        </div>
                        <div className="text-center col-4 text-white caption">
                          X
                        </div>
                        <div className="text-center col-4 text-white caption">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-table-body">
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35510789">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              20-04-2026 06:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              WTA Madrid 2026
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA Madrid 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35510947">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              23-04-2026 06:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              ATP Madrid 2026
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Madrid 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35540036">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Chidekh v Ri Hijikata
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Aix-en-Provence Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">8</div>
                                <div className="odd-button__volume">87.85</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">8.4</div>
                                <div className="odd-button__volume">16.14</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.13</div>
                                <div className="odd-button__volume">
                                  2522.52
                                </div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.14</div>
                                <div className="odd-button__volume">609.82</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">8</div>
                              <div className="odd-button__volume">87.85</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.13</div>
                              <div className="odd-button__volume">2522.52</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">8.4</div>
                              <div className="odd-button__volume">16.14</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.14</div>
                              <div className="odd-button__volume">609.82</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546383">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Potenza v Al Kovacevic
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Cagliari Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">9.2</div>
                                <div className="odd-button__volume">4.8</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">11</div>
                                <div className="odd-button__volume">75.14</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.1</div>
                                <div className="odd-button__volume">751.39</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.12</div>
                                <div className="odd-button__volume">1.01</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">9.2</div>
                              <div className="odd-button__volume">4.8</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.1</div>
                              <div className="odd-button__volume">751.39</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">11</div>
                              <div className="odd-button__volume">75.14</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.12</div>
                              <div className="odd-button__volume">1.01</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546072">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Monnot v Li Tagger
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA Saint Malo 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">30</div>
                                <div className="odd-button__volume">12.6</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">34</div>
                                <div className="odd-button__volume">17.53</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.03</div>
                                <div className="odd-button__volume">578.66</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.04</div>
                                <div className="odd-button__volume">
                                  5859.28
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">30</div>
                              <div className="odd-button__volume">12.6</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.03</div>
                              <div className="odd-button__volume">578.66</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">34</div>
                              <div className="odd-button__volume">17.53</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.04</div>
                              <div className="odd-button__volume">5859.28</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35543129">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Hug Gaston v Dar Blanch
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Mauthausen Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35545391">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              An Ghibaudo v Sa Pieri
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Shymkent Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.05</div>
                                <div className="odd-button__volume">
                                  1314.98
                                </div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.07</div>
                                <div className="odd-button__volume">
                                  1236.68
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">15</div>
                                <div className="odd-button__volume">88.18</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">21</div>
                                <div className="odd-button__volume">65.79</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.05</div>
                              <div className="odd-button__volume">1314.98</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">15</div>
                              <div className="odd-button__volume">88.18</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.07</div>
                              <div className="odd-button__volume">1236.68</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">21</div>
                              <div className="odd-button__volume">65.79</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35545288">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Erhard v An Nedic
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Shymkent Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35541280">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Dellavedova v L Broady
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Jiujiang Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">100</div>
                                <div className="odd-button__volume">16.7</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.01</div>
                                <div className="odd-button__volume">
                                  1653.52
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">100</div>
                              <div className="odd-button__volume">16.7</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.01</div>
                              <div className="odd-button__volume">1653.52</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35541265">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Tomic v Ma Sharipov
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Jiujiang Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35534146">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Sun v Schoolkate
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Jiujiang Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.29</div>
                                <div className="odd-button__volume">122.24</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.5</div>
                                <div className="odd-button__volume">29.01</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3</div>
                                <div className="odd-button__volume">14.5</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">4.4</div>
                                <div className="odd-button__volume">1.15</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.29</div>
                              <div className="odd-button__volume">122.24</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3</div>
                              <div className="odd-button__volume">14.5</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.5</div>
                              <div className="odd-button__volume">29.01</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">4.4</div>
                              <div className="odd-button__volume">1.15</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35534166">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Yu Hsu v Ri Noguchi
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Jiujiang Challenger 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.4</div>
                                <div className="odd-button__volume">91.42</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.45</div>
                                <div className="odd-button__volume">40.84</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.41</div>
                                <div className="odd-button__volume">99.92</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.42</div>
                                <div className="odd-button__volume">766.62</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">3.4</div>
                              <div className="odd-button__volume">91.42</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.41</div>
                              <div className="odd-button__volume">99.92</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.45</div>
                              <div className="odd-button__volume">40.84</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.42</div>
                              <div className="odd-button__volume">766.62</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71116522">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Tomic, Bernard vs. Sharipov, Marat
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Jiujiang, China Men
                              Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71002304">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:10 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Ghibaudo, Antoine vs. Pieri, Samuele
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Shymkent II,
                              Kazakhstan Men Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71085836">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:20 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Guo M / Zhu A vs. Panshina V / Zolotareva R
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA 125K / WTA 125K Huzhou, China Women Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71089456">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:20 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Klok D / Prihodko O vs. Durasovic V / Wehnelt K
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Shymkent II,
                              Kazakhstan Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71116528">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Dellavedova, Matthew vs. Broady, Liam
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Jiujiang, China Men
                              Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71001430">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Gaston, Hugo vs. Blanch, Darwin
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Mauthausen, Austria
                              Men Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71093016">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Latinovic S / Ruehl T vs. Jecan A / Pavel B
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Mauthausen, Austria
                              Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71056762">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Juszczak, Dorian vs. Tabacco, Fausto
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UTR Men / UTR PTT Carvoeiro Men +H 06
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71057062">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Silova, Nela vs. Tucakovic, Suana
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UTR PTT Carvoeiro Women +H 06
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71057054">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Jirouskova, Monika vs. Stevanovic, Aleksandra
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UTR PTT Carvoeiro Women +H 06
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/29107711">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:25 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Zveriev vs. Kyrgiso
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Virtual Tennis In-Play / Virtual Tennis In-Play
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/29107712">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:31 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Fedirer vs. Dimetriov
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Virtual Tennis In-Play / Virtual Tennis In-Play
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/29107713">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:49 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Gofein vs. Tsogna
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Virtual Tennis In-Play / Virtual Tennis In-Play
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71089448">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Albot R / Yevseyev D vs. Kalender A / Poljicak M
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Shymkent II,
                              Kazakhstan Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71089458">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:50 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Bar Biryukov P / Lomakin G vs. Masabayashi T /
                              Tajima N
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Shymkent II,
                              Kazakhstan Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/29107714">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:56 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Nishekuri vs. Andorsen
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Virtual Tennis In-Play / Virtual Tennis In-Play
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71166628">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Potenza, Luca vs. Kovacevic, Aleksandar
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Cagliari, Italy Men
                              Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71097740">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Chidekh, Clement vs. Hijikata, Rinky
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Aix en Provence,
                              France Men Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71002512">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Monnot , Amandine vs. Tagger, Lilli
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA 125K / WTA 125K Saint-Malo, France, Women
                              Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71167602">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Borges N / Cornea V V vs. Nouza P / Oberleitner N
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Challenger Cagliari, Italy Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71093912">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Kolar Z / Mrva M vs. Duda F / Poljak D
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Challenger Ostrava, Czech Republic Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71093918">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Martos Gornes S / Walkow S vs. Sabanov I / Sabanov
                              M
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Challenger Ostrava, Czech Republic Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71094482">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Danilina A / Muhammad A vs. Cho I-H / Cho Y T
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA 125K / WTA 125K Saint-Malo, France, Women
                              Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71093914">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Hermans M / Nicod J vs. Klimas J / Petak D
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Challenger Ostrava, Czech Republic Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71166684">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Paul J / Vocel M vs. Martin F / Muller A
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Challenger Aix en Provence, France Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71093008">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:05 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Grevelius E / Molchanov D vs. Martinez A / Pujol
                              Navarro B
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Mauthausen, Austria
                              Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71093010">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:20 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Lammons N / Withrow J vs. Kielan S / Paulson A
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Mauthausen, Austria
                              Men Doubles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71001440">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:20 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Djere, Laslo vs. Choinski, Jan
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Challenger / ATP Challenger Mauthausen, Austria
                              Men Singles
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35544389">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 05:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Ka Pliskova v A Potapova
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA Madrid 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="S">S</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.68</div>
                                <div className="odd-button__volume">3.09</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">2.7</div>
                                <div className="odd-button__volume">160.33</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.59</div>
                                <div className="odd-button__volume">4</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.6</div>
                                <div className="odd-button__volume">130.13</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">2.68</div>
                              <div className="odd-button__volume">3.09</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.59</div>
                              <div className="odd-button__volume">4</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">2.7</div>
                              <div className="odd-button__volume">160.33</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.6</div>
                              <div className="odd-button__volume">130.13</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35543825">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 06:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              M Kostyuk v L Noskova
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              WTA Madrid 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="S">S</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.52</div>
                                <div className="odd-button__volume">506.08</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.54</div>
                                <div className="odd-button__volume">663.41</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.86</div>
                                <div className="odd-button__volume">155.9</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.9</div>
                                <div className="odd-button__volume">10</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.52</div>
                              <div className="odd-button__volume">506.08</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.86</div>
                              <div className="odd-button__volume">155.9</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.54</div>
                              <div className="odd-button__volume">663.41</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.9</div>
                              <div className="odd-button__volume">10</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546947">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 08:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Sinner v Jodar
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Madrid 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="S">S</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.17</div>
                                <div className="odd-button__volume">
                                  10784.17
                                </div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.18</div>
                                <div className="odd-button__volume">
                                  1739.74
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">6.6</div>
                                <div className="odd-button__volume">114.53</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">6.8</div>
                                <div className="odd-button__volume">292.63</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.17</div>
                              <div className="odd-button__volume">10784.17</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">6.6</div>
                              <div className="odd-button__volume">114.53</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.18</div>
                              <div className="odd-button__volume">1739.74</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">6.8</div>
                              <div className="odd-button__volume">292.63</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546432">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              30-04-2026 01:30 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Fils v Lehecka
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              ATP Madrid 2026
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>

                          <span title="S">S</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.62</div>
                                <div className="odd-button__volume">204.07</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.63</div>
                                <div className="odd-button__volume">92.51</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.58</div>
                                <div className="odd-button__volume">129.98</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.62</div>
                                <div className="odd-button__volume">130.18</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.62</div>
                              <div className="odd-button__volume">204.07</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.58</div>
                              <div className="odd-button__volume">129.98</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.63</div>
                              <div className="odd-button__volume">92.51</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.62</div>
                              <div className="odd-button__volume">130.18</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="events-col gradient mb-3">
                <div className="bet-table-header">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-8 col-12">
                      <div className="game-title-box">
                        <img
                          className="game-icon-img"
                          src="assets/img/icon/1.png"
                        />
                        Football
                        <ul className="live_virtual">
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order one"
                              id="checkboxOnein_play-inplay-1"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxOnein_play-inplay-1">
                              LIVE
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order Two"
                              id="checkboxTwoin_play--inplay--1"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxTwoin_play--inplay--1">
                              VIRTUAL
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              defaultValue="Order Two"
                              id="checkboxThreein_play--inplay--1"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <label htmlFor="checkboxThreein_play--inplay--1">
                              PREMIUM
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 text-center ms-auto game-title-box-right d-none d-lg-block">
                      <div className="row no-gutters">
                        <div className="text-center col-4 text-white caption">
                          1
                        </div>
                        <div className="text-center col-4 text-white caption">
                          X
                        </div>
                        <div className="text-center col-4 text-white caption">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-table-body">
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1772092710">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              26-02-2026 06:35 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              UEFA Champions League
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1774999383">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              01-03-2026 05:30 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              UEFA Europa League
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/1775001617">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              01-03-2026 09:50 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              UEFA Europa Conference League
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Others
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35545864">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Matsumoto v Iwata
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japanese J. League 2/3 100 Year Vision
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.41</div>
                                <div className="odd-button__volume">1</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">1.43</div>
                                <div className="odd-button__volume">445</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">4.4</div>
                                <div className="odd-button__volume">152</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">4.6</div>
                                <div className="odd-button__volume">3</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">13.5</div>
                                <div className="odd-button__volume">6.95</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">15</div>
                                <div className="odd-button__volume">1</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">1.41</div>
                              <div className="odd-button__volume">1</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">4.4</div>
                              <div className="odd-button__volume">152</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">13.5</div>
                              <div className="odd-button__volume">6.95</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">1.43</div>
                              <div className="odd-button__volume">445</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">4.6</div>
                              <div className="odd-button__volume">3</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">15</div>
                              <div className="odd-button__volume">1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35545866">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Nagano Parceiro v Fukushima Utd
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japanese J. League 2/3 100 Year Vision
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">44</div>
                                <div className="odd-button__volume">1.21</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">50</div>
                                <div className="odd-button__volume">1.75</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">12.5</div>
                                <div className="odd-button__volume">10.88</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">13</div>
                                <div className="odd-button__volume">1.12</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.1</div>
                                <div className="odd-button__volume">
                                  1053.51
                                </div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.11</div>
                                <div className="odd-button__volume">56.27</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">44</div>
                              <div className="odd-button__volume">1.21</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">12.5</div>
                              <div className="odd-button__volume">10.88</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.1</div>
                              <div className="odd-button__volume">1053.51</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">50</div>
                              <div className="odd-button__volume">1.75</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">13</div>
                              <div className="odd-button__volume">1.12</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.11</div>
                              <div className="odd-button__volume">56.27</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35533893">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Semen Padang v Madura Utd
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indonesian Super League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">22</div>
                                <div className="odd-button__volume">34.46</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">25</div>
                                <div className="odd-button__volume">2.27</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">4.5</div>
                                <div className="odd-button__volume">148.79</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">4.8</div>
                                <div className="odd-button__volume">8.67</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.33</div>
                                <div className="odd-button__volume">552.1</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.36</div>
                                <div className="odd-button__volume">4</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">22</div>
                              <div className="odd-button__volume">34.46</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">4.5</div>
                              <div className="odd-button__volume">148.79</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.33</div>
                              <div className="odd-button__volume">552.1</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">25</div>
                              <div className="odd-button__volume">2.27</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">4.8</div>
                              <div className="odd-button__volume">8.67</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.36</div>
                              <div className="odd-button__volume">4</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35533932">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Persik Kediri v Pusamania Borneo FC
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indonesian Super League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">10</div>
                                <div className="odd-button__volume">1.63</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">17</div>
                                <div className="odd-button__volume">50.65</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">4</div>
                                <div className="odd-button__volume">5</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">4.7</div>
                                <div className="odd-button__volume">3.46</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.41</div>
                                <div className="odd-button__volume">1</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.45</div>
                                <div className="odd-button__volume">40</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">10</div>
                              <div className="odd-button__volume">1.63</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">4</div>
                              <div className="odd-button__volume">5</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.41</div>
                              <div className="odd-button__volume">1</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">17</div>
                              <div className="odd-button__volume">50.65</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">4.7</div>
                              <div className="odd-button__volume">3.46</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.45</div>
                              <div className="odd-button__volume">40</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35545468">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Ehime v FC Imabari
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japanese J. League 2/3 100 Year Vision
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546106">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Guangzhou Alpha v Shenzhen 2028
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Chinese League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35530117">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Kashiwa v FC Tokyo
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japanese J. League Special Tournament
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546229">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Xian Chongde Ronghai v Dalian Yingbo II
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Chinese League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35530116">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:45 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Mito v FC Machida
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japanese J. League Special Tournament
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="G">G</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">0</div>
                                <div className="odd-button__volume">0</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">0</div>
                              <div className="odd-button__volume">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35546105">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 12:48 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Hubei Istar v Wenzhou Professional
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Chinese League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">19</div>
                                <div className="odd-button__volume">3.62</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">27</div>
                                <div className="odd-button__volume">1.15</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">4.1</div>
                                <div className="odd-button__volume">11.12</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">4.5</div>
                                <div className="odd-button__volume">4.28</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">1.36</div>
                                <div className="odd-button__volume">11</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">1.39</div>
                                <div className="odd-button__volume">12.95</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">19</div>
                              <div className="odd-button__volume">3.62</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">4.1</div>
                              <div className="odd-button__volume">11.12</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">1.36</div>
                              <div className="odd-button__volume">11</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">27</div>
                              <div className="odd-button__volume">1.15</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">4.5</div>
                              <div className="odd-button__volume">4.28</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">1.39</div>
                              <div className="odd-button__volume">12.95</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/67645522">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Kashiwa Reysol vs. FC Tokyo
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japan / J.League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/67645032">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 01:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Nagoya Grampus vs. Fagiano Okayama
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japan / J.League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70857326">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Mendiola FC vs. Philippine Army
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Philippines / Philippines Footb. League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70699980">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Melbourne Victory FC U20 vs. Boroondara-Carey
                              Eagles U20
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Australia / U20 Victoria NPL, Women
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/69910890">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Guangzhou Dandelion Alpha FC vs. Shenzhen 2028 FC
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              China / China League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/67648270">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Ehime FC vs. FC Imabari
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japan / J.League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70252052">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              FC Ural-2 Yekaterinburg vs. Khimik Dzerzhinsk
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Russia / 2. Liga, Division B, Group 4
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/69910892">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Hubei Istar vs. Wenzhou Professional FC
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              China / China League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/62083126">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Semen Padang FC vs. Madura United
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indonesia / Liga 1
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/62083128">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 02:30 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Persik Kediri vs. Borneo Samarinda
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Indonesia / Liga 1
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/67648110">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              AC Nagano Parceiro vs. Fukushima United FC
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japan / J.League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/67648108">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Matsumoto Yamaga FC vs. Jubilo Iwata
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Japan / J.League 2
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70819044">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              FC Okzhetpes vs. FC Zhenis
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Kazakhstan / Kazakhstan Cup
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/70141992">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              FC Tatran Presov vs. Spartak Myjava
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Slovakia / 1. League Women
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/71060642">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              29-04-2026 03:00 PM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Adamstown Rosebud FC vs. Lambton Jaffas FC
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              Australia / Northern NSW NPL
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span
                            title="Provider"
                            className="bg-provider-success"
                          >
                            P
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                              <div className="lay last">
                                <div className="odd-button__price">-</div>
                                <div className="odd-button__volume">-</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                            <div className="lay last">
                              <div className="odd-button__price">-</div>
                              <div className="odd-button__volume">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35497445">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              30-04-2026 01:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Atletico Madrid v Arsenal
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UEFA Champions League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>

                          <span title="TV">
                            <i className="green-text mdi mdi-television" />
                          </span>

                          <span title="BM">BM</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.3</div>
                                <div className="odd-button__volume">
                                  11419.59
                                </div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.35</div>
                                <div className="odd-button__volume">
                                  6820.85
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.35</div>
                                <div className="odd-button__volume">
                                  53736.58
                                </div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.4</div>
                                <div className="odd-button__volume">
                                  22324.87
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.46</div>
                                <div className="odd-button__volume">
                                  7001.96
                                </div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.48</div>
                                <div className="odd-button__volume">
                                  3875.16
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">3.3</div>
                              <div className="odd-button__volume">11419.59</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.35</div>
                              <div className="odd-button__volume">53736.58</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.46</div>
                              <div className="odd-button__volume">7001.96</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.35</div>
                              <div className="odd-button__volume">6820.85</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.4</div>
                              <div className="odd-button__volume">22324.87</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.48</div>
                              <div className="odd-button__volume">3875.16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35500826">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              01-05-2026 01:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Nottm Forest v Aston Villa
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UEFA Europa League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.6</div>
                                <div className="odd-button__volume">288.52</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">2.62</div>
                                <div className="odd-button__volume">9.11</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.35</div>
                                <div className="odd-button__volume">
                                  7328.25
                                </div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.4</div>
                                <div className="odd-button__volume">
                                  5217.65
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.05</div>
                                <div className="odd-button__volume">229.41</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">3.1</div>
                                <div className="odd-button__volume">174.15</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">2.6</div>
                              <div className="odd-button__volume">288.52</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.35</div>
                              <div className="odd-button__volume">7328.25</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.05</div>
                              <div className="odd-button__volume">229.41</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">2.62</div>
                              <div className="odd-button__volume">9.11</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.4</div>
                              <div className="odd-button__volume">5217.65</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">3.1</div>
                              <div className="odd-button__volume">174.15</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35500838">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              01-05-2026 01:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Braga v Freiburg
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UEFA Europa League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.5</div>
                                <div className="odd-button__volume">642.21</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">2.54</div>
                                <div className="odd-button__volume">42.15</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.25</div>
                                <div className="odd-button__volume">298.33</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.3</div>
                                <div className="odd-button__volume">
                                  4681.54
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.3</div>
                                <div className="odd-button__volume">157.74</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">3.4</div>
                                <div className="odd-button__volume">80.71</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">2.5</div>
                              <div className="odd-button__volume">642.21</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.25</div>
                              <div className="odd-button__volume">298.33</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.3</div>
                              <div className="odd-button__volume">157.74</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">2.54</div>
                              <div className="odd-button__volume">42.15</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.3</div>
                              <div className="odd-button__volume">4681.54</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">3.4</div>
                              <div className="odd-button__volume">80.71</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35500815">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              01-05-2026 01:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Shakhtar v Crystal Palace
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UEFA Europa Conference League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">4</div>
                                <div className="odd-button__volume">29.43</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">4.2</div>
                                <div className="odd-button__volume">216.46</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.6</div>
                                <div className="odd-button__volume">30.53</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.7</div>
                                <div className="odd-button__volume">53.73</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.08</div>
                                <div className="odd-button__volume">640.71</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">2.12</div>
                                <div className="odd-button__volume">83.37</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">4</div>
                              <div className="odd-button__volume">29.43</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.6</div>
                              <div className="odd-button__volume">30.53</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">2.08</div>
                              <div className="odd-button__volume">640.71</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">4.2</div>
                              <div className="odd-button__volume">216.46</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.7</div>
                              <div className="odd-button__volume">53.73</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">2.12</div>
                              <div className="odd-button__volume">83.37</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-table-row bg-light pt-1 pb-1 item-odds event_inplay">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-4 d-flex">
                        <span className="multi-pin">
                          <a href="javascript:void(0);" className="add-pin">
                            <i className="mdi mdi-star-outline" />
                          </a>
                        </span>
                        <a href="/event/detail/35500822">
                          <div className="d-flex flex-column ps-2">
                            <div className="calendar-space">
                              01-05-2026 01:00 AM
                            </div>

                            <span className="manage-overflow match-name fw-semibold">
                              Rayo Vallecano v Strasbourg
                            </span>
                            <span className="manage-overflow match-name fw-semibold leaguename">
                              UEFA Europa Conference League
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-2">
                        <div className="itbfc">
                          <span title="INPLAY">
                            <i className="green-text mdi mdi-play" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6 mobile_odds_section">
                        <div className="row g-0 d-none d-md-flex">
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">2.32</div>
                                <div className="odd-button__volume">221.67</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">2.36</div>
                                <div className="odd-button__volume">32.04</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.4</div>
                                <div className="odd-button__volume">99.66</div>
                              </div>
                              <div className="lay">
                                <div className="odd-button__price">3.45</div>
                                <div className="odd-button__volume">72.58</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="btn-block">
                              <div className="back">
                                <div className="odd-button__price">3.5</div>
                                <div className="odd-button__volume">20.86</div>
                              </div>
                              <div className="last lay">
                                <div className="odd-button__price">3.6</div>
                                <div className="odd-button__volume">53.58</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row d-block d-md-none odds_xs_scroll">
                          <div className="col-12 d-flex inplay-item__back-inner-left new_odds_mobile">
                            <div className="back">
                              <div className="odd-button__price">2.32</div>
                              <div className="odd-button__volume">221.67</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.4</div>
                              <div className="odd-button__volume">99.66</div>
                            </div>
                            <div className="back">
                              <div className="odd-button__price">3.5</div>
                              <div className="odd-button__volume">20.86</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">2.36</div>
                              <div className="odd-button__volume">32.04</div>
                            </div>
                            <div className="lay">
                              <div className="odd-button__price">3.45</div>
                              <div className="odd-button__volume">72.58</div>
                            </div>
                            <div className="last lay">
                              <div className="odd-button__price">3.6</div>
                              <div className="odd-button__volume">53.58</div>
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
  );
};

export default EventTableSection;
