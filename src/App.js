// import Header from "./Components/Header/Header";
// import MobileNavbar from "./Components/Navbar/MobileNavbar";
// import Navbar from "./Components/Navbar/Navbar";
// import Center from "./Components/Center/Center";
// import ConnectRelavant from "./Components/ConnectRelavant/ConnectRelavant";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Peerinfo from "./Components/Peerinfo/Peerinfo";
import PopUp from "./Components/PopUp/PopUp";
function App() {

  return (
    <div className="App">
      {/* <Navbar/> 
      <MobileNavbar/>
      <Header/>
      <AllSoulUpPeers1/>
      
      <AllSoulUpPeer3/>
      <Center/> */}
<PopUp/>
      {/* <Router>
        <Navbar/> 
        <MobileNavbar/>
        <Routes>
          
          {/* <Route
            exact 
            path="/"
            element={<AllSoulUpPeer2 data_from_parent={data_from_child}/>}
          ></Route>
          <Route
            exact 
            path="/peerinfo"
            element={<Peerinfo item={data}/>}
          ></Route> }
        </Routes>
      </Router>
       */}
      
      

      {/* <ConnectRelavant/> */}
    </div>
  );
}

export default App;
