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
                    <h5 className="card-title">Technical Application Analyst </h5> 
                    <h5 className="card-title"> Jan 2019 – Current </h5>
                </nav>
                <nav className="navbar">
                    <h10>Tata Consulting Services</h10>
                </nav>
                <ul>
                    <li> 
                        Placed as TCS contractor to the Royal Bank of Canada to work on their Anti Money Laundering Systems and Fraud prevention 
                        system to assist with development and support of the systems.
                    </li>  
                    <li> 
                        Monitored the Cloudera Hadoop cluster and resolved any environmental failures and memory issues.
                        Created SQL queries in DB2 and Hadoop to help find causes of issues. 
                    </li>
                    <li>
                        Created queries to give accurate reports of potential fraudulent transactions or missing transactions to assist with the development of the application.  
                    </li>
                    <li> 
                    Create scripts in order to help automate daily tasks. This includes execution of SQL queries and the creation of Excel spread sheets detailing issues or irregularities in the system.  
                    </li>
                    <li> 
                        Preform system upgrades in order to improve the system performance and to add features to the existing system.  
                    </li>
                    <li> 
                        Technologies: Python, Bash, PowerShell, SQL, Hadoop, DB2
                    </li>
                </ul>
            </div>
            <div className="card card-style" >
                <nav className="navbar">
                    <h5 className="card-title"> Project Engineer </h5> 
                    <h5 className="card-title"> June 2018 – Jan 2019 </h5>
                </nav>
                <nav className="navbar">
                    <h10> Evertz Microsystems </h10>
                </nav>
                <ul>
                    <li> 
                        Created scripts to automate the pre-possessing and transcoding of assets in order for customers to play out videos to their respective users and clients. 
                    </li> 
                    <li>
                        Created the primary scripts for NBCU’s non-linear delivery of assets to media service providers in order to transfer assets to various locations using different transfer methods, such as Signiant and Faspex.
                    </li>
                    <li> 
                        Created targeted SQL queries and reduced run time of existing queries by 50%, in order to improve migration to a new DBMS.                     
                    </li>
                    <li> 
                        Utilized the Atlassian suite of tools (JIRA, Confluence) to maintain clear lines of communication with team members and project stakeholders, while operating using the SCRUM framework                     </li>
                    <li> 
                    Technologies: JavaScript, Python, SQL, DB2, MariaDB, Git
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}


export default Work;