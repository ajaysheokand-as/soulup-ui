
import Header from "./Components/Header/Header";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import Navbar from "./Components/Navbar/Navbar";
import AllSoulUpPeer2 from "./Components/AllSoulUpPeer/AllSoulUpPeer2";
import ConnectRelavant from "./Components/ConnectRelavant/ConnectRelavant";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Peerinfo from "./Components/Peerinfo/Peerinfo";
function App() {
<<<<<<< HEAD
  const [data,setData]=useState({});
  const data_from_child=(item)=>
  { 
    setData({...item});
  }
=======

>>>>>>> 0dede55a0bb6de38f1565957b8c23cfb856ee547
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
