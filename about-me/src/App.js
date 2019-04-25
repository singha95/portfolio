import React from 'react';
import './App.css';
import './css/menu.css'
import NavBar from './scripts/Menu.js'
import About from './scripts/About.js'
import Education from './scripts/Education.js'
import Projcts from './scripts/Projects.js'
import Contact from './scripts/Contact.js'

function App() {
  return (
    <div className="App">
      <NavBar/>  
      <About/>
      <Education/>
      <Projcts/>
      <Contact/>
    </div>
  ); 
}

export default App;
