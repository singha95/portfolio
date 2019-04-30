import React, { Component } from 'react';


class Contact extends Component {
  /**
   * Class that represents my Contacts details, Linkedin and Github 
   */

  render() {

    return (
  
        <div className="section"> 
            <p className="header" id="Contact">Contact</p>
            <p className="details">
                59 Silkwood Cres. <br/>
                Brampton, ON<br/> 
                Canada <br/> 
                Phone: 647 801 0974<br/>
                Email: angad.singh@alum.utoronto.ca<br/>
                Github: <a href="http://www.github.com/singha95">http://www.github.com/singha95</a><br/>
                Linkedin: <a href="https://www.linkedin.com/in/angad-88s">https://www.linkedin.com/in/angad-88s</a>
            </p>
        </div>
    );
  }
}


export default Contact;