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

    const [subsidebar,setSubsidebar]=useState({
        sub1:false,
        sub2:false,
        sub3:false,
        sub4:false,
    })

    const sub_sidehandler=(key,value)=>{
        setSubsidebar(prevState=>({...prevState,[key]:value}))
    }

    const subclose=(key)=>{
        console.log("key=>",key);
        setSubsidebar(prevState=>({...prevState,[key]:false}))
        console.log("subsidebar=>",subsidebar);
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
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>Support Groups</div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>Support Groups in April</div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>Groups for Medical Issues</div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>
                                    Unique Groups
                                    <div>Access Group that are hard to find elsewhere!</div>
                                </div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
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
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>All SoulUp Peers</div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>Peers By Category</div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>Peer Program @INR 1000 <button className='peer-1000-btn'>New</button></div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>
                                    Featured Peers
                                    <div>Peers handpicked based on their strength of profile</div>
                                </div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
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
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>specialised Therapy</div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
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
                            <div className='sidebar-item sidebar-item-flex s-item'>
                                <div>
                                    Self Assessments
                                    <div>Medical Gropu Sessions <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Free <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Experts Led <span style={{fontWeight:900, fontSize:"20px"}}>|</span> Limited slots</div>
                                </div>
                                <div className='m-down-arrow'><i class="fa-solid fa-angle-down"></i></div>
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
