import React, { Component } from 'react';
import pdf from '../files/Angad-Singh-resume.pdf'


class NavBar extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
      <div className="collapse navbar-collapse cl-effect-15" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#About">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Publication">Publication</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Work">Work Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact</a>
          </li>
          <li className="nav-item"> 
            <a className="nav-link" href={pdf}>PDF</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}


export default NavBar;