import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Location from "./components/Location/location"
import SearchLocation from "./components/Location/SearchLocation"
import AvailLocation from "./components/Location/AvailLoc"
import BuildLoc from "./components/Location/Building"

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Location />} />
        <Route exact path="/searchlocation" element={<SearchLocation/>} />
        <Route exact path="/availocation" element={<AvailLocation/>} />
        <Route exact path="/availBuilding" element={<BuildLoc/>} />
      </Routes>
    </Router>
  );
}

export default App;    