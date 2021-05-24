import React, { Component } from 'react';


class Education extends Component {
  /**
   * Class that represents my Education Details 
   */

  render() {

    return (
  
        <div className="section"> 
            <p className="header" id="Education">Education</p>
            <p className="details" style={{marginTop: "0px"}}>
            University of Toronto<br/>
            Honors Bachelor of Science in Computer Science,<br/>
            Focus in Artificial Intelligence<br/>
            </p>
        </div>
    );
  }
}


export default Education;