import React,{useEffect} from 'react'
import logoimg from "./imges/Meubel House_Logos-05.png";
import image5 from './imges/Product_imges/Image 5.png'
import arrow_down from "./imges/dashicons_arrow-down-alt2.png";
import { Link } from "react-router-dom";
import stars from './imges/Group 88.png'
import { Allwarenty } from './Allwarenty';
import './comparsion.css'
import Footer from './Footer';
export const Comparison = () => {
    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        });
      }, []);
  return (
   <>
    <div className="comparison-hero mt-12">
        <div className="contact-hero ">
          <div className="filterhero">
            <p className="imgg">
              <img src={logoimg} alt="" />
            </p>
            <h1 id='hy'>Product Comparison</h1>
            <div className="cont-home">
              <Link className="link" to={"/"}>
                Home
              </Link>
              <img src={arrow_down} alt="" />
              <p>Comparison</p>
            </div>
          </div>
        </div>
        <div className="comparison-section2">
            <div className="comp-product">
                <div className="comp-head">
                    <p>
                    Go to Product page for more 
                    Products
                    </p>
                    <button>View more </button>
                </div>
                <div className="comp-product1">
                    <img className='image1-comp' src={image5} alt="" />
                    <h4>Asgoard Sofa </h4>
                    <p>250$</p>
                    <p id='starrr' ><span>4.7</span> <img src={stars} id='star' alt="" />| <span id='sprev'>204 reviews</span></p>
                </div>
                <div className="comp-product2">
                    <img className='image1-comp' src={image5} alt="" />
                    <h4>Asgoard Sofa </h4>

                    <p>250$</p>
                    <p id='starrr'><span>4.7</span> <img src={stars} id='star' alt="" />| <span id='sprev'>204 reviews</span></p>
                </div>
                <div className="comp-pro">
                    <p id='add'>Add A Product</p>
                    <button><p>Choose A product</p><p class="icon">^</p></button>
                </div>

            </div>
            <hr />
            <div className="comp-product gen">
                <div className="general crr">
                    <h1>General</h1> 
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                </div>
                <hr id='hr1'/>
                <div className="selected crr">
                    <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                </div>
                <div className="three-seater crr">
                   <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />

                </div>
                <div>

                </div>
            </div>
            <div className="comp-product prod">
                <div className="general g2">
                    <h1>Product</h1> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                </div>
                <div className="selected">
                    <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                </div>
                <div className="three-seater">
                   <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />

                </div>
                <div>

                </div>
            </div>
             <div className="comp-product dimen">
                <div className="general">
                    <h1>Dimensions</h1> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                </div>
                <div className="selected">
                    <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                </div>
                <div className="three-seater">
                   <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />

                </div>
                <div>

                </div>
            </div>
            <div className="comp-product warr">
                <div className="general">
                    <h1>Warrenty</h1> <br />
                    <p>Warranty Summary</p> <br />
                    <p>Warranty Service 
                    Type</p> <br />
                    <p>Covered in Warranty</p> <br />
                    <p>Not Covered in Warranty</p> <br />
                    <p>Domestic Warrantyr</p> <br />
                  
                </div>
                <div className="selected">
                    <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                <button className='bttn'>add to cart</button>

                </div>
                <div className="three-seater">
                   <br /> <br />
                    <p>Sales Package</p> <br />
                    <p>Secondary Material</p> <br />
                    <p>Configuration</p> <br />
                    <p>Upholstery Material</p> <br />
                    <p>Upholstery Color</p> <br />
                    <p>Upholstery Color</p> <br />
                <button className='bttn'>add to cart</button>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <Allwarenty/>
   <Footer/>
   </>
  )
}
