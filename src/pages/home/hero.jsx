/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../home/hero.css";
import banner1 from "../../../src/assets/Link → banner-41.jpg.png";
import banner2 from "../../../src/assets/Link → banner-42.jpg.png";

const hero = () => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <img src={banner1} />
            <div class="card-body">
              <h5 class="card-title">Bring your ideas to life in minute</h5>
              <p class="card-text">
                Print shirts for yourself or your creative works
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <img src={banner2} />
            <div class="card-body">
              <h5 class="card-title">T-shirt printing made easy.</h5>
              <p class="card-text">
                Create your design for your online business
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
