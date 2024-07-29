
import React, {  useEffect } from 'react';
import logoimg from "./imges/Meubel House_Logos-05.png";
import arrow_down from "./imges/dashicons_arrow-down-alt2.png";
import { Link } from "react-router-dom";

import './checkouts.css'

import { useSelector } from 'react-redux' 
import './Cartpage.css'
import { Allwarenty } from './Allwarenty';
import Footer from './Footer';
import ItemCheckout from './ItemCheckout';
import { products } from '../products';
export const Checkouts = (props) => {
  const carts = useSelector(store => store.cart.items);
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
     <div className="contact-main mt-12">
        <div className="contact-hero">
         <div className="filterhero">
        <p className="imgg"> < img src={logoimg} alt="" /></p>
          <h1>Checkout</h1>
          <div className="cont-home">
            <Link className="link" to={'/'}>Home</Link>
            <img src={arrow_down} alt="" />
            <p>Checkout</p>
          </div>
         </div>
        </div>
    {/* /////////////// */}
    <div className="checkout-page">
      <div className="billing-details">
        <h2>Billing details</h2>
        <form>
          <div className="input-group">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="input-group">
            <label>Company Name (Optional)</label>
            <input type="text" placeholder="Company Name" />
          </div>

          <div className="input-group">
            <label>Country / Region</label>
            <select>
              <option>Sri Lanka</option>
            </select>
          </div>

          <div className="input-group">
            <label>Street Address</label>
            <input type="text" placeholder="Street Address" />
          </div>

          <div className="input-group">
            <label>Town / City</label>
            <input type="text" placeholder="Town / City" />
          </div>

          <div className="input-group">
            <label>Province</label>
            <select>
              <option>Western Province</option>
            </select>
          </div>

          <div className="input-group">
            <label>ZIP Code</label>
            <input type="text" placeholder="ZIP Code" />
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input type="text" placeholder="Phone" />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <label>Additional Information</label>
            <textarea placeholder="Additional Information"></textarea>
          </div>
        </form>
      </div>

      <div className="order-summary">
      <div className="product-info">
        <div id='total'>
        <h2>Product</h2>
        <h2>SubTotal</h2>
        </div>
          
        </div>
      <div className='p-5'>
            {carts.map((item, key) => 
                <ItemCheckout key={key} data={item}/>
            )}
             <div className="total">
            <span>Total</span>
            <span className="total-amount"> ${calculateTotalPrice()}</span>
          </div>
        </div>
        <div className="payment-method">
          <label>
            <input type="radio" name="payment" checked readOnly />
            Direct Bank Transfer
          </label>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <label id='label'>
            <input type="radio" name="payment" />
            Direct Bank Transfer
          </label>
          <label>
            <input type="radio" name="payment" />
            Cash On Delivery
          </label>
        </div>
        <p className="privacy-policy">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a href="/">privacy policy</a>.
        </p>
        <div className="bty"><button className="place-order" >Place order</button></div>
        
      </div>
    </div>
    <Allwarenty/>
    <Footer/>
    </div>
    </>
  )
}
