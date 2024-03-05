import React from "react";
import "../shop/footer";
import text from "../../../src/assets/text.png";
import text1 from "../../assets/text (1).png";
import text2 from "../../assets/text (2).png";
import text3 from "../../assets/text (3).png";
import text4 from "../../assets/text (4).png";
import text5 from "../../assets/text (5).png";
import text6 from "../../assets/text (6).png";
import text7 from "../../assets/text (7).png";
import text8 from "../../assets/text (8).png";
import text9 from "../../assets/text (9).png";
import text10 from "../../assets/text (10).png";
import text11 from "../../assets/text (11).png";
const hero = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-3">
          <div class="package-body">
            <ul>
              <h1>
                <li>Product categories</li>
              </h1>
              <li>
                Hoodie<span class="li-value">11</span>
              </li>
              <li>
                Kids <span class="li-value">4</span>
              </li>
              <li>
                Long Sleeves <span class="li-value">0</span>
              </li>
              <li>
                Product Designer <span class="li-value">2</span>
              </li>
              <li>
                Sweater <span class="li-value">2</span>
              </li>
              <li>
                T-Shirt <span class="li-value">5</span>
              </li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Filter by price</li>
              </h1>
              <li>
                Price: $10 -- $160
                <span class="li-value">
                  <a href="/shop" class="package-btn">
                    Filter
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Filter by Color</li>
              </h1>
              <li>
                Black <span class="li-value">14</span>
              </li>
              <li>
                Brown <span class="li-value">13</span>
              </li>
              <li>
                Red <span class="li-value">13</span>
              </li>
              <li>
                White <span class="li-value">13</span>
              </li>
              <li>
                Yellow <span class="li-value">13</span>
              </li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Filter by Size</li>
              </h1>
              <li>
                2XL<span class="li-value">14</span>
              </li>
              <li>
                3XL <span class="li-value">14</span>
              </li>
              <li>
                L <span class="li-value">14</span>
              </li>
              <li>
                M <span class="li-value">14</span>
              </li>
              <li>
                S <span class="li-value">14</span>
              </li>
              <li>
                XL <span class="li-value">14</span>
              </li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Filter by Material </li>
              </h1>
              <li>
                Glass<span class="li-value">14</span>
              </li>
              <li>
                Metal <span class="li-value">14</span>
              </li>
              <li>
                Paper <span class="li-value">0</span>
              </li>
              <li>
                Wood <span class="li-value">2</span>
              </li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Price filter </li>
              </h1>
              <h1>
                <li>All </li>
              </h1>
              <li>$0.00 - $40.00</li>
              <li>$40.00 - $80.00</li>
              <li>$80.00 - $120.00</li>
              <li>$120.00 - $160.00</li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Sort by </li>
              </h1>
              <li>Popularity</li>
              <li>Average rating</li>
              <li>Latest</li>
              <li>Price: low to high</li>
              <li>Price: high to low</li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Stock status </li>
              </h1>
              <li>on sale</li>
              <li>In stock</li>
              <li>Out of Stock</li>
              <li>On back order</li>
            </ul>
          </div>
          <div class="package-body">
            <ul>
              <h1>
                <li>Product tags </li>
              </h1>
              <li>
                <a href="" class="package-btn">
                  Designer
                </a>
                <a href="" class="package-btn">
                  kids
                </a>
                <a href="" class="package-btn">
                  T-Shirt
                </a>
              </li>
              <li>
                {" "}
                <a href="" class="package-btn">
                  Woman
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div class="row"> */}
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Adult Quantity Tee</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text1} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">All-Over-Print Hoodie</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text2} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">AOP Cut & Sew Tee</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text3} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Fine Jersey Tee</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text4} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Fit Round-neck T-shirt</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text5} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Hooded Sweatshirt</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text6} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Kids Hoodie</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text7} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Lightweight Fashion Tee</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text8} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Midweight Cotton Tee</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text9} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Premium Crewneck Sweatshirt</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text10} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Premium Pullover Hoodie</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        <div class="col-1g-4 col-md-4 col-12">
          <div class="card">
            <img src={text11} alt="" height={(228, 557)} />
            <div class="card-body">
              <h5 class="card-title">Product Price by Options</h5>
              <a href="#" class="btn btn-primary">
                $26.00 - $29.00
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default hero;
