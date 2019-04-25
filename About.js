import React, { Component } from 'react';


class About extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div style={{marginLeft: "300px"}}> 
            <p style={{fontSize:"50px"}}id="About">About</p>
            <p style={{maxWidth: "80%" , textAlign: "left"}}>I am graduating computer science specialist program at the University of Toronto. I have a
            strong background in languages such as Bash, Python, JavaScript and C#. Through my experiences and
            projects in university I have gained communication, teamwork, organization and problem solving
            skills. I am looking for a career in software development. 
            </p>
        </div>
    );
  }
}


export default About;