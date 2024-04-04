import React from "react";
import './Contact.css'
import Footer from "../Footer/Footer";

const contactUs = () => {
  return (
    <>
      {" "}
      <div class="row snipcss-VIEy2">
        <div class="col-md-6 mx-auto">
            <h1>Get in touch</h1>
          <div class="contact-form">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Message"
                  class="input_message"
                />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn_on-hover">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
