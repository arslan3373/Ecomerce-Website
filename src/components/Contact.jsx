import React, {useState}from "react";
import logoimg from "./imges/Meubel House_Logos-05.png";
import arrow_down from "./imges/dashicons_arrow-down-alt2.png";
import { Link } from "react-router-dom";
import location from './imges/Vector.png'
import './Contact.css'
import clock from './imges/bi_clock-fill.png'
import phone from './imges/bxs_phone.png'
import { Allwarenty } from "./Allwarenty";
import Footer from './Footer'
const Contact = () => {

  const [notification, setNotification] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotification('Your form has been submitted');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setNotification('');
    }, 3000); // Hide notification after 3 seconds
  };


  return (
    <>
      <div className="contact-main mt-12">
        <div className="contact-hero">
         <div className="filterhero">
        <p className="imgg"> < img src={logoimg} alt="" /></p>
          <h1>Contact</h1>
          <div className="cont-home">
            <Link className="link" to={'/'}>Home</Link>
            <img src={arrow_down} alt="" />
            <p>Contact</p>
          </div>
         </div>
        </div>
        <div className="contact-section2">
              <div className="section-head">
                <h1>Get In Touch With Us</h1>
                <p>For More Information About Our Product & Services.
                   Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
              </div>
              <div className="section-data">
              <form className="alldata" onSubmit={handleSubmit}>
                <div className="alldata">
                  <div className="datname1">
                    <div className="address-data">
                        <div className="addr-icon">
                            <img src={location} alt="" />
                        </div>
                           <div>
                           <h3>Address</h3>
                           <p>236 5th SE Avenue, New <br /> York NY10000, United States</p>
                           </div>
                    </div>
                    <div className="name">
                      <p>Your Name </p>
                      <input type="text" name="name"  value={formData.name} onChange={handleChange} placeholder="ABC" />
                    </div>
                  </div>
                  <div className="datname1">
                  <div className="address-data">
                        <div className="addr-icon">
                            <img src={phone} alt="" />
                        </div>
                            <div>
                            <h3>Phone</h3>
                        <p>Mobile: +(84) 546-6789 8989<br />
                        Hotline: +(84) 456-6789</p>
                            </div>
                    </div>
                    
                    <div className="name">
                      <p>Email Address </p>
                      <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Abc@def.com" />
                    </div>
                  </div>
                  <div className="datname1">
                    <div className="address-data">
                        <div className="addr-icon">
                            <img src={clock} alt="" />
                        </div>
                            <div>
                            <h3>Working Time</h3>
                        <p>Monday-Friday: 9:00 - 22:00 <br />
                        Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                    </div>
                    <div className="name">
                      <p>Subject</p>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="This is an optional" />
                    </div>
                  </div>
                  <div className="datname1 mess">
                    <div className="name">
                      <p>Message </p>
                      <input type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Hi! i'd like to ask about" />
                    </div>
                  </div>
                  <button className="btn">Submit</button>
                </div>
                  </form>
              </div>
        </div>
        {notification && <div className="notification">{notification}</div>}
        <Allwarenty/>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
