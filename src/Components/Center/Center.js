import React from 'react'
import "./Center.css";
import Group from "../../Assests/Group-img.jpg";
const Center = () => {
  return (
    <div className='container2'>
        <div className='content2'>
            <h3>
            Conversations keep you going? Subscribe!
            </h3>
        </div>
        <div className='Center'>
            <div className='Group-img'>
            <img src={Group} alt="Textimg" className="Group-img" />
            </div> 
           <div className='Center-content'>
                <div className='H_2'>
                    <div className='H_2'>
                    Pack of 3 SoulUp Conversations
                    </div> 
                </div>
                <div className='Center-list'>
                    <p>
                        What you get :
                    </p>
                    <ul>
                        <li>  3 conversations with any Peer(s)</li>
                        <li> Price INR 849 (instead of INR 1050)</li>
                        <li>  Valid for 3 months</li>
                    </ul>
                    <button className='Button1'>
                        Get 20% Off
                    </button>
                </div>
           </div>




        </div>
        <div className='Center'>
            <div className='img3'>
            <img src={Group} alt="Textimg" className="Group-img" />
            </div> 
           <div className='Center-content'>
                <div className='H_2'>
                
                    Pack of 5 SoulUp Conversations
                    
                </div>
                <div className='Center-list'>
                    <p>
                        What you get :
                    </p>
                    <ul>
                        <li>  5 conversations with any Peer(s)</li>
                        <li> Price INR 1225 (instead of INR 1750)</li>
                        <li>  Valid for 6 months</li>
                    </ul>
                    <button className='Btn2'>    
                     Get at 30% off 
                    </button>
                </div>
           </div>



        </div>
      
    </div>
  )
}

export default Center
