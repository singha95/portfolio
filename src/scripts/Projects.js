import React, { Component } from 'react';


class Projects extends Component {
    /**
     * Class that represents my University Projects and Side Projects 
     */

    render() {

        return (

            <div className="section">
                <p className="header" id="Projects">Personal Projects</p>
                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">
                            <a href="https://github.com/singha95/HearthstoneCardViewer">Hearthstone Card Viewer - Django, Python, HTML, Bootstrap, SQL</a>
                        </h5>
                        <h5 className="card-title"> Sept 2019 - Current</h5>
                    </nav>
                    <ul>
                        <li> 
                            Utilizing the Blizzard Hearthstone API in order to create a web app for players to create and search for new cards. 
                        </li>
                        <li>
                            Using the oauth2 protocol data about current cards in the game is pulled directly from Blizzards servers. 
                        </li>
                        <li> 
                            Utilizing SQLite so that users can search quickly search for cards based on type, mana cost and name.
                        </li>
                        <li> 
                            Developing a feature to allow user to create their own build with the app and save a local copy so that they can edit or modify it later. 
                        </li>
                    </ul>
                </div>


                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">
                            <a href="https://github.com/singha95/mlb_analytics">MLB Analytics - JavaScript, React, NodeJS, Bootstrap</a>
                        </h5>
                        <h5 className="card-title"> Aug 2019 - Sept 2019</h5>
                    </nav>
                    <ul>
                        <li> 
                            Utilized the MLB Stats API to create an interactive web app that will display stats and rosters for the different MLB teams. 
                        </li>
                        <li>
                            Deployed the web app using Google Cloud Platform. ( 
                                <a href="https://mlb-analytics.appspot.com/" >
                                    https://mlb-analytics.appspot.com/</a>)
                        </li>
                        <li>
                            Implemented support for mobile devices to ensure that the app is compatible with multiple devices. 
                        </li>
                        <li> 
                            Preformed user testing to receive feedback to help make the UI more engaging and easy to use.  
                        </li>

                    </ul>
                </div>

                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">
                            <a href="https://github.com/Richmond-Truong/groupFinder">
                                Group Finder – JavaScript, React, Node JS
                            </a>
                        </h5>
                        <h5 className="card-title">  May 2018 – Sep 2018</h5>
                    </nav>
                    <ul>
                        <li> Collaborated peers to create a tool that would help students post their personal projects in order to find like-minded team members.  </li>
                        <li> Created a Heroku  PaaS to hold user data and theirs posts. Ensured that the web page was correctly pulling and posting data to and from Heroku .</li>
                        <li> Developed front end UI using React for posting and viewing profiles. Collaborated with team members to improve the usability for the interface. </li>
                        <li> Preformed user testing to ensure that all features were working and to receive feedback to help make the UI more engaging and user-friendly. eveloped 
                            front end UI using React for posting and viewing profiles. Collaborated with team members to improve the usability for the interface. 
                        </li>
                    </ul>
            </div>

            <div className="card card-style" >
                <nav className="navbar">
                    <h5 className="card-title">
                        <a href="https://github.com/singha95/CSPSolver">
                            CSP Problem Solver - C#
                            </a>
                    </h5>
                    <h5 className="card-title"> July 2017 – Sept 2017 </h5>
                </nav>
                <ul>
                    <li>
                        Created a constraint satisfaction problem solver in Python. The program takes variables and theirs constraints. The program will provide a valid assignment for each of the variables within the given constraints.
                    </li>
                    <li>
                        Implemented a Nonogram puzzle in order to test the performance and correctness of the program. The result of the puzzle would be displayed in a UI using the Tkinter Python API
                    </li>
                    <li>
                        Converted the program into C# and improved memory efficiency using lambda functions for the constraints.
                    </li>
                </ul>
            </div>

            </div >
        );
    }
}


export default Projects;
