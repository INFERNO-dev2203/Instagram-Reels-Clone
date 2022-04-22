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

 function signUp(){
    return(
 
 <><div className="body">
        <div className="signUp_container">
            <div className="signUp_card">
                    <Image src={instalogo} />
                    <h2 className="heading">Sign up to see photos and videos from your friends</h2>
                    <Button variant ='contained' fullWidth component = "span" marginBottom ="1rem">Log in with Facebook</Button> 
                    <h4 className="or" align ="center">━━━━━━━ &nbsp; OR &nbsp; ━━━━━━━</h4>
                    <TextField id="outlined-basic1" size="small" margin="dense" fullWidth label="Mobile Number or Email" variant="outlined" />
                    <TextField id="outlined-basic2" size="small" margin="dense" fullWidth label="Full Name" variant="outlined" />
                    <TextField id="outlined-basic3" size="small" margin="dense" fullWidth label="Password" variant="outlined" type="password" />
                    <TextField id="outlined-basic4" size="small" margin="dense" fullWidth label="Confirm Password" variant="outlined" type="password"/>
                    <Button className="signupbtn" variant="contined" color="blue" fullWidth component="span" style={{marginTop: '1rem'}}>Sign up</Button>
                    <p className="bottomtext">By signing up, you agree to our <a href="https://help.instagram.com/581066165581870" tabIndex="0" target="_blank"><strong>Terms</strong></a>, <a href="https://help.instagram.com/519522125107875" tabindex="0" target="_blank"><strong>Data Policy</strong></a> and <a href="/legal/cookies/" tabindex="0" target="_blank"><strong>Cookies Policy</strong></a> .</p>
                <div className="bottom-card">
        <Card size="small" border="invisible">
      <CardContent>
        <Typography>Have an account?</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" fullWidth>Log in</Button>
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
            <a href="https://about.instagram.com/about-us/careers"><Button className="ftrbtn1" size="small" variant="text">Jobs</Button></a>
            <a href="https://help.instagram.com/"><Button className="ftrbtn1" size="small" variant="text">Help</Button></a>
            <a href="https://developers.facebook.com/docs/instagram"><Button className="ftrbtn1" size="small" variant="text">API</Button></a> 
            <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"><Button className="ftrbtn1" size="small" variant="text">Privacy</Button></a>
            <a href="https://help.instagram.com/581066165581870"><Button className="ftrbtn1" size="small" variant="text">Terms</Button></a>
            <a href="https://www.instagram.com/directory/profiles/"><Button className="ftrbtn" size="small" variant="text">Top Accounts</Button></a>
            <a href="https://www.instagram.com/directory/hashtags/"><Button className="ftrbtn" size="small" variant="text">Hashtags</Button></a>
            <a href="https://www.instagram.com/explore/locations/"><Button className="ftrbtn" size="small" variant="text">Locations</Button></a>
            <a href="https://www.instagram.com/web/lite/"><Button className="ftrbtn" size="small" variant="text">Instagram Lite</Button></a>
          </div>
          <div className="ftrp2">
            <p>English &nbsp; © 2022 Instagram from Meta</p>
          </div>
          </div>
          </>
                
 
 
 
 
 
 
 


            
    )
} 
export default signUp;