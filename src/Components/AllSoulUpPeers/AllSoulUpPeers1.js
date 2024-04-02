import React from 'react'
import "./AllSoulUpPeers1.css";
import Text from "../../Assests/Text-img.jpg";
const AllSoulUpPeers1 = () => {
  return (
    <div classname="container">
       
            <div className='Heading'>
                <h2>All SoulUp Peers</h2>

                <div className='Title'>
                <p>
                Have 1-on-1 video call with 'Peers' who have overcome 
                <strong>the same challenge</strong>
                you may be dealing with it.
                </p>
                <div className='btn1'>
                    <button>Recommond a Peer</button>
                </div>
            </div>
            < div className='img1'>
            <img src={Text} alt="Text-img2" className="home-img" />
      
            </div>


            </div>

        
      
    </div>
  )
}

export default AllSoulUpPeers1
