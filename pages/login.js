import React from "react";
import TextField from '@mui/material/TextField';
import Image from "next/image"
import instalogo from './instalogo.jpg'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Playstore1 from "./Playstore1.jpg";
import Appstore1 from "./Appstore1.jpg"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
 function logIn(){
    return(
 
 <><div className="body">
        <div className="logIn_container">
          <div className="carbkgd">
          {<AutoPlaySwipeableViews>
               <div><img className="swpimg" src = "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"/></div>
               <div><img className="swpimg" src = "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"/></div>
               <div><img className="swpimg" src = "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"/></div>
          </AutoPlaySwipeableViews>}
           </div>
            <div className="logIn_card">
                    <Image src={instalogo}/>
                    <TextField id="outlined-basic1" size="small" margin="dense" fullWidth label="Phone Number, Username or Email" variant="outlined" />
                    <TextField id="outlined-basic3" size="small" margin="dense" fullWidth label="Password" variant="outlined" type="password" />
                    <div style={{color :"red",marginTop :"0.5 rem"}}>Error comes here</div>
                    <Button className="loginbtn" variant="contined" color="blue" fullWidth component="span" style={{marginTop: '1rem'}}>Log In</Button>
                    <div style={{color : "blue", marginTop:"0.5rem"}}>Forgot Password?</div>
                    <h4 className="or" align ="center">━━━━━━━ &nbsp; OR &nbsp; ━━━━━━━</h4>
                    <Button variant ='contained' fullWidth component = "span" marginbottom ="1rem">Log in with Facebook</Button>             
            <div className="bottom-card">
                    <Card size="small" border="invisible">
                    <CardContent>
                    <Typography>Don't have an account?</Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" fullWidth>Sign up</Button>
                    </CardActions>
                    </Card>
            <div className="downloadscard">
         <Typography className="getapptxt">Get the app</Typography>
         <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US"> <Image className="psimg" src = {Playstore1}/></a>
         <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"> <Image className="asimg" src ={Appstore1}/></a>
        </div>
        </div>
            </div>
        </div> 
        </div>
        <div className="footer">
          <div className="ftrp1">
            <a href="https://about.facebook.com/meta"><Button className="ftrbtn1" size="small" variant="text">Meta</Button></a>
            <a href="https://about.instagram.com/"><Button className="ftrbtn1" size="small" variant="text">About</Button></a>
            <a href="https://about.instagram.com/en_US/blog"><Button className="ftrbtn1" size="small" variant="text">Blog</Button></a>
            <a href="https://about.instagram.com/about-us/careers"><Button className="ftrbtn" size="small" variant="text">Jobs</Button></a>
            <a href="https://help.instagram.com/"><Button className="ftrbtn1" size="small" variant="text">Help</Button></a>
            <a href="https://developers.facebook.com/docs/instagram"><Button className="ftrbtn1" size="small" variant="text">API</Button></a> 
            <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"><Button className="ftrbtn1" size="small" variant="text">Privacy</Button></a>
            <a href="https://help.instagram.com/581066165581870"><Button className="ftrbtn1" size="small" variant="text">Terms</Button></a>
            <a href="https://www.instagram.com/directory/profiles/"><Button className="ftrbtn" size="small" variant="text">Top Accounts</Button></a>
            <a href="https://www.instagram.com/directory/hashtags/"><Button className="ftrbtn" size="small" variant="text">Hashtags</Button></a>
            <a href="https://www.instagram.com/explore/locations/"><Button className="ftrbtn" size="small" variant="text">Locations</Button></a>
            <a href="https://www.instagram.com/web/lite/"><Button className="ftrbtn" size="small" variant="text">Instagram Lite</Button></a>
          </div>
          <div className="ftrp1-ext">
            <a href="https://www.instagram.com/topics/dance-and-performance/"><Button className="ftrbtn1" size="small" variant="text">Dance</Button></a>
            <a href="https://www.instagram.com/topics/food-and-drink/"><Button className="ftrbtn1" size="small" variant="text">Food & Drink</Button></a>
            <a href="https://www.instagram.com/topics/home-and-garden/"><Button className="ftrbtn1" size="small" variant="text">&nbsp;&nbsp;Home & Garden</Button></a>
            <a href="https://www.instagram.com/topics/music/"><Button className="ftrbtn" size="small" variant="text">Music</Button></a>
            <a href="https://www.instagram.com/topics/visual-arts/"><Button className="ftrbtn1" size="small" variant="text">Visual Arts</Button></a>
          </div>
          <div className="ftrp2">
            <p>English &nbsp; © 2022 Instagram from Meta</p>
          </div>
          </div>
          </>        
    )
} 
export default logIn;