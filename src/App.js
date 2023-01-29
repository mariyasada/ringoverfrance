import './App.css';
import {Routes,Route} from "react-router";
import { NavBar } from './components/index';
import {Home,ContactPage,Team,Journey, Store,ProductDetailPage} from "./pages/index";
import { Toaster } from 'react-hot-toast';
import { useProducts } from './context/Productcontext';
import { useEffect } from 'react';



function App() {
  const {filteredData}=useProducts();
  useEffect(()=>{
  },[filteredData])
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
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast-display", duration: 3000 }}
      />  
      
      
      
    </div>
  );
}

export default App;
