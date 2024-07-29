import React from 'react'
import Quality from "./imges/ShopImges/Group.png";
import Protection from "./imges/ShopImges/Group (1).png";
import Shiping from "./imges/ShopImges/Vector (1).png";
import support from "./imges/ShopImges/Vector (2).png";
import "./allwarenty.css";
export const Allwarenty = () => {
  return (
   <>
   
    <div className="productsExperience">
          <div className="allproexp productQuality">
            <img src={Quality} alt="" />
            <div>
              <h1>High Quality</h1>
              <p>crafted form topmaterials </p>
            </div>
          </div>
          <div className="allproexp productProtection">
            <img src={Protection} alt="" />
            <div>
              <h1>Warranty Protection</h1>
              <p>Over 2 Years </p>
            </div>
          </div>
          <div className="allproexp productShiping">
            <img src={Shiping} alt="" />
            <div>
              <h1>Free Shipping</h1>
              <p>Order Over 150$</p>
            </div>
          </div>
          <div className="allproexp productSupport">
            <img src={support} alt="" />
            <div>
              <h1>24 / 7 Support</h1>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
   </>
  )
}
