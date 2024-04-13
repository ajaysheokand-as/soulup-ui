import React, { useEffect } from 'react'
import "./PopUp.css";
import { useState } from 'react';
import {setformpopup} from '../Redux/Functions'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const SignUp_PopUp = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const is_form_valid=username&&email&&password;
    const [showSignupPopup, setShowSignupPopup] = useState(false);
    const [action, setAction] = useState("Log In");
    const item = useSelector((state) => (state.formpopup))
    const dispatch=useDispatch();

    useEffect(() => { setTimeout(() => { 
        setShowSignupPopup(item);
     }, 2000) }, [])

    useEffect(()=>{setShowSignupPopup(item)},[item]);
    return (
        <>
            <div className={showSignupPopup ? 'hidden' : 'floating-btn'}>
                <div className='float-btn-signup'>
                    <div className='row'>
                        <div className='col-lg m-2 m-lg-0'>
                            <button type="button" class="btn btn-outline-success " onClick={() => {dispatch(setformpopup(true));setShowSignupPopup(false)}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={showSignupPopup ? 'popup-outr' : 'hidden'}>
                <div className='col-sm-6'>
                    <div className=' popupbox bg-primary-subtle w-100  popup'>
                        <div className='row ist-row'>
                            <div className='col-12 '>
                                <button type="button" class="btn btn-outline-danger x-btn" onClick={() => { setShowSignupPopup(false); }}>X</button>
                            </div>
                        </div>
                        <div className='row p-3'>
                            <div className='col-12 text-center fs-1 fw-bold'>
                                Sign Up
                            </div>
                            <form>
                            <div className='row mt-3'>
                                <div className='col-lg-12 m-2 d-flex justify-content-center'>
                                    <input type='text' placeholder="Enter Username" className='fs-lg-3 border-0 rounded-5 px-lg-5 popup-input p-2' onChange={(e)=>{setUsername(e.target.value)}} required />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-12 m-2 d-flex justify-content-center'>
                                    <input type='email' placeholder="Enter e-mail" className='outline-0 border-0 fs-lg-3 rounded-5 px-lg-5 popup-input p-2' onChange={(e)=>{setEmail(e.target.value)}} required />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-12 m-2 d-flex justify-content-center'>
                                    <input type='password' placeholder="Enter password" className='fs-lg-3 border-0 rounded-5 px-lg-5 popup-input p-2'  onChange={(e)=>{setPassword(e.target.value)}} required/>
                                </div>
                            </div>
                            <div className='row d-lg-flex justify-content-center flex-wrap mt-3 mb-4'>
                                <div className='col-sm-3 m-3 d-flex justify-content-center'>
                                    <button type="button" class="btn btn-outline-primary p-3 fs-lg-4" onClick={() => {setShowSignupPopup(false); dispatch(setformpopup(false));}} disabled={!is_form_valid}>Sign Up</button>
                                </div>

                            </div>
                            </form>
                            <div className='col-lg-12 text-center mb-3'>
                                if You Already Have An Account ? <button type="button" class="btn btn-outline-success" onClick={()=>{setShowSignupPopup(false);dispatch(setformpopup(false));}}>Login</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp_PopUp
