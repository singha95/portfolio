import React, { Component } from 'react';


class Work extends Component {
  /**
   * Class that represents the my Work Experience 
   */
  render() {

    return (
  
        <div className="section"> 
            <p className="header" id="Work">Work Experience</p>
            <div className="card card-style" >
                <h5 className="card-title"> Evertz Microsystems – Project Engineer </h5> 
                <h5 className="card-title duration"> June 2018 – Jan 2019 </h5>
                <ul>
                    <li> 
                        Created scripts to automate the prepossessing and transfer of assets using JavaScript and Python. Git was used as the primary version control manager for scripts
                    </li> 
                    <li> 
                        Created SQL queries that would help users search for different assets in the UI. Users would be able to provide different parameters for the search. 
                    </li>
                    <li> 
                        Performed manual testing to ensure that the code worked as expected in all cases. All debugging and testing was done in an Ubuntu Linux environment. 
                    </li>
                    <li> 
                        Utilized agile work methodologies to ensure that scripts can be changed easily to meet customers’ requirements. Attended daily scrum meetings to collaborate with team members and inform them of any issues.  
                    </li> 
                    <li> 
                        Documented detailing steps required for changes on live systems. Created doc strings and comments in source code to help understand usage of functions. 
                    </li> 
                    <li> 
                        Participated in bi weekly sprint meetings to organize workload for the upcoming sprint. Used JIRA rank tickets based on their difficult and time required.  
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}


export default Work;