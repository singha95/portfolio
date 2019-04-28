import React, { Component } from 'react';


class Education extends Component {
  /**
   * Class that represents my Education Details 
   */

  render() {

    return (
  
        <div style={{marginLeft: "300px"}}> 
            <p style={{fontSize:"50px"}}id="Education">Education</p>
            <p style={{maxWidth: "80%" , textAlign: "left"}}>
            University of Toronto Sept 2014 - May 2018<br/>
            Honors Bachelor of Science in Computer Science,<br/>
            Focus in Artificial Intelligence<br/>
            </p>
        </div>
    );
  }
}


export default Education;