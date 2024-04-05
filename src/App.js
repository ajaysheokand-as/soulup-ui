
import AllSoulUpPeer3 from "./Components/AllSoulUpPeers3/AllSoulUpPeers3";
import AllSoulUpPeers1 from "./Components/AllSoulUpPeers/AllSoulUpPeers1";
import Header from "./Components/Header/Header";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import Navbar from "./Components/Navbar/Navbar";
import Center from "./Components/Center/Center";
function App() {

  return (
    <div className="App">
      <Navbar/> 
      <MobileNavbar/>
      <Header/>
      <AllSoulUpPeers1/>
      <AllSoulUpPeer3/>
      <Center/>

    </div>
  );
}

export default App;
