import React from "react";
import styles from "./SearchPanel.module.css";
function SearchPanel() {
  return (
    <div className={styles.searchpanelcontainer}>
      <div className={styles.subcontainer}>
        <div className={styles.panel}>
          <div className={styles.paneltext}>
            <p>WELCOME TO BOLETO</p>
            <p>WHAT ARE YOU LOOKING FOR</p>
          </div>
          <div className={styles.panelbtncontainer}>
            <button>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/ticket-tab01.png"
                alt=""
              />
              <span>MOVIE</span>
            </button>
            <button>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/ticket-tab02.png"
                alt=""
              />
              <span>EVENTS</span>
            </button>
            <button>
              <img
                src="http://pixner.net/boleto/demo/assets/images/ticket/ticket-tab03.png"
                alt=""
              />
              <span>SPORTS</span>
            </button>
          </div>
        </div>
        <div className={`${styles.panel} ${styles.maincontainer}`}>
          <div className={styles.searchboxcontainer}>
            <input type="text" placeholder="Search for Movies" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              className={styles.svgimg}
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div className={styles.filtercontainer}>
            <div className={styles.filter}>
              <div className={styles.filtericon}>
                <img
                  src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"
                  alt=""
                />
                <span>City</span>
              </div>
              <div className={styles.filtertext}>
                <select name="" id="">
                  <option value="London">London</option>
                  <option value="London">Dhaka</option>
                  <option value="London">Madrid</option>
                  <option value="London">Kolkata</option>
                  <option value="London">New Jersy</option>
                </select>
              </div>
            </div>
            <div className={styles.filter}>
              <div className={styles.filtericon}>
                <img
                  src="http://pixner.net/boleto/demo/assets/images/ticket/date.png"
                  alt=""
                />
                <span>Date</span>
              </div>
              <div className={styles.filtertext}>
                <select name="" id="">
                  <option value="London">23/02/1998</option>
                  <option value="London">Dhaka</option>
                  <option value="London">Madrid</option>
                  <option value="London">Kolkata</option>
                  <option value="London">New Jersy</option>
                </select>
              </div>
            </div>
            <div className={styles.filter}>
              <div className={styles.filtericon}>
                <img
                  src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png"
                  alt=""
                />
                <span>Cinema</span>
              </div>
              <div className={styles.filtertext}>
                <select name="" id="" className={styles.filterselect}>
                  <option value="London" className={styles.filteroption}>
                    Awaken
                  </option>
                  <option value="London">Dhaka</option>
                  <option value="London">Madrid</option>
                  <option value="London">Kolkata</option>
                  <option value="London">New Jersy</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
