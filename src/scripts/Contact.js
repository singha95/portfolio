import React, { Component } from 'react';


class Contact extends Component {
  /**
   * Class that represents my Contacts details, Linkedin and Github 
   */

  render() {

    return (
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="Contact">
          <p className="contact-details">
                Caledon, ON<br/> 
                Canada <br/> 
          </p>
          <p className="social-media-link">
                angad.singh@alum.utoronto.ca<br/>
                <a href="http://www.github.com/singha95">Github</a><br/>
                <a href="https://www.linkedin.com/in/singha95/">Linkedin</a>
          </p>
        </nav>
    );
  }
}


export default Contact;
