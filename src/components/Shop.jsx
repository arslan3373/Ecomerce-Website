import React,{useEffect} from "react";
import "./Shop.css";
import { Allwarenty } from "./Allwarenty";
import logoimg from "./imges/Meubel House_Logos-05.png";
import arrow_down from "./imges/dashicons_arrow-down-alt2.png";
import { Link } from "react-router-dom";

import bi from './imges/bi_view-list.png'
import dots from './imges/Vector (3).png'
import uiicon from './imges/system-uicons_filtering.png'
import Homeproduct from "../pages/homeproduct";
import Footer from "./Footer";
const Shop = () => {
  useEffect(() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
  }, []);
  return (
    <>
      <div className="shop-page mt-12">
        <div className="contact-hero">
          <div className="filterhero">
            <p className="imgg">
              {" "}
              <img src={logoimg} alt="" />
            </p>
            <h1>Shop</h1>
            <div className="cont-home">
              <Link className="link" to={"/"}>
                Home
              </Link>
              <img src={arrow_down} alt="" />
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className="filterhero1">
          <div className="filter">
            <div id="line">
              <img src={uiicon} alt="" />
            <p>Filter</p>
            <img src={bi} alt="" />
            <img src={dots} alt="" />
            <h3>|</h3>
            <p>Showing 1-16 of 32 results </p>

            </div>
          </div>
          <div className="filetrinput">
            <p>show</p>
            <input type="number" className="inutnumber" placeholder="0" />
            <p>Short By</p>
            <input type="text" className="inputtext" placeholder="Default" />
          </div>
        </div>
        <div className="ShopProducts">
        
      <Homeproduct/>
      <Homeproduct/>
          <div className="allShopbtns mb-5">
            <button className="btn1">1</button>
            <button className="btn2">1</button>
            <button className="btn3">3</button>
            <button className="btnnext">Next</button>
          </div>
        </div>
        <Allwarenty/>
        
        <Footer/>
      </div>
    </>
  );
};

export default Shop;
