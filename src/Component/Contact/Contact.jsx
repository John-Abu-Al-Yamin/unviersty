import React from "react";
import "./Contact.css";
import contact from "../asstes/home.jpg";
import { MdCall } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section>
      <div className="container contact-container">
        <div className="contact-left">
          <div className="contact-title">
            <h3 className="orange-text">Our Contact Us</h3>
            <h1 className="primary-text">Easy to contact us</h1>
            <p className="secon-text">
              We always ready to help by providing the best services for you
            </p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="icon-card">
                <MdCall size={25} />
                <h4>Call</h4>
              </div>
                <p className="secon-text">012-0115-015</p>

              <button className="button">Call now</button>
            </div>
            <div className="contact-card">
              <div className="icon-card">
                < BsChatLeftTextFill size={25} />
                <h4>Chat</h4>
              </div>
                <p className="secon-text">012-0115-015</p>

              <button className="button">Chat now</button>
            </div>
            <div className="contact-card">
              <div className="icon-card">
                <FaVideo size={25} />
                <h4>Video Call</h4>
              </div>
                <p className="secon-text">012-0115-015</p>

              <button className="button">Video Call now</button>
            </div>
            <div className="contact-card">
              <div className="icon-card">
                <FaMessage size={25} />
                <h4>Message</h4>
              </div>
                <p className="secon-text">012-0115-015</p>

              <button className="button">Message now</button>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="image-container">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
