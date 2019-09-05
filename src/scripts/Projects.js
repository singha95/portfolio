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
                            <a href="https://github.com/singha95/mlb_analytics">MLB Analytics - JavaScript, React, NodeJS, Bootstrap</a>
                        </h5>
                        <h5 className="card-title"> Aug 2019 - Current </h5>
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
                            <a href="https://github.com/singha95/RiffWarrior">Riff Warrior – C#, Unity </a>
                        </h5>
                        <h5 className="card-title"> Sept 2017 - April 2018 </h5>
                    </nav>
                    <ul>
                        <li> Cooperated with a diverse team of programmers, artists and musicians to create a third person action adventure game in the Unity game engine.</li>
                        <li> Players would explore a maze to search for an exit. At the end there would be a final boss for players to defeat, which would be similar to a rock band song. </li>
                        <li> Improved notes sync with music and improved accuracy of input detection so that the battle system was more responsive and matched the music that was playing.</li>
                        <li> Created a tutorial for players to get accustomed to the game controls and to introduce players to the rhythm based battle mechanics. </li>
                        <li> Performed user testing with other students to find game bugs and to receive feedback in order to improve gameplay and to find bugs in the game. </li>
                        <li> Utilized the rock band controller for player movement and the battle system. The game was showcased at the Level-Up 2018, student games showcase, at the Design Exchange in Toronto</li>
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
