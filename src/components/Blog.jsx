import React,{useEffect} from "react";
import logoimg from "./imges/Meubel House_Logos-05.png";
import arrow_down from "./imges/dashicons_arrow-down-alt2.png";
import catagory from "./imges/Rectangle 68.png";
import people from "./imges/people.png";
import date from "./imges/uis_calender.png";
import wood from "./imges/ci_tag.png";
import postimage1 from './imges/Rectangle 69.png'
import postimage2 from './imges/Rectangle 69 (1).png'
import postimage3 from './imges/Rectangle 69 (2).png'
import postimage4 from './imges/Rectangle 69 (3).png'
import postimage5 from './imges/Rectangle 69 (4).png'
import "./Contact.css";
import { Link } from "react-router-dom";
import "./blog.css";
import { Allwarenty } from "./Allwarenty";
import Footer from "./Footer";
export const Blog = () => {

    const postdata=[
        {
            image:postimage1,
            heading: 'Going all-in with millennial design',
            date :'03 Aug 2022',
        }, {
            image:postimage2,
            heading: 'Going all-in with millennial design',
            date :'03 Aug 2022',
        }, {
            image:postimage3,
            heading: 'Going all-in with millennial design',
            date :'03 Aug 2022',
        },
        {
            image:postimage4,
            heading: 'Going all-in with millennial design',
            date :'03 Aug 2022',
        },
        {
            image:postimage5,
            heading: 'Going all-in with millennial design',
            date :'03 Aug 2022',
        }
    ];
    useEffect(() => {
      window.scrollTo({
          top:0,
          left:0,
          behavior: "smooth"
      });
    }, []);
  return (
    <>
      <div className="blog-main mt-12">
        <div className="contact-hero">
          <div className="filterhero">
            <p className="imgg">
              {" "}
              <img src={logoimg} alt="" />
            </p>
            <h1>Blog</h1>
            <div className="cont-home">
              <Link className="link" to={"/"}>
                Home
              </Link>
              <img src={arrow_down} alt="" />
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div className="blog-section2">
          <div className="section-catagory">
            <div>
              <img className="img" src={catagory} alt="" />
              <div className="main-cat">
                <div className="cat-data">
                  <img src={people} alt="" />
                  <p>Admin</p>
                </div>
                <div className="cat-data">
                  <img src={date} alt="" />
                  <p>Admin</p>
                </div>
                <div className="cat-data">
                  <img src={wood} alt="" />
                  <p>Admin</p>
                </div>
              </div>
            </div>
            <div className="catagory">
              <input type="text" />
              <h3>Catagory</h3>
              <div className="catgaries">
                <p>Crafts </p>
                <span>2</span>
              </div>
              <div className="catgaries">
                <p>Crafts </p>
                <span>2</span>
              </div>
              <div className="catgaries">
                <p>Crafts </p>
                <span>2</span>
              </div>
            </div>
          </div>
          <div className="section-catagory sct">
            <div className="Going">
              <h1>Going all-in with millennial design</h1>
              <div className="divp">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <button>load more</button>
             <div className="imagehead">
             <img className="img" src={catagory} alt="" />
              <div className="main-cat">
                <div className="cat-data">
                  <img src={people} alt="" />
                  <p>Admin</p>
                </div>
                <div className="cat-data">
                  <img src={date} alt="" />
                  <p>Admin</p>
                </div>
                <div className="cat-data">
                  <img src={wood} alt="" />
                  <p>Admin</p>
                </div>
              </div>
             </div>
            </div>
            <div className="catagory catposts">
              
              <h3>Recent Posts</h3>
             {postdata.map((postdata)=>(                    
                 <div className="catgariess">
                     <img src={postdata.image} alt="" />
                     <div className="postdata">
                         <p>{postdata.heading}</p>
                         <p className="d2">{postdata.date}</p>
                     </div>
                   </div>
             ))}
              
            </div>
          </div>
        </div>
        <div className="Going gt2">
              <h1>Going all-in with millennial design</h1>
              <div className="divp">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <button>load more</button>
             <div className="imagehead">
             <img className="img" src={catagory} alt="" />
              <div className="main-cat">
                <div className="cat-data">
                  <img src={people} alt="" />
                  <p>Admin</p>
                </div>
                <div className="cat-data">
                  <img src={date} alt="" />
                  <p>Admin</p>
                </div>
                <div className="cat-data">
                  <img src={wood} alt="" />
                  <p>Admin</p>
                </div>
              </div>
             </div>
            </div>

            <div className="Going gt2">
              <h1 id="h2">Going all-in with millennial design</h1>
              <div className="divp">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
             </div>
            <div className="bttns">
                <button className="btns">1</button>
                <button className="btnss">2</button>
                <button className="btnss">3</button>
                <button className="btnss">Next</button>
            </div>
            <Allwarenty/>
            <Footer/>

          </div>
    </>
  );
};
