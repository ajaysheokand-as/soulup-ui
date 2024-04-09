import React, { useEffect } from 'react'
import "./PopUp.css";
import { useState } from 'react';
const PopUp = () => {
  const[showPopup,setShowPopup]=useState(false);
  const [action, setAction] = useState("Log In");
  useEffect(()=>{setTimeout(()=>{setShowPopup(true)},2000)},[])
  const [heading,setHeading]=useState("Sign Up")
  return (
    <>
    <div className={showPopup ?'hidden' :'floating-btn'}>
    <div className='float-btn'>
      <div className='row'>
        <div className='col-lg-7 m-2 m-lg-0'>
        <button type="button" class="btn btn-outline-success " onClick={()=>{setHeading("Sign Up"); setShowPopup('true')}}>Sign Up</button>
        </div>
        <div className='col-lg-5 m-2 m-lg-0'>
          <button type="button" class="btn btn-outline-info"  onClick={()=>{setHeading("Login");setShowPopup('true')}}>Login</button>
        </div>
      </div>
    </div>
    </div>
    <div className={showPopup ?'popup-outr' :'hidden'}>
     <div className='col-sm-6'>
     <div className=' popupbox bg-primary-subtle w-100  popup'>
        <div className='row ist-row'>
        <div className='col-12 '>
          <button type="button" class="btn btn-outline-danger x-btn" onClick={()=>{setShowPopup(false);}}>X</button>
        </div>
        </div>
      <div className='row p-3'>
        <div className='col-12 text-center fs-1 fw-bold'>
            {heading}
        </div>
        <div className='row mt-3'>
          <div className='col-lg-12 m-2 d-flex justify-content-center'>
            <input type='text' placeholder="Enter e-mail" className='fs-3 rounded-5 px-lg-5' style={{height:'4rem'}}/>
          </div>
        </div>
        <div className='row mt-3'>  
          <div className='12 m-2 d-flex justify-content-center'>
            <input type='text' placeholder="Enter password" className='fs-3 rounded-5 px-lg-5' style={{height:'4rem'}}/>
          </div>
        </div>
       
      <div className='row d-flex justify-content-center flex-wrap mt-3 mb-4'>
        <div className='col-sm-3 m-3 d-flex justify-content-center'>
          <button type="button" class="btn btn-outline-primary p-3 fs-4" onClick={()=>{setHeading("Sign Up")}}>Sign Up</button>
        </div>
        <div className='col-sm-3  m-3 d-flex justify-content-center'>
          <button type="button" class="btn btn-outline-primary p-3 fs-4" onClick={()=>{setHeading("Login")}}>Login</button>
        </div>
      </div>  
      </div>
      </div>
     
     </div>
    </div>
    </>
  )
}

export default PopUp
