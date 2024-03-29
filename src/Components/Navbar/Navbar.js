import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [d,setD]=useState({
        d1:false,
        d2:false,
        d3:false,
        d4:false
    })

    const [dsub,setDsub]=useState({
        sd1:false,
        sd2:false,
        sd3:false,
        sd4:false
    })

    const [sub2d,setSub2d]=useState({
        s2d1:false,
        s2d2:false,
        s2d3:false,
        s2d4:false,
        s2d5:false,
    })
    const dhandler=(key,value)=>{
        setD(prevState=>({...prevState,[key]:value}));
    }

    const subDhandler=(key,value)=>{
        setDsub(prevState=>({...prevState,[key]:value}));
    }

    const sub2Dhandler=(key,value)=>{
        setSub2d(prevState=>({...prevState,[key]:value}));
    }
  return (
    <>  
        <div className='navbar'>
            <div className='nav-heading'>
                Soul<span className='up-heading'>Up</span>
            </div>
            <div className='nav-items'>
                <div className='nav-item mouse-pointer' onMouseOver={()=>{dhandler('d1',true)}} onMouseOut={()=>{dhandler('d1',false)}}>
                    Support Groups
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d1 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-item' onMouseOver={()=>{subDhandler('sd1',true)}} onMouseOut={()=>{subDhandler('sd1',false)}}>
                            <div className='d-item-1'>Sport Groups</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd1 ?'d-sub-drop' :'dropdown-hidden'}>
                                <div className='mouse-pointer dropdown-item'>All SoulUp Groups</div>
                                <div className='dropdown-item' onMouseOver={()=>{sub2Dhandler('s2d1',true)}} onMouseOut={()=>{sub2Dhandler('s2d1',false)}}>
                                    <div>
                                        <div>
                                            Long Running Groups
                                        </div>
                                        <button className='peer-1000-btn'>New</button>
                                    </div> 
                                    <div><i class="fa-solid fa-angle-right"></i></div> 
                                    <div className={sub2d.s2d1 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-item '>Women unfiltered</div>
                                        <div className='mouse-pointer dropdown-item'>Teens' Resilience Gropu</div>
                                        <div className='mouse-pointer dropdown-item'>Porn Addiction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='dropdown-item ' onMouseOver={()=>{subDhandler('sd2',true)}} onMouseOut={()=>{subDhandler('sd2',false)}}>
                            <div>Sport Groups in Mar</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd2 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-item '>Divorce or Separation</div>
                                <div className='mouse-pointer dropdown-item'>Arranged Marriage Search</div>
                                <div className='mouse-pointer dropdown-item'>Dealing with Anxiety</div>
                                <div className='mouse-pointer dropdown-item'>Overcoming Dating Fatigue</div>
                                <div className='mouse-pointer dropdown-item'>Practical Bhagavad Gita</div>
                            </div>
                        </div>
                        <div className='dropdown-item mouse-pointer' onMouseOver={()=>{subDhandler('sd3',true)}} onMouseOut={()=>{subDhandler('sd3',false)}}>
                            <div>Groups For Medical Issues</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd3 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-item '>Cancer Support Group</div>
                                <div className='mouse-pointer dropdown-item'>Fertility Support Group</div>
                                <div className='mouse-pointer dropdown-item'>Support for Caregivers</div>
                                <div className='mouse-pointer dropdown-item'>Chronic Back Pain Support</div>
                                <div className='mouse-pointer dropdown-item'>Living with Parkinson's</div>
                                <div className='mouse-pointer dropdown-item'>All Medical Groups</div>
                            </div>
                        </div>
                        <div className='dropdown-item' onMouseOver={()=>{subDhandler('sd4',true)}} onMouseOut={()=>{subDhandler('sd4',false)}}>
                            <div>
                                Unique Groups
                                <div className='exception-item'>
                                    <div>Access Group that are hard to find elsewhere!</div>
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                </div>
                            </div>
                            <div className={dsub.sd4 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-item '>Practical Bhagavad Gita</div>
                                <div className='mouse-pointer dropdown-item'>Caregiver Stress</div>
                                <div className='mouse-pointer dropdown-item'><div>Borderline Personality Disorder <button className='peer-1000-btn'>New</button></div></div>
                                <div className='mouse-pointer dropdown-item'><div>Contemplating Divorce <button className='peer-1000-btn'>New</button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-item' onMouseOver={()=>{dhandler('d2',true)}} onMouseOut={()=>{dhandler('d2',false)}}>
                    Peer Calls
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d2 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-item mouse-pointer'>
                            <div>All SoulUp Peers</div>
                            {/* <div><i class="fa-solid fa-angle-right"></i></div> */}
                        </div>
                        <div className='dropdown-item' onMouseOver={()=>{subDhandler('sd2',true)}} onMouseOut={()=>{subDhandler('sd2',false)}}>
                            <div>Peer By Category</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd2 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-item '>Mental Health</div>
                                <div className='mouse-pointer dropdown-item'>Relationships</div>
                                <div className='mouse-pointer dropdown-item'>Health Issues</div>
                                <div className='mouse-pointer dropdown-item'>Self growth</div>
                                <div className='mouse-pointer dropdown-item'>Career/Work</div>
                                <div className='mouse-pointer dropdown-item'>Family/Friends</div>
                                <div className='mouse-pointer dropdown-item'>Loss/Grief</div>
                                <div className='mouse-pointer dropdown-item'>Kids/Parenting</div>
                            </div>
                        </div>
                        <div className='dropdown-item' onMouseOver={()=>{subDhandler('sd3',true)}} onMouseOut={()=>{subDhandler('sd3',false)}}>
                            <div>Peer Programs @INR 1000 <button className='peer-1000-btn'>New</button></div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd3 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-item '>Epilepsy Peer Program</div>
                                <div className='mouse-pointer dropdown-item'>Cancer Peer Program</div>
                            </div>
                        </div>
                        <div className='dropdown-item mouse-pointer'>
                            <div>
                                Featured Peers
                                <div className='exception-item'>
                                    <div>Peers handpicked based on strength of their profile.</div>
                                    {/* <div><i class="fa-solid fa-angle-right"></i></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-item' onMouseOver={()=>{dhandler('d3',true)}} onMouseOut={()=>{dhandler('d3',false)}}>
                    Therapy
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d3 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-item mouse-pointer'>
                            <div>1 to 1 Talk Therapy</div>
                            {/* <div><i class="fa-solid fa-angle-right"></i></div> */}
                            <div></div>
                        </div>
                        <div className='dropdown-item' onMouseOver={()=>{subDhandler('sd3',true)}} onMouseOut={()=>{subDhandler('sd3',false)}}>
                            <div>Specialised Therapy</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd3 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-item '>Family Therapy</div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='nav-item' onMouseOver={()=>{dhandler('d4',true)}} onMouseOut={()=>{dhandler('d4',false)}}>
                    Free Resources
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d4 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-item' onMouseOver={()=>{subDhandler('sd4',true)}} onMouseOut={()=>{subDhandler('sd4',false)}}>
                            <div>Self-Assessments</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd4 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='dropdown-item' onMouseOver={()=>{sub2Dhandler('s2d1',true)}} onMouseOut={()=>{sub2Dhandler('s2d1',false)}}>
                                    Mental Health
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d1 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-item'><div>Social Anxiety <button className='peer-1000-btn'>New</button></div></div>
                                        <div className='mouse-pointer dropdown-item'>Emotional Regulation</div>
                                        <div className='mouse-pointer dropdown-item'>Anxiety</div>
                                        <div className='mouse-pointer dropdown-item'>Overthinking</div>
                                        <div className='mouse-pointer dropdown-item'>ADHD</div>
                                        <div className='mouse-pointer dropdown-item'>Depression</div>
                                        <div className='mouse-pointer dropdown-item'>Trauma</div>
                                        <div className='mouse-pointer dropdown-item'>Partner with Depression</div>
                                        <div className='mouse-pointer dropdown-item'>Borderline Personality Disorder</div>
                                    </div>
                                </div>
                                <div className='dropdown-item' onMouseOver={()=>{sub2Dhandler('s2d2',true)}} onMouseOut={()=>{sub2Dhandler('s2d2',false)}}>
                                    Relationships
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d2 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-item'>Dating Fatigue</div>
                                        <div className='mouse-pointer dropdown-item'>Romantic Relationships</div>
                                        <div className='mouse-pointer dropdown-item'>Narcissistic Abuse</div>
                                        <div className='mouse-pointer dropdown-item'>Partner with Depression</div>
                                    </div>
                                </div>
                                <div className='dropdown-item' onMouseOver={()=>{sub2Dhandler('s2d3',true)}} onMouseOut={()=>{sub2Dhandler('s2d3',false)}}>
                                    Life Decisions/Lifestyle
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d3 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-item'>Going Childfree</div>
                                        <div className='mouse-pointer dropdown-item'>Arranged Marriage Search</div>
                                        <div className='mouse-pointer dropdown-item'>Spirituality in Daily Life</div>
                                        <div className='mouse-pointer dropdown-item'>Embracing Ageing</div>
                                    </div>
                                </div>
                                <div className='dropdown-item' onMouseOver={()=>{sub2Dhandler('s2d4',true)}} onMouseOut={()=>{sub2Dhandler('s2d4',false)}}>
                                    Personality/Behaviour
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d4 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-item'><div>Social Anxiety <button className='peer-1000-btn'>New</button></div></div>
                                        <div className='mouse-pointer dropdown-item'>Sleep Issues</div>
                                        <div className='mouse-pointer dropdown-item'>Eating Disorder</div>
                                        <div className='mouse-pointer dropdown-item'>Narcissistic Personality</div>
                                        <div className='mouse-pointer dropdown-item'>Porn Addiction</div>
                                    </div>
                                </div>
                                <div className='dropdown-item' onMouseOver={()=>{sub2Dhandler('s2d5',true)}} onMouseOut={()=>{sub2Dhandler('s2d5',false)}}>
                                    Impact of Health Issues
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d5 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-item'>Chronic Health Issues</div>
                                        <div className='mouse-pointer dropdown-item'>Caregiver Stress</div>
                                        <div className='mouse-pointer dropdown-item'>Impact of Fertility Journey</div>
                                    </div>
                                </div>
                                <div className='mouse-pointer dropdown-item'>Overall Emotional Health</div>
                            </div>
                        </div>
                        <div className='dropdown-item mouse-pointer'>
                            <div>
                                Emotional Support For Patients
                                <div className='exception-item'>
                                    <div>Medical Gropu Sessions <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Free <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Experts Led <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Limited slots</div>
                                    {/* <div><i class="fa-solid fa-angle-right"></i></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-item mouse-pointer'>
                    Apply as Peer
                </div>
            </div>
            <div className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></div>

        </div>
    </>
  )
}

export default Navbar
