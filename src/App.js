// import Header from "./Components/Header/Header";
// import MobileNavbar from "./Components/Navbar/MobileNavbar";
// import Navbar from "./Components/Navbar/Navbar";
// import Center from "./Components/Center/Center";
// import ConnectRelavant from "./Components/ConnectRelavant/ConnectRelavant";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Peerinfo from "./Components/Peerinfo/Peerinfo";
import PopUp from "./Components/PopUp/PopUp";
import Header from "./Components/Header/Header";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import Navbar from "./Components/Navbar/Navbar";
import Center from "./Components/Center/Center";
import ConnectRelavant from "./Components/ConnectRelavant/ConnectRelavant";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Peerinfo from "./Components/Peerinfo/Peerinfo";
import Home from './Pages/Home'
import {Provider} from 'react-redux'
import {Store} from './Components/Redux/Store'
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
function App() {
  
  return (
    <Provider store={Store}>
      {/* <Navbar/> 
      <MobileNavbar/>
      <Header/>
      <AllSoulUpPeers1/>
      
      <AllSoulUpPeer3/>
      <Center/> */}
{/* <PopUp/> */}
      <Router>
        <Navbar/> 
        <MobileNavbar/>
        <Routes>
          
           <Route
            exact 
            path="/"
            element={<Home/>}
          ></Route>
          <Route
            exact 
            path="/peerinfo"
            element={<Peerinfo />}
          ></Route>
          <Route
            exact 
            path="/applyaspeer"
            element={<RegistrationForm/>}
          ></Route>
        </Routes>
      </Router>
      
      
      

      {/* <ConnectRelavant/> */}
    </Provider>
  );
}

export default App;
