import React, { useEffect } from 'react'
import "./PopUp.css";
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setformpopup } from '../Redux/Functions';
const PopUp = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const is_form_valid=email&&password;
  const dispatch=useDispatch();
  const item = useSelector((state) => (state.formpopup));
  const [showPopup, setShowPopup] = useState(null);
  useEffect(() => {
    setShowPopup(item);
  }, [item]);
  console.log("item=>", item);
  return (
    <>
      <div className={showPopup ? 'floating-btn' : 'hidden'}>
        <div className='float-btn-login'>
          <div className='row'>
            <div className='col-lg m-2 m-lg-0'>
              <button type="button" class="btn btn-outline-info" onClick={() => { setShowPopup(false);dispatch(setformpopup(false))}}>Login</button>
            </div>
          </div>
        </div>
      </div>
      <div className={showPopup ? 'hidden' : 'popup-outr'}>
        <div className='col-sm-6'>
          <div className=' popupbox bg-primary-subtle w-100  popup'>
            <div className='row ist-row'>
              <div className='col-12 '>
                <button type="button" class="btn btn-outline-danger x-btn" onClick={() => { setShowPopup(true); }}>X</button>
              </div>
            </div>
            <div className='row p-3'>
              <div className='col-12 text-center fs-1 fw-bold'>
                Login
              </div>
              <div className='row mt-3'>
                <div className='col-lg-12 m-2 d-flex justify-content-center'>
                  <input type='text' placeholder="Enter e-mail" className='outline-0 border-0 fs-lg-3 rounded-5 px-lg-5 popup-input p-2' onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-lg-12 m-2 d-flex justify-content-center'>
                  <input type='text' placeholder="Enter password" className='fs-lg-3 border-0 rounded-5 px-lg-5 popup-input p-2' onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
              </div>
              <div className='row d-lg-flex justify-content-center flex-wrap mt-3 mb-4'>

                <div className='col-sm-3  m-3 d-flex justify-content-center'>
                  <button type="button" class="btn btn-outline-primary p-3 fs-lg-4" onClick={() => {setShowPopup(true); }} disabled={!is_form_valid}>Login</button>
                </div>
              </div>
              <div className='col-lg-12 text-center'>If You don't have an Acount ? <button type="button" class="btn btn-outline-primary" onClick={()=>{setShowPopup(true);dispatch(setformpopup(true))}}>Sign Up</button></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PopUp
