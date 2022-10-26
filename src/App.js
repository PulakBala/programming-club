
import './App.css';
import CoverPic from './Components/CoverPic/CoverPic';
import CpcWings from './Components/CpcWings/CpcWings';
import Nav from './Components/Navbar/Nav';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <CoverPic></CoverPic>
      <CpcWings></CpcWings>
    </div>
  );
}

export default App;
