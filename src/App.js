import React from 'react';
import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './componants/NavBar';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contact';


function App() {
  return (
    <div className="App">
      

     <BrowserRouter >
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/*' element={<Home />}/>
     </Routes>
     
     </BrowserRouter>
     {/* <Home /> */}
    </div>
  );
}

export default App;
