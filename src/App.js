import React from 'react';
import './App.css';
import './css/menu.css'
import NavBar from './scripts/Menu.js'
import About from './scripts/About.js'
import Projects from './scripts/Projects.js'
import Contact from './scripts/Contact.js'
import Work from './scripts/Work.js'
import Publication from './scripts/Publications.js'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="section" style={{paddingTop: "150px"}}> 
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/work" component={Work}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Publication" component={Publication}/>
          </Switch>
        </div>
      <Contact/>
      </div>
    </Router>
  ); 
}

export default App;
