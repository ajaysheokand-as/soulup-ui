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
        <div className='navbarup'>
            <div className='nav-heading'>
                Soul<span className='up-heading'>Up</span>
            </div>
            <div className='nav-itemsup'>
                <div className='nav-itemup mouse-pointer' onMouseOver={()=>{dhandler('d1',true)}} onMouseOut={()=>{dhandler('d1',false)}}>
                    Support Groups
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d1 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-itemup' onMouseOver={()=>{subDhandler('sd1',true)}} onMouseOut={()=>{subDhandler('sd1',false)}}>
                            <div className='d-item-1'>Sport Groups</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd1 ?'d-sub-drop' :'dropdown-hidden'}>
                                <div className='mouse-pointer dropdown-itemup'>All SoulUp Groups</div>
                                <div className='dropdown-itemup' onMouseOver={()=>{sub2Dhandler('s2d1',true)}} onMouseOut={()=>{sub2Dhandler('s2d1',false)}}>
                                    <div>
                                        <div>
                                            Long Running Groups
                                        </div>
                                        <button className='peer-1000-btn'>New</button>
                                    </div> 
                                    <div><i class="fa-solid fa-angle-right"></i></div> 
                                    <div className={sub2d.s2d1 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-itemup '>Women unfiltered</div>
                                        <div className='mouse-pointer dropdown-itemup'>Teens' Resilience Gropu</div>
                                        <div className='mouse-pointer dropdown-itemup'>Porn Addiction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='dropdown-itemup ' onMouseOver={()=>{subDhandler('sd2',true)}} onMouseOut={()=>{subDhandler('sd2',false)}}>
                            <div>Sport Groups in Mar</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd2 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-itemup '>Divorce or Separation</div>
                                <div className='mouse-pointer dropdown-itemup'>Arranged Marriage Search</div>
                                <div className='mouse-pointer dropdown-itemup'>Dealing with Anxiety</div>
                                <div className='mouse-pointer dropdown-itemup'>Overcoming Dating Fatigue</div>
                                <div className='mouse-pointer dropdown-itemup'>Practical Bhagavad Gita</div>
                            </div>
                        </div>
                        <div className='dropdown-itemup mouse-pointer' onMouseOver={()=>{subDhandler('sd3',true)}} onMouseOut={()=>{subDhandler('sd3',false)}}>
                            <div>Groups For Medical Issues</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd3 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-itemup '>Cancer Support Group</div>
                                <div className='mouse-pointer dropdown-itemup'>Fertility Support Group</div>
                                <div className='mouse-pointer dropdown-itemup'>Support for Caregivers</div>
                                <div className='mouse-pointer dropdown-itemup'>Chronic Back Pain Support</div>
                                <div className='mouse-pointer dropdown-itemup'>Living with Parkinson's</div>
                                <div className='mouse-pointer dropdown-itemup'>All Medical Groups</div>
                            </div>
                        </div>
                        <div className='dropdown-itemup' onMouseOver={()=>{subDhandler('sd4',true)}} onMouseOut={()=>{subDhandler('sd4',false)}}>
                            <div>
                                Unique Groups
                                <div className='exception-item'>
                                    <div >Access Group that are hard to find elsewhere!</div>
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                </div>
                            </div>
                            <div className={dsub.sd4 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-itemup '>Practical Bhagavad Gita</div>
                                <div className='mouse-pointer dropdown-itemup'>Caregiver Stress</div>
                                <div className='mouse-pointer dropdown-itemup'><div>Borderline Personality Disorder <button className='peer-1000-btn'>New</button></div></div>
                                <div className='mouse-pointer dropdown-itemup'><div>Contemplating Divorce <button className='peer-1000-btn'>New</button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-itemup' onMouseOver={()=>{dhandler('d2',true)}} onMouseOut={()=>{dhandler('d2',false)}}>
                    Peer Calls
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d2 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-itemup mouse-pointer'>
                            <div>All SoulUp Peers</div>
                            {/* <div><i class="fa-solid fa-angle-right"></i></div> */}
                        </div>
                        <div className='dropdown-itemup' onMouseOver={()=>{subDhandler('sd2',true)}} onMouseOut={()=>{subDhandler('sd2',false)}}>
                            <div>Peer By Category</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd2 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-itemup '>Mental Health</div>
                                <div className='mouse-pointer dropdown-itemup'>Relationships</div>
                                <div className='mouse-pointer dropdown-itemup'>Health Issues</div>
                                <div className='mouse-pointer dropdown-itemup'>Self growth</div>
                                <div className='mouse-pointer dropdown-itemup'>Career/Work</div>
                                <div className='mouse-pointer dropdown-itemup'>Family/Friends</div>
                                <div className='mouse-pointer dropdown-itemup'>Loss/Grief</div>
                                <div className='mouse-pointer dropdown-itemup'>Kids/Parenting</div>
                            </div>
                        </div>
                        <div className='dropdown-itemup' onMouseOver={()=>{subDhandler('sd3',true)}} onMouseOut={()=>{subDhandler('sd3',false)}}>
                            <div>Peer Programs @INR 1000 <button className='peer-1000-btn'>New</button></div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd3 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-itemup '>Epilepsy Peer Program</div>
                                <div className='mouse-pointer dropdown-itemup'>Cancer Peer Program</div>
                            </div>
                        </div>
                        <div className='dropdown-itemup mouse-pointer'>
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
                <div className='nav-itemup' onMouseOver={()=>{dhandler('d3',true)}} onMouseOut={()=>{dhandler('d3',false)}}>
                    Therapy
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d3 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-itemup mouse-pointer'>
                            <div>1 to 1 Talk Therapy</div>
                            {/* <div><i class="fa-solid fa-angle-right"></i></div> */}
                            <div></div>
                        </div>
                        <div className='dropdown-itemup' onMouseOver={()=>{subDhandler('sd3',true)}} onMouseOut={()=>{subDhandler('sd3',false)}}>
                            <div>Specialised Therapy</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd3 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='mouse-pointer dropdown-itemup '>Family Therapy</div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='nav-itemup' onMouseOver={()=>{dhandler('d4',true)}} onMouseOut={()=>{dhandler('d4',false)}}>
                    Free Resources
                    <div className='down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                    <div className={d.d4 ?'dropdown-show' :'dropdown-hidden'}>
                        <div className='dropdown-itemup' onMouseOver={()=>{subDhandler('sd4',true)}} onMouseOut={()=>{subDhandler('sd4',false)}}>
                            <div>Self-Assessments</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                            <div className={dsub.sd4 ?'d-sub-drop':'dropdown-hidden'} >
                                <div className='dropdown-itemup' onMouseOver={()=>{sub2Dhandler('s2d1',true)}} onMouseOut={()=>{sub2Dhandler('s2d1',false)}}>
                                    Mental Health
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d1 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-itemup'><div>Social Anxiety <button className='peer-1000-btn'>New</button></div></div>
                                        <div className='mouse-pointer dropdown-itemup'>Emotional Regulation</div>
                                        <div className='mouse-pointer dropdown-itemup'>Anxiety</div>
                                        <div className='mouse-pointer dropdown-itemup'>Overthinking</div>
                                        <div className='mouse-pointer dropdown-itemup'>ADHD</div>
                                        <div className='mouse-pointer dropdown-itemup'>Depression</div>
                                        <div className='mouse-pointer dropdown-itemup'>Trauma</div>
                                        <div className='mouse-pointer dropdown-itemup'>Partner with Depression</div>
                                        <div className='mouse-pointer dropdown-itemup'>Borderline Personality Disorder</div>
                                    </div>
                                </div>
                                <div className='dropdown-itemup' onMouseOver={()=>{sub2Dhandler('s2d2',true)}} onMouseOut={()=>{sub2Dhandler('s2d2',false)}}>
                                    Relationships
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d2 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-itemup'>Dating Fatigue</div>
                                        <div className='mouse-pointer dropdown-itemup'>Romantic Relationships</div>
                                        <div className='mouse-pointer dropdown-itemup'>Narcissistic Abuse</div>
                                        <div className='mouse-pointer dropdown-itemup'>Partner with Depression</div>
                                    </div>
                                </div>
                                <div className='dropdown-itemup' onMouseOver={()=>{sub2Dhandler('s2d3',true)}} onMouseOut={()=>{sub2Dhandler('s2d3',false)}}>
                                    Life Decisions/Lifestyle
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d3 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-itemup'>Going Childfree</div>
                                        <div className='mouse-pointer dropdown-itemup'>Arranged Marriage Search</div>
                                        <div className='mouse-pointer dropdown-itemup'>Spirituality in Daily Life</div>
                                        <div className='mouse-pointer dropdown-itemup'>Embracing Ageing</div>
                                    </div>
                                </div>
                                <div className='dropdown-itemup' onMouseOver={()=>{sub2Dhandler('s2d4',true)}} onMouseOut={()=>{sub2Dhandler('s2d4',false)}}>
                                    Personality/Behaviour
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d4 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-itemup'><div>Social Anxiety <button className='peer-1000-btn'>New</button></div></div>
                                        <div className='mouse-pointer dropdown-itemup'>Sleep Issues</div>
                                        <div className='mouse-pointer dropdown-itemup'>Eating Disorder</div>
                                        <div className='mouse-pointer dropdown-itemup'>Narcissistic Personality</div>
                                        <div className='mouse-pointer dropdown-itemup'>Porn Addiction</div>
                                    </div>
                                </div>
                                <div className='dropdown-itemup' onMouseOver={()=>{sub2Dhandler('s2d5',true)}} onMouseOut={()=>{sub2Dhandler('s2d5',false)}}>
                                    Impact of Health Issues
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                    <div className={sub2d.s2d5 ?'d-sub-drop':'dropdown-hidden'} >
                                        <div className='mouse-pointer dropdown-itemup'>Chronic Health Issues</div>
                                        <div className='mouse-pointer dropdown-itemup'>Caregiver Stress</div>
                                        <div className='mouse-pointer dropdown-itemup'>Impact of Fertility Journey</div>
                                    </div>
                                </div>
                                <div className='mouse-pointer dropdown-itemup'>Overall Emotional Health</div>
                            </div>
                        </div>
                        <div className='dropdown-itemup mouse-pointer'>
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
                <div className='nav-itemup mouse-pointer'>
                    Apply as Peer
                </div>
            </div>
            <div className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></div>

        </div>
    </>
  )
}

export default Navbar
