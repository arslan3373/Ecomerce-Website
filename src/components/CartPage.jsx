import React, {  useEffect } from 'react';
import { useSelector } from "react-redux";
import logoimg from "./imges/Meubel House_Logos-05.png";
import arrow_down from "./imges/dashicons_arrow-down-alt2.png";
import { products } from "../products";
import './Cartpage.css'
import { Link } from "react-router-dom";
import { Allwarenty } from "./Allwarenty";
import ItemCartTab from "./ItemCartTab";

export const CartPage = (props) => {

  const cartItems = useSelector(state => state.cart.items);

const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => {
      const productDetail = products.find(product => product.id === item.productId);
      return total + (productDetail.price * item.quantity);
  }, 0);
};
useEffect(() => {
  window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
  });
}, []);
  return (
    <>
    <div className="contact-hero mt-12">

    


         <div className="filterhero">
        <p className="imgg"> < img src={logoimg} alt="" /></p>
          <h1>Cart</h1>
          <div className="cont-home">
            <Link className="link" to={'/'}>Home</Link>
            <img src={arrow_down} alt="" />
            <p>Cart</p>
          </div>
         </div>
        </div>
    <div className="cart-hero">
      <div className="left-contain">
        <div className="headings-cart">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtoatal</span>
        </div>
        <div className="it">
          {cartItems.map((item, key) => (
            <ItemCartTab key={key} data={item} />
          ))}
        </div>
      </div>
      <div className="right-contain">
            <h3>Cart Totals </h3>
            
            <div className="total">
                <p>SubTotal</p>
               <span id="sp1">${calculateTotalPrice()}</span>
            </div>
            <div className="total">
                <p>Shipping</p>
               <span id="sp2">Free</span>
            </div>
            <div className="total">
                <p>Total</p>
                <span id="sp2"> ${calculateTotalPrice()}</span>

            </div>
            <Link to='/checkout'><button>Check Out</button></Link>
      </div>
    </div>
    <Allwarenty/>
    </>
  );
};
