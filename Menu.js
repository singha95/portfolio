import React, { Component } from 'react';


class NavBar extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div id="mySidenav" className="sidenav">
            <a href="#About" id="about">About</a>
            <a href="#Education" id="blog">Education</a>
            <a href="#Projects" id="projects">Projects</a>
            <a href="#Contact" id="contact">Contact</a>
        </div>
    );
  }
}


export default NavBar;