import React, { Component } from 'react';


class Publication extends Component {
  /**
   * Class that represents my University Projects and Side Projects 
   */

  render() {

    return (
        
        <div className="section"> 
            <p className="header" id="Publication">Publication</p>
            <div class="card" style={{width: "80%", textAlign: "left"}}>
                <h5 class="card-title"> Cartoon Optical Flow – MATLAB, Python, Bash Sept 2017 – Jan 2018 </h5> 
                <ul>
                    <li> 
                        Developed an optical flow dataset similar to MPI Sintel Dataset using the Blender Python API. The project was published as a part of the 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) under the title of Creative Flow+ Dataset. 
                    </li>
                    <li> 
                        Users would be able to create their own datasets with different cartoons and stylized effects. This data set can then be used with existing optical flow algorithms as training data or to test how well the algorithm generalizes.
                    </li> 
                    <li> 
                        Created scripts in bash that would help users automate the process of rendering batches of Blender objects. In addition, created Python scripts using the Blender API to randomize the camera placement in the scene. 
                    </li> 
                    <li> 
                        Utilized MATLAB to gather statistical data about how well some optical flow algorithms performed on the dataset 
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}


export default Publication;
 