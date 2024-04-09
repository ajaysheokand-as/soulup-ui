import React from 'react'
import "./AllSoulUpPeers1.css";
import Text from "../../Assests/Text-img.jpg";
const AllSoulUpPeers1 = () => {
    return (
        <div className="containerone">
      <div className='contentone'>
        <div className="Headingall">
          <h2>All Soul Peers</h2>
        </div>
        <div className="paragraph1">
         <p> Have 1-on-1video call with'Peers' who have overcome<strong> the same<br></br> challenge</strong> you may be dealing with it.
        </p>
        </div>
        <button className="btn1">Recommand a Peer </button>

       
      </div>

      <div className="pic">
        { <img src={Text} alt="Textimg" className="pic" /> }
      </div>
    </div>

    )
}

export default AllSoulUpPeers1
