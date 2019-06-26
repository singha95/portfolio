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
                <nav className="navbar">
                    <h5 className="card-title"> Tata Consulting Services - Technical Application Analyst </h5> 
                    <h5 className="card-title"> Jan 2019 – Current </h5>
                </nav>
                <ul>
                    <li> 
                        Completed introductory training in Java and Eclipse. Created an application for booking rooms and for both clients and admins. 
                    </li>
                    <li> 
                        Placed as TCS contractor to the Royal Bank of Canada to work on their Anti Money Laundering Systems and Fraud prevention 
                        system to assist with development and support of the systems.
                    </li>  
                    <li> 
                        Monitored the Cloudera Hadoop cluster and resolved any environmental failures and memory issues.
                        Created SQL queries in DB2 and Hadoop to help find causes of issues. 
                    </li>
                    <li> 
                        Created Scripts in Batch, Python, Shell to help automate daily tasks. This includes execution of SQL queries and the 
                        creation of Excel spread sheets detailing issues or irregularities in the system.  
                    </li>
                    <li> 
                        Preformed upgrades and changes on the live Linux based production environment.   
                    </li>
                </ul>
            </div>
            <div className="card card-style" >
                <nav className="navbar">
                    <h5 className="card-title"> Evertz Microsystems – Project Engineer </h5> 
                    <h5 className="card-title"> June 2018 – Jan 2019 </h5>
                </nav>
                <ul>
                    <li> 
                    Created scripts to automate the pre-possessing and transcoding of assets using JavaScript and Python. Git was used as the primary version control manager for scripts
                    </li> 
                    <li>
                        Created and maintained the primary scripts for NBCU’s non-linear delivery of assets to media service providers. 
                        This system utilized various transfer types such as Signiant and Faspex.
                    </li>
                    <li> 
                        Created targeted SQL queries, enabling powerful on-the-fly reporting of the system’s state to important stakeholders
                    </li>
                    <li> 
                        Ran code and performed thorough testing on linux-based systems to ensure proper operation in exhaustive test cases. 
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