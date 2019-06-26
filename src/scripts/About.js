import React, { Component } from 'react';
import pic from '../img/pic.jpg';
import '../css/menu.css';


class About extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div className="section" style={{paddingTop: "60px"}}> 
            <nav className="navbar" style={{padding: "0px"}}>
              <img src={pic} alt="na" className="card-title pic"/>
              <p className="card-title header halfCircleBottom" id="About">
                Angad Singh
              </p>
            </nav>

            <p className="details">I am graduating computer science specialist program at the University of Toronto. I have a
            strong background in languages such as Bash, Python, JavaScript and C#. Through my experiences and
            projects in university I have gained communication, teamwork, organization and problem solving
            skills. I am looking for a career in software development. 
            </p>
        </div>
    );
  }
}


export default About;