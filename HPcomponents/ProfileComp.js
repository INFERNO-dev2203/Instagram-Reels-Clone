import React from "react";
import Navbar from "./Navbar";

function ProfileComp() {
    return(
        <div>
          <Navbar/>
          <div className="profile-upper">
             <img src = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" style={{height:"8rem",width:"8rem",borderRadius:"50%"}}></img>
             <div className="namepost-container" style={{flexBasis:"40%"}}>
             <h1>Name</h1>
             <h3>Posts : 10</h3>
          </div>
          </div>
          <hr style={{color:"black solid 1px" }}></hr>
          <div className="profile-videos">
             <video src = "https://video.xx.fbcdn.net/v/t42.1790-2/187249155_1484881125181098_6155226387882274687_n.mp4?_nc_cat=101&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjQ5NiwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=B-UJEzVBtKIAX8_cnWe&rl=496&vabr=276&_nc_ht=video.fdel3-3.fna&oh=00_AT-OkGkA9vRLbJAg63Z4UgxvzPXEaBmf5KTdtsJsDWvqVw&oe=6271363C"/>
             


          </div>
        </div>

    )  
}

export default ProfileComp