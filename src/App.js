import { useState } from "react";
import Header from "./Components/Header/Header";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import Navbar from "./Components/Navbar/Navbar";
import AllSoulUpPeer2 from "./Components/AllSoulUpPeer/AllSoulUpPeer2";
import ConnectRelavant from "./Components/ConnectRelavant/ConnectRelavant";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Peerinfo from "./Components/Peerinfo/Peerinfo";
function App() {
  const [data,setData]=useState({});
  const data_from_child=(item)=>
  { 
    setData({...item});
  }
  return (
    <div className="App">
      <Router>
        <Navbar/> 
        <MobileNavbar/>
        <Routes>
          
          <Route
            exact 
            path="/"
            element={<AllSoulUpPeer2 data_from_parent={data_from_child}/>}
          ></Route>
          <Route
            exact 
            path="/peerinfo"
            element={<Peerinfo item={data}/>}
          ></Route>
        </Routes>
      </Router>
      
      
      

      {/* <ConnectRelavant/> */}
    </div>
  );
}

export default App;
