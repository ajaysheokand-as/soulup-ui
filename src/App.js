import { useState } from "react";
import Header from "./Components/Header/Header";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const [mobile_nav_show,setMobile_nav_show]=useState(false);
  return (
    <div className="App">
      <Navbar/> 
      <MobileNavbar/>
      <Header/>
    </div>
  );
}

export default App;
