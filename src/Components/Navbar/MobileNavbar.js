import React, { useState } from 'react'
import './MobileNavbar.css'
function MobileNavbar() {
    const [sidebar,setSidebar]=useState(false);
    const go_sidebar=()=>{
        if(sidebar)
        {
            setSidebar(false);
        }
        else
        {
            setSidebar(true)
        }
    }
    
    const [allclose,setAllclose]=useState({
        sub1:false,
        sub2:false,
        sub3:false,
        sub4:false,
    })
    const [subsidebar,setSubsidebar]=useState({
        sub1:false,
        sub2:false,
        sub3:false,
        sub4:false,
    })

    const sub_sidehandler=(key,value)=>{
        setSubsidebar(prevState=>({...prevState,[key]:value}))
    }

    const [s_subsidebar,setS_subsidebar]=useState({
        sub1:false,
        sub2:false,
        sub3:false,
        sub4:false,
        sub5:false,
    })

    const s_sub_sidehandler=(key,value)=>{
        setS_subsidebar(prevState=>({...prevState,[key]:value}))
    }

    const [ss_subsidebar,setSs_subsidebar]=useState({
        sub1:false,
        sub2:false,
        sub3:false,
        sub4:false,
    })

    const ss_sub_sidehandler=(key,value)=>{
        setSs_subsidebar(prevState=>({...prevState,[key]:value}))
    }
    

    const subclose=(key)=>{
        setSubsidebar(prevState=>({...prevState,[key]:false}))
        setS_subsidebar(allclose);

    }

    const s_subclose=(key)=>{
        setS_subsidebar(prevState=>({...prevState,[key]:false}))
        setSs_subsidebar(allclose);
    }

    const ss_subclose=(key)=>{
        setSs_subsidebar(prevState=>({...prevState,[key]:false}))
    }
  return (
    <>
      <div className='m-navbar'>
            <div className='menu-icon' onClick={go_sidebar}>
                <div className={sidebar ?'hide-icon' :'icon-show'}><i class="fa-solid fa-bars" ></i></div>
                <div className={sidebar ?'icon-show' :'hide-icon'}><i class="fa-solid fa-xmark" ></i></div>
            </div>
            <div className='m-nav-heading'>
                Soul<span className='up-heading'>Up</span>
            </div>
            <div className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></div>
            <div className={sidebar ?'sidebar-show' :'sidebar-hidden'}>
                    <div className='sidebar-item' onClick={()=>{(!subsidebar.sub1)&&sub_sidehandler('sub1',true)}}>
                        <div className='sidebar-item-flex'>
                            <div>Spport Groups</div>
                            <div className={subsidebar.sub1 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                            <div className={subsidebar.sub1 ?'icon-show' :'hide-icon'} onClick={()=>{subclose('sub1')}}><i class="fa-solid fa-xmark" ></i></div>
                        </div>
                        <div className={subsidebar.sub1 ?'sub-sidebar-show' :'hide-icon'}>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub1)&&s_sub_sidehandler('sub1',true)}}>
                                <div className='sidebar-item-flex '>
                                    <div>Spport Groups</div>
                                    <div className={s_subsidebar.sub1 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub1 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub1')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub1 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className=' sidebar-item s-item sidebar-item-flex'>
                                        <div>All Soup Up Groups</div>
                                    </div>
                                    <div className='sidebar-item s-item' onClick={()=>{(!ss_subsidebar.sub1)&&ss_sub_sidehandler('sub1',true)}}>
                                        <div className='sidebar-item-flex '>
                                            <div>Long Running Groups <button className='peer-1000-btn'>New</button></div>
                                            <div className={ss_subsidebar.sub1 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                            <div className={ss_subsidebar.sub1 ?'icon-show' :'hide-icon'} onClick={()=>{ss_subclose('sub1')}}><i class="fa-solid fa-xmark" ></i></div>
                                        </div>
                                        <div className={ss_subsidebar.sub1 ?'sub-sidebar-show' :'hide-icon'}>
                                            <div className='sidebar-item s-item'>
                                                Women Unfiltered
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Teen's Resilience Group
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Porn Addition 
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub2)&&s_sub_sidehandler('sub2',true)}}>
                                <div className='sidebar-item-flex '>
                                    <div>Support Groups in April</div>
                                    <div className={s_subsidebar.sub2 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub2 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub2')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub2 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item'>
                                        <div className='sidebar-item s-item'>
                                            Divorce Separation
                                        </div>
                                        <div className='sidebar-item s-item'>
                                            Arranged Marriage Search
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Dealing with Anxiety
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Overcoming Dating Fatigue
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Practical Bhagvat Gita
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub3)&&s_sub_sidehandler('sub3',true)}}>
                                <div className='sidebar-item-flex '>
                                    <div>Group for Medical Issues</div>
                                    <div className={s_subsidebar.sub3 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub3 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub3')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub3 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item'>
                                        <div className='sidebar-item s-item'>
                                            Cancer Support Group
                                        </div>
                                        <div className='sidebar-item s-item'>
                                            Fertility Support Group
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Support for Caregivers
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Living with Parkinson's
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           All Medical Groups
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub4)&&s_sub_sidehandler('sub4',true)}}>
                                <div className='sidebar-item-flex '>
                                <div>
                                    Unique Groups
                                    <div>Access Group that are hard to find elsewhere!</div>
                                </div>
                                    <div className={s_subsidebar.sub4 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub4 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub4')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub4 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item'>
                                        <div className='sidebar-item s-item'>
                                            Practical Bhagavad Gita
                                        </div>
                                        <div className='sidebar-item s-item'>
                                            Caregivers Stress
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Borderline Personality Disorder <button className='peer-1000-btn'>New</button>
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Contemplating Divorce <button className='peer-1000-btn'>New</button>
                                        </div>
                                    </div>
                                </div>   
                            </div>    
                        </div>
                    </div>
                    <div className='sidebar-item' onClick={()=>{(!subsidebar.sub2)&&sub_sidehandler('sub2',true)}}>
                        <div className='sidebar-item-flex'>
                            <div>Peer Calls</div>
                                <div className={subsidebar.sub2 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                <div className={subsidebar.sub2 ?'icon-show' :'hide-icon'} onClick={()=>{subclose('sub2')}}><i class="fa-solid fa-xmark" ></i></div>
                            </div>
                        <div className={subsidebar.sub2 ?'sub-sidebar-show' :'hide-icon'}>
                            <div className='sidebar-item s-item'>
                                <div>All SoulUp Peers</div>
                            </div>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub4)&&s_sub_sidehandler('sub4',true)}}>
                                <div className='sidebar-item-flex '>
                                    <div>Peers by Category</div>
                                    <div className={s_subsidebar.sub4 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub4 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub4')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub4 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item'>
                                        <div className='sidebar-item s-item'>
                                            Medical Health
                                        </div>
                                        <div className='sidebar-item s-item'>
                                            Relationships
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Health Issues
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Self-Growth
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Career/Work
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Family/Friends
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Loss/Grief
                                        </div>
                                        <div className='sidebar-item s-item'>
                                           Kids/Parenting
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub5)&&s_sub_sidehandler('sub5',true)}}>
                                <div className='sidebar-item-flex '>
                                    <div>Peer Program @INR 1000 <button className='peer-1000-btn'>New</button></div>
                                    <div className={s_subsidebar.sub5 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub5 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub5')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub5 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item'>
                                        <div className='sidebar-item s-item'>
                                            Epilepsy Peer Program
                                        </div>
                                        <div className='sidebar-item s-item'>
                                            Cancer Peer Program
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>
                                    Featured Peers
                                    <div>Peers handpicked based on their strength of profile</div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='sidebar-item' onClick={()=>{(!subsidebar.sub3)&&sub_sidehandler('sub3',true)}}>
                        <div className='sidebar-item-flex'>
                        <div>Therapy</div>
                            <div className={subsidebar.sub3 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                            <div className={subsidebar.sub3 ?'icon-show' :'hide-icon'} onClick={()=>{subclose('sub3')}}><i class="fa-solid fa-xmark" ></i></div>
                        </div>
                        <div className={subsidebar.sub3 ?'sub-sidebar-show' :'hide-icon'}>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>1-on-1 talk Therapy </div>
                            </div>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub1)&&s_sub_sidehandler('sub1',true)}}>
                                <div className='sidebar-item-flex '>
                                <div>specialised Therapy</div>
                                    <div className={s_subsidebar.sub1 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub1 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub1')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub1 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item'>
                                        <div className='sidebar-item s-item'>
                                            Family Therapy
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-item' onClick={()=>{(!subsidebar.sub4)&&sub_sidehandler('sub4',true)}}>
                    <div className='sidebar-item-flex'>
                            <div>Free Resources</div>
                                <div className={subsidebar.sub4 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                <div className={subsidebar.sub4 ?'icon-show' :'hide-icon'} onClick={()=>{subclose('sub4')}}><i class="fa-solid fa-xmark" ></i></div>
                            </div>
                        <div className={subsidebar.sub4 ?'sub-sidebar-show' :'hide-icon'}>
                            <div className='sidebar-item s-item' onClick={()=>{(!s_subsidebar.sub1)&&s_sub_sidehandler('sub1',true)}}>
                                <div className='sidebar-item-flex '>
                                    <div>
                                        Self Assessments
                                        <div>Medical Gropu Sessions <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Free <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Experts Led <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Limited slots</div>
                                    </div>
                                    <div className={s_subsidebar.sub1 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                    <div className={s_subsidebar.sub1 ?'icon-show' :'hide-icon'} onClick={()=>{s_subclose('sub1')}}><i class="fa-solid fa-xmark" ></i></div>
                                </div>
                                <div className={s_subsidebar.sub1 ?'sub-sidebar-show' :'hide-icon'} >
                                    <div className='sidebar-item s-item' onClick={()=>{(!ss_subsidebar.sub1)&&ss_sub_sidehandler('sub1',true)}}>
                                        <div className='sidebar-item-flex '>
                                            <div>Mental Health </div>
                                            <div className={ss_subsidebar.sub1 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                            <div className={ss_subsidebar.sub1 ?'icon-show' :'hide-icon'} onClick={()=>{ss_subclose('sub1')}}><i class="fa-solid fa-xmark" ></i></div>
                                        </div>
                                        <div className={ss_subsidebar.sub1 ?'sub-sidebar-show' :'hide-icon'}>
                                            <div className='sidebar-item s-item'>
                                                Social Anxiety <button className='peer-1000-btn'>New</button>
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Emotional Regulation
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Anxiety 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Overthinking 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                ADHD 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Depression 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Trauma 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Partner with Depression 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Borderline Personality Disorder
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sidebar-item s-item' onClick={()=>{(!ss_subsidebar.sub2)&&ss_sub_sidehandler('sub2',true)}}>
                                        <div className='sidebar-item-flex '>
                                            <div>Relationships </div>
                                            <div className={ss_subsidebar.sub2 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                            <div className={ss_subsidebar.sub2 ?'icon-show' :'hide-icon'} onClick={()=>{ss_subclose('sub2')}}><i class="fa-solid fa-xmark" ></i></div>
                                        </div>
                                        <div className={ss_subsidebar.sub2 ?'sub-sidebar-show' :'hide-icon'}>
                                            <div className='sidebar-item s-item'>
                                                Dating Fatigue
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Romantic Relationships 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Narcissistic Abuse 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Partner with Depression 
                                            </div>
                                        </div>
                                    </div>

                                    <div className='sidebar-item s-item' onClick={()=>{(!ss_subsidebar.sub3)&&ss_sub_sidehandler('sub3',true)}}>
                                        <div className='sidebar-item-flex '>
                                            <div>Life Decission/Lifestyle </div>
                                            <div className={ss_subsidebar.sub3 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                            <div className={ss_subsidebar.sub3 ?'icon-show' :'hide-icon'} onClick={()=>{ss_subclose('sub3')}}><i class="fa-solid fa-xmark" ></i></div>
                                        </div>
                                        <div className={ss_subsidebar.sub3 ?'sub-sidebar-show' :'hide-icon'}>
                                        <div className='sidebar-item s-item'>
                                                Going Childfree
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Arranged Marriage Search 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Spiritulity Daily Life 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Embracing Ageing 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sidebar-item s-item' onClick={()=>{(!ss_subsidebar.sub4)&&ss_sub_sidehandler('sub4',true)}}>
                                        <div className='sidebar-item-flex '>
                                            <div>Personality/Behaviour </div>
                                            <div className={ss_subsidebar.sub4 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                            <div className={ss_subsidebar.sub4 ?'icon-show' :'hide-icon'} onClick={()=>{ss_subclose('sub4')}}><i class="fa-solid fa-xmark" ></i></div>
                                        </div>
                                        <div className={ss_subsidebar.sub4 ?'sub-sidebar-show' :'hide-icon'}>
                                            <div className='sidebar-item s-item'>
                                                Social Anxiety
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Sleep Issues 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Eating Disorder 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Narcissistic Personality 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Porn Addition 
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='sidebar-item s-item' onClick={()=>{(!ss_subsidebar.sub5)&&ss_sub_sidehandler('sub5',true)}}>
                                        <div className='sidebar-item-flex '>
                                            <div>Impact of Health Issues </div>
                                            <div className={ss_subsidebar.sub5 ?'hide-icon' :'icon-show'}><i class="fa-solid fa-angle-down"></i></div>
                                            <div className={ss_subsidebar.sub5 ?'icon-show' :'hide-icon'} onClick={()=>{ss_subclose('sub5')}}><i class="fa-solid fa-xmark" ></i></div>
                                        </div>
                                        <div className={ss_subsidebar.sub5 ?'sub-sidebar-show' :'hide-icon'}>
                                            <div className='sidebar-item s-item'>
                                                Chronic Health Issues
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Caregiver Stress 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Impact of Fertility Journey 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Narcissistic Personality 
                                            </div>
                                            <div className='sidebar-item s-item'>
                                                Porn Addition 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sidebar-item s-item' >
                                        <div>Overall Emotional Health </div>
                                    </div>
                                </div>   
                            </div>  
                        </div>
                    </div>
                    <div className='sidebar-item'>
                        <div>Apply as Peer</div>
                    </div>
            </div>
      </div>
    </>
  )
}

export default MobileNavbar
