import React from 'react'
import AllSoulUpPeers1 from '../Components/AllSoulUpPeer/AllSoulUpPeers1'
import AllSoulUpPeer2 from '../Components/AllSoulUpPeer/AllSoulUpPeer2'
import AllSoulUpPeers3 from '../Components/AllSoulUpPeer/AllSoulUpPeers3'
import { useState } from "react";
function AllSoulUpPeer() {
    const [data,setData]=useState({});
    const data_from_child=(item)=>
    { 
      setData({...item});
    }
  
  return (
    <div>
      <AllSoulUpPeers1/>
      <AllSoulUpPeer2/>
      <AllSoulUpPeers3/>
    </div>
  )
}

export default AllSoulUpPeer
