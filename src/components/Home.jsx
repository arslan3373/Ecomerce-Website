import React,{useEffect} from 'react'
import "./home.css";
import './Products.css'
import  Footer  from "./Footer";
import gallery_img1 from "./imges/gallery_img1.png";
import gallery_img2 from "./imges/gallery_img2.png";
import gallery_img3 from "./imges/gallery_img3.png";
import gallery_img4 from "./imges/gallery_img4.png";
import gallery_img5 from "./imges/gallery_img5.png";
import gallery_img6 from "./imges/gallery_img6.png";
import gallery_img7 from "./imges/gallery_img7.png";
import maskgroup from "./imges/Mask Group.png";
import imageliving from "./imges/Image-living room.png";
import maskgroup1 from "./imges/MaskGroup1.png";
import rectangle from './imges/Rectangle 24.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Homeproduct from '../pages/homeproduct';
import 'swiper/css';


import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {  FreeMode, Pagination,  } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
  }, []);
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="imgdiv"></div>
        <div className="discover">
          <p>New Arrival</p>
          <h1>
            Discover Our <br />
            New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link to='/shop'><button>BUY NOW</button></Link>
          
        </div>
      </div>
      <div className="section1">
        <div className="setion1-heading">
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="section1-spaces">
          <div className="imgg1">
            <img src={maskgroup} alt="" />
            <p>Dining</p>
          </div>
          <div className="imgg1">
            <img src={imageliving} alt="" />
            <p>Living</p>
          </div>
          <div className="imgg1">
            <img src={maskgroup1} alt="" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
      {/* product secction start */}
      <div className="product-section">
        <div className="prod-heading">
          <h1 className="head">Our Products</h1>
          <Homeproduct />
          <div className="products-btn">
          </div>
        </div>
        <div className="btnnn">
        <Link to='/shop'><button >Show More</button></Link>
        </div>
      </div>
      <div className="third-section">
      <div className="head-third">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>
      <div className="imginerrpeace mr-5">
        <img src={rectangle} alt="" />
      </div>
      
        <Swiper 
        slidesPerView={2}
        spaceBetween={100}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   // Adjust settings for viewport width 380px or less
        //   380: {
        //     spaceBetween: 20, // New space between slides when the width is 380px
        //   },
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide className="swipimg"><img src={imageliving} alt="" /></SwiperSlide>
        <SwiperSlide className="swipimg"><img src={imageliving} alt="" /></SwiperSlide>
        <SwiperSlide className="swipimg"><img src={imageliving} alt="" /></SwiperSlide>
        <SwiperSlide className="swipimg"><img src={imageliving} alt="" /></SwiperSlide>
        <SwiperSlide className="swipimg"><img src={imageliving} alt="" /></SwiperSlide>
      
      </Swiper>
     
    </div>
      {/* fourth secction start */}
     <div className="fourth_section">
     <div className="fourthhead"><p>Share your setup with</p>
      <h1>#FuniroFurniture</h1></div>
      <div class="wrapper">
      
  <div class="one"><img src={gallery_img1} alt="" /></div>
  <div class="two"><img src={gallery_img3} alt="" /></div>
  <div class="four"><img src={gallery_img6} alt="" /></div>
  <div class="five"><img src={gallery_img5} alt="" /></div>
  <div class="three"><img src={gallery_img4} alt="" /></div>
  <div class="six"><img src={gallery_img7} alt="" /></div>
  <div class="seven"><img src={gallery_img2} alt="" /></div> 
</div>
     </div>
      <hr />
      <Footer/>
    </div>
  );
};

export default Home;
