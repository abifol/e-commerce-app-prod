/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image43 from "../../../src/assets/Link → banner-43.jpg.png";
import Image44 from "../../../src/assets/Link → banner-44.jpg.png";
import Image45 from "../../../src/assets/Link → banner-45.jpg.png";
import Image46 from "../../../src/assets/Link → banner-46.jpg.png";
import Image47 from "../../../src/assets/Link → banner-47.jpg.png";
import "../home/gallery.css";

const gallery = () => {
  return (
    <div>
      <div class="container ">
        <div class="row justify-content-center g-5">
          <div class="col-md-3">
            <div class="card3  mb-4">
              <img src={Image43} style={{ width: 225 }} alt="" />
              <div class="card-body3 btnn">
                <h5 class="card-title3"></h5>
                <p class="card-text3"></p>
                <a href="#" class="btn btn-primary btn3">
                  Shop Hoodies
                </a>
              </div>
            </div>
            <div class="card3  mb-4">
              <img src={Image46} style={{ width: 225 }} />
              <div class="card-body3 btnn">
                <h5 class="card-title3"></h5>
                <p class="card-text3"></p>
                <a href="#" class="btn btn-primary btn3">
                  Shop Tanktop
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card3 mb-4">
              <img src={Image44} style={{ width: 475 }} />
              <div class="card-body3 btnm">
                <h5 class="card-title3"></h5>
                <p class="card-text3"></p>
                <a href="#" class="btn btn-primary btn3">
                  Shop T-Shirt
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card3 mb-4">
              <img src={Image45} style={{ width: 225 }} />
              <div class="card-body3 btnnn">
                <h5 class="card-title3"></h5>
                <p class="card-text3"></p>
                <a href="#" class="btn btn-primary btn3">
                  Shop Sweater
                </a>
              </div>
            </div>
            <div class="card3 mb-4">
              <img src={Image47} style={{ width: 225 }} />
              <div class="card-body3 btnnn">
                <h5 class="card-title3"></h5>
                <p class="card-text3"></p>
                <a href="#" class="btn btn-primary btn3">
                  Shop Designer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 id="tshirt">T-shirt Printing for Everyone</h2>
      <h6>What’s more, we do it right!</h6>
    </div>
  );
};

export default gallery;
