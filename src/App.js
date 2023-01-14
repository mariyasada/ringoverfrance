import './App.css';
import {Routes,Route} from "react-router";
import { NavBar } from './components/index';
import {Home,ContactPage,Team,Journey, Store,ProductDetailPage} from "./pages/index";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
         <Route path="/" element={<Store/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/journey" element={<Journey/>}/>       
        <Route path="/product/:productId" element={<ProductDetailPage/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
