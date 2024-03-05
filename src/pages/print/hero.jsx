import React from "react";
// import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import boy from "../../assets/banner-decor-23.jpg.png";
import smile from "../../assets/smile.png";
import woman from "../../assets/woman.png";
import girl from "../../assets/girl.png";
import blush from "../../assets/blush.png";
import backview from "../../assets/backview.png";
import list from "../../assets/list.png";
import icon from "../../assets/Icon.png";
import list2 from "../../assets/list2.png";
import list3 from "../../assets/list3.png";
import list4 from "../../assets/list4.png";
import list5 from "../../assets/list5.png";
import list2xl from "../../assets/List2xl.png";
import list3xl from "../../assets/List3xl.png";
import listxl from "../../assets/Listxl.png";
import listxs from "../../assets/Listxs.png";
import listL from "../../assets/ListL.png";
import listM from "../../assets/ListM.png";
import listS from "../../assets/ListS.png";
import "../print/hero.css";
import material from "../../assets/material-glass.png.png";
import material_paper from "../../assets/material-paper.png.png";
import material_metal from "../../assets/material-metal.png.png";
// import Badge from "react-bootstrap/Badge";
import background from "../../assets/background image.jpg";

const hero = () => {
  const handleClick = () => {
    // handleClick button
    console.log("Button clicked!");
  };
  return (
    <>
      <div class="card text-bg-light">
        <img src={background} class="card-img" alt="..." />
        <div class="card-img-overlay text-center ">
          <h5 class="card-title">
            Let's configure you own <br className="text-center" />
            print product
          </h5>
          <p class="card-text">The easiest way to get your print as you want</p>
          <button type="button" class="btn btn-success">
            Success
          </button>
        </div>
      </div>

      {/* hero-bottom */}
      {/* <div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file" /><button type="button" class="btn btn-dark">Browse Files</button>
</div> */}
      <h5 class="card-title text-center">STEP1</h5>
      <div class="card  card-center">
        <div class="card-body text-center">
          {/* <h5 class="card-title">STEP1</h5> */}
          <span>Drag & Drop Files Here</span>or
          <a href="#" class="btn btn-dark">
            Browse Files
          </a>
        </div>
      </div>
      <h5 class="card-title text-center">STEP2</h5>
      <div class="card  card-center">
        <div class="card-body text-center">
          {/* <h5 class="card-title">STEP2</h5> */}
          <h1 class="card-text">Choose your Color</h1>
          <span>
            <img src={list} alt="" />
          </span>
          <img src={list2} alt="" />
          <span>
            <img src={list3} alt="" />
            <img src={list4} alt="" />
            <img src={list5} alt="" />
          </span>
        </div>
      </div>
      <h5 class="card-title text-center">STEP3</h5>
      <div class="card  card-center">
        <div class="card-body text-center">
          {/* <h5 class="card-title">STEP2</h5> */}
          <h1 class="card-text">Choose your Color</h1>
          <span>
            <img src={list2xl} alt="" />
          </span>
          <img src={list3xl} alt="" />
          <span>
            <img src={listL} alt="" />
            <img src={listM} alt="" />
            <img src={listS} alt="" />
            <img src={listxl} alt="" />
            <img src={listxs} alt="" />
          </span>
        </div>
      </div>

      <h5 class="card-title text-center">STEP4</h5>
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="card card-center">
            <img src={material} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">glass</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={material_metal}
              class="card-img-top"
              alt="..."
              width={10}
            />
            <div class="card-body">
              <h5 class="card-title text-center">metal</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={material_paper} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title tex-center">paper</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={material} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">wood</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default hero;
