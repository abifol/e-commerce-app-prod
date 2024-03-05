import React from "react";
import "../home/banner.css";
import Topicon from "../../../src/assets/div.haru-icon-box__icon.png";
import Boxicon from "../../../src/assets/div.haru-icon-box__icon (1).png";
import Tshirt from "../../../src/assets/Link → SVG.png";

const banner = () => {
  return (
    <div>
      <div class="row justify-content-center my-5 px-5 main">
        <div class="col-sm-4">
          <div class="card cardto ">
            <img src={Topicon} alt="" />
            <div class="card-body1 oil px-4">
              <h5 class="card-title title">Top quality</h5>
              <p class="card-text text">
                Lorem ipsum det, consec tetur adipiscing elit duis nec fringi
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card cardt ">
            <img src={Tshirt} alt="" />
            <div class="card-body1 tshirt px-4">
              <h5 class="card-title title">Mix and match</h5>
              <p class="card-text text">
                Lorem ipsum det, adipiscing elit duis nec fringi consec tetur
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card cardb">
            <img src={Boxicon} alt="" />
            <div class="card-body1 box px-4 ">
              <h5 class="card-title title">Shipping worldwide</h5>
              <p class="card-text text">
                Lorem ipsum det, duis nec fringi consec tetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
