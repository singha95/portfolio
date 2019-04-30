import React, { Component } from 'react';


class NavBar extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light menu">
      <div class="collapse navbar-collapse cl-effect-15" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#About">About <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Publication">Publication</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Work">Work Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}


export default NavBar;