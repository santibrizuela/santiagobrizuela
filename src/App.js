import React from 'react';
// components
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Navbar />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/catalogo' element={<Catalogo/>} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
