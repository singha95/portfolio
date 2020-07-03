import React, { Component } from 'react';
import '../css/menu.css';



class About extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div> 
            <nav className="navbar" style={{padding: "0px", left:"0px"}}>
              <p className="card-title header halfCircleBottom" id="About"
              style={{paddingLeft: "10px"}}>
                Angad Singh
              </p>
            </nav>
            <p className="details">I am a software developer with 2 years of experience hoping to find a career in areas such as machine learning and back-end development. 
            I graduated from the University of Toronto, Undergratuate Computer Science program with a focus in artifical intelligence.  
            </p>
            <div> 
                <p className="header" id="Education">Education</p>
                <p className="details" style={{marginTop: "0px"}}>
                University of Toronto Sept 2014 - May 2018<br/>
                Honors Bachelor of Science in Computer Science,<br/>
                Focus in Artificial Intelligence<br/>
                </p>
            </div>
        </div>
    );
  }
}


export default About;