import React from 'react'
import "./PopUp.css";
import { useState } from 'react';
const PopUp = () => {

    const[action,setAction] = useState("Log In");
  return (
    <div className='Boxpopup'>
        <div className=' H_3'>
            <div className='text'>{action}</div>
            <div className="underline"></div>
            <button className='delete'>X</button>

            
        </div>
      <div className="inputs">
        {action==="Log In"?<div></div>:        <div className='input'>
          <h3> User</h3> l
            <input type="text" placeholder='Enter User Name'/>

            </div>}
        
            
        <div className='input'>
       <h3>Email</h3>
            <input type="email" placeholder='Enter your Email'/>

            </div>
        <div className='input'>
           <h3>Password </h3>
            <input type="password" placeholder='Enter your Password'/>

            </div>
      </div>
      {action==="Sign Up"? <div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>
}




      <div className="submit-container">
        <div className={action ==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up </div>
        <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In </div>

      </div>
     
    </div>
  )
}

export default PopUp
