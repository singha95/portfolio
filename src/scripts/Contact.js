import React, { Component } from 'react';


class Contact extends Component {
  /**
   * Class that represents my Contacts details, Linkedin and Github 
   */

  render() {

    return (
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="Contact">
          <p className="contact-details">
                59 Silkwood Cres. <br/>
                Brampton, ON<br/> 
                Canada <br/> 
                Phone: 647 801 0974<br/>
          </p>
          <p className="social-media-link">
                Email: angad.singh@alum.utoronto.ca<br/>
                Github: <a href="http://www.github.com/singha95">http://www.github.com/singha95</a><br/>
                Linkedin: <a href="https://www.linkedin.com/in/angad-88s">https://www.linkedin.com/in/angad-88s</a>
          </p>
        </nav>
    );
  }
}


export default Contact;