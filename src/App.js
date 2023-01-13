import './App.css';
import {Routes,Route} from "react-router";
import { NavBar } from './components/index';
import {Home,ContactPage,Team} from "./pages/index";
import { ProgressBar } from './components/VerticleProgressBar/ProgressBar';
import { Journey } from './pages/Journey/Journey';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes> */}
      {/* <ProgressBar/> */}
      <Journey/>
      
      
    </div>
  );
}

export default App;
