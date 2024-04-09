import React from 'react'
import "./Header.css";
import headerimg from "../../Assests/Header-image.png";
const Header = () => {
  return (
    <div className="header-outer mx-lg-5">
      <div>
        <div className="heading2">
          <h2>We are changing <br></br>how you solve <br></br>life's problems</h2>
        </div>
        <div className="paragraph">
          Connect with those who have first hand experience of the<br></br> same situation as you.
        </div>
        <button className="button-peer">Book a Peer Conversation </button>

        <button className="button-Support"> Join a Support Group </button>
      </div>

      <div className="home-img ">
        {/* <img src={headerimg} alt="Home image" className="home-img" /> */}
      </div>
    </div>

  )
}

export default Header
