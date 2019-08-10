import React, { Component } from 'react';
import pic from '../img/pic.jpg';
import '../css/menu.css';



class About extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div className="section" style={{paddingTop: "60px"}}> 
            <nav className="navbar" style={{padding: "0px"}}>
              <img src={pic} alt="na" className="card-title pic"/>
              <p className="card-title header halfCircleBottom" id="About">
                Angad Singh
              </p>
            </nav>

            <p className="details">Aspiring software developer with 1 year of experience hoping to find a career in areas such as machine learning and back-end development. 
            I have a passion for writing efficient and clear code and always strive to exceed expectations.  
            </p>
        </div>
    );
  }
}


export default About;