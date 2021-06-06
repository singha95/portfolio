import React, { Component } from 'react';
import '../css/menu.css';



class About extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div className="section" style={{paddingTop: "150px"}}> 
            <nav className="navbar" style={{padding: "0px", left:"0px"}}>
              <p className="card-title header halfCircleBottom" id="About"
              style={{paddingLeft: "10px"}}>
                Angad Singh
              </p>
            </nav>
            <p className="details">I am a software developer with 3 years of experience hoping to find a career in areas such as machine learning and back-end development.  
            I am a Linux enthusiast and have a passion for technology.  
            </p>
        </div>
    );
  }
}


export default About;