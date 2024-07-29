import React,{useEffect} from 'react'

import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  useEffect(() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    
     <div className="footer">
        <div className="footer-uni">
          <h1 className='h11'>Funiro.</h1>
          <p>
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="allsamecss footer-links">
          <h1 className="sametarget">Links</h1>
          <Link to='/'><p>Home </p></Link>
          <Link to='/shop'><p>Shop</p></Link>
          <Link to='/about'><p>About</p></Link>
         <Link to='/contact'> <p>Contact</p></Link>
        </div>
        <div className="allsamecss footer-help">
          <h1 className="sametarget">Help</h1>
          <p>Payment Options </p>
          <p>Returns </p>
          <p>Privacy policy</p>
        </div>
        <div className="allsamecss footernews">
          <h1 className="sametarget">Newspaper</h1>
          
          <div className="divemail">
            <input type="email" placeholder="Enter your Email Adress " />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="flex justify-end move-btn cursor-pointor" onClick={scrollToTop}>
          <span className="mve-bn">
            <i className="fas fa-arrow-up"></i></span></div>
        <div className="botton-line"><hr /> <p>2023 furino. All rights reverved</p></div>
       

        
    </>
  )
}
export  default Footer;