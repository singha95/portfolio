import React, { Component } from 'react';


class Projects extends Component {
    /**
     * Class that represents my University Projects and Side Projects 
     */

    render() {

        return (

            <div>
                <p className="header" id="Projects">Personal Projects</p>


                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">
                            <a href="https://github.com/singha95/GetStockPrice">
                                Conky Stock Price – C++, Python
                            </a>
                        </h5>
                        <h5 className="card-title">  Jan 2020 – Mar 2020</h5>
                    </nav>
                    <ul>
                        <li>Created various terminal tools to retrieve stock data from yahoo finance. Allows users to quickly retrieve stock details from the terminal  </li>
                        <li>Created scripts for users to use these scripts along with Conky to set their background with update to date stock prices </li>
                        <li>Utilized the curl C++ library to parse the information directly from the Yahoo finance website</li>
                        <li>Created Python scripts to get monthly and weekly graphs of prices for stocks. </li>
                    </ul>
                </div>


                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">
                            <a href="https://github.com/singha95/HearthstoneCardViewer">Hearthstone Card Viewer - Django, Python, HTML, Bootstrap, SQL</a>
                        </h5>
                        <h5 className="card-title"> Sept 2019 - Nov 2019</h5>
                    </nav>
                    <ul>
                        <li> 
                            Utilized the Blizzard Hearthstone API in order to create a web app for players to create and search for new cards. 
                        </li>
                        <li>
                            Used the oauth2 protocol data about current cards in the game is pulled directly from Blizzards servers. 
                        </li>
                        <li> 
                            Utilized SQLite so that users can search quickly search for cards based on type, mana cost and name.
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
                            Deployed the web app using Heroku. ( 
                                <a href="https://mlb-player-analytics.herokuapp.com/" >
                                https://mlb-player-analytics.herokuapp.com/</a>)
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
                            <a href="https://github.com/singha95/CSPSolver">
                                CSP Problem Solver - C#, Python
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
