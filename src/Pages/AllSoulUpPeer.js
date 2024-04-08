import React from 'react'
import AllSoulUpPeers1 from '../Components/AllSoulUpPeer/AllSoulUpPeers1'
import AllSoulUpPeer2 from '../Components/AllSoulUpPeer/AllSoulUpPeer2'
import AllSoulUpPeers3 from '../Components/AllSoulUpPeer/AllSoulUpPeers3'
import {Store} from '../Components/Redux/Store'
import {Provider} from 'react-redux'
function AllSoulUpPeer() {
  return (
    <Provider store={Store}>
      <AllSoulUpPeers1/>
      <AllSoulUpPeer2 />
      <AllSoulUpPeers3/>
    </Provider>
  )
}

export default AllSoulUpPeer
