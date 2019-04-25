import React, { Component } from 'react';


class Contact extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div style={{marginLeft: "300px"}}> 
            <p style={{fontSize:"50px"}} id="Contact">Contact</p>
            <p style={{maxWidth: "80%" , textAlign: "left"}}>
                59 Silkwood Cres. <br/>
                Brampton, ON<br/> 
                Canada <br/> 
                Phone: 647 801 0974<br/>
                Email: angad.singh@mail.utoronto.ca<br/>
                Github: <a href="http://www.github.com/singha95">http://www.github.com/singha95</a><br/>
                Linkedin: <a href="https://www.linkedin.com/in/angad-88s">https://www.linkedin.com/in/angad-88s</a>
            </p>
        </div>
    );
  }
}


export default Contact;