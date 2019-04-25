import React, { Component } from 'react';


class Projects extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page. 
   * This includes the modals for creating a post and login to the server. 
   */

  render() {

    return (
  
        <div style={{marginLeft: "300px"}}> 
            <p style={{fontSize:"50px"}}id="Projects">Academic Projects</p>
            <p style={{maxWidth: "80%" , textAlign: "left"}}>
                Riff Warrior – C# Video Game Sept 2017 – April 2018
                <ul>
                    <li>Worked with a large, 8 person, team to develop a third person action adventure game</li>
                    <li>Utilized the guitar hero controller in order to defeat enemies</li>
                    <li>Developed using the Unity game engine</li>
                    <li>The game will be at Level-Up, student games showcase, 2018</li>
                </ul>

                Cartoon Optical Flow – MATLAB, Python, Bash Sept 2017 – Jan 2018
                <ul>
                    <li>Developed an optical flow dataset using Blender</li>
                    <li>Developed in Python and utilized scripts in Bash and MATLAB</li>
                    <li>Tested with multiple optical flow algorithms found on the MPI Sintel Dataset.</li>
                </ul>

                Environment Ray Tracer and OpenGL Shaders – C++ Nov 2017 – Dec 2017
                <ul>
                    <li>Implemented an environment ray tracer</li>
                    <li>Supported texture mapping and reflections</li>
                    <li>Halftone shading, Cell shading, texture mapping, and Phone shading</li>
                </ul>

                CSP Problem Solver – C# July 2017 – Sept 2017
                <ul>
                    <li>C# constraint satisfaction problem solver</li>
                    <li>Improved storage efficiency of the program</li>
                    <li>Implemented a nonogram puzzle for testing.</li>
                </ul>

            </p>
        </div>
    );
  }
}


export default Projects;
 