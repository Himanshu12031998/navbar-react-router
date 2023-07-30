import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <BrowserRouter>
    <Header onToggleSidebar={toggleSidebar} />
      <Sidebar isSidebarVisible={isSidebarVisible}   setIsSidebarVisible={setIsSidebarVisible}/>
      <div className={`content ${isSidebarVisible ? '' : 'full-width'}`}>
        {/* Add your main content here */}
        <h4>Main Content</h4>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;