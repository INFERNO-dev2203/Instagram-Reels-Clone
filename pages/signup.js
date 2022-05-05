import React, { useContext , useEffect} from "react";
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
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase";

 function SignUp(){
  const router = useRouter()
  const [email,setEmail] = React.useState('')
  const [name,setName]= React.useState('')
  const [password,setPassword] = React.useState('')
  const [error,setError] = React.useState('')
  const [loading,setLoading] = React.useState(false)
  
  const {signup,user} = useContext(AuthContext)
  
  const handleClick = async() => {
     try {
       setLoading(true)
       setError('')
       const user = await signup(email,password)
       console.log('Signed Up')
       router.push('/')
       let obj = {
            name: name,
            email: email,
            uid: user.user.uid
       }
       await setDoc(doc(db,"users",user.user.uid),obj);
       console.log("doc added")
     }
      
     catch (error) {
       console.log(email)
       console.log(error.message)
       setTimeout(()=>{
         setError('')
       },2000)
     }
     setLoading(false)
  }
   useEffect(() => {
     if(user){
      router.push('/')
     }
     else{
       console.log('Not Logged In')
     }
   },[user])

    return(
 
 <><div className="body">
        <div className="signUp_container">
            <div className="signUp_card">
                    <Image src={instalogo} />
                    <h2 className="heading">Sign up to see photos and videos from your friends</h2>
                    <Button variant ='contained' fullWidth component = "span" marginbottom ="1rem">Log in with Facebook</Button> 
                    <h4 className="or" align ="center">━━━━━━━ &nbsp; OR &nbsp; ━━━━━━━</h4>
                    <TextField id="outlined-basic1" size="small" margin="dense" fullWidth label="Mobile Number or Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="outlined-basic2" size="small" margin="dense" fullWidth label="Full Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
                    <TextField id="outlined-basic3" size="small" margin="dense" fullWidth label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <TextField id="outlined-basic4" size="small" margin="dense" fullWidth label="Confirm Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button className="signupbtn" variant="contined" color="blue" fullWidth component="span" style={{marginTop: '1rem'}} onClick = {handleClick} disabled={loading}>Sign up</Button>
                    <p className="bottomtext">By signing up, you agree to our <a href="https://help.instagram.com/581066165581870" tabIndex="0" target="_blank"><strong>Terms</strong></a>, <a href="https://help.instagram.com/519522125107875" tabIndex="0" target="_blank"><strong>Data Policy</strong></a> and <a href="/legal/cookies/" tabIndex="0" target="_blank"><strong>Cookies Policy</strong></a> .</p>
                <div className="bottom-card">
                    <Card size="small" border="invisible">
                     <CardContent>
                        <Typography>Have an account?</Typography>
                     </CardContent>
                     <CardActions>
                        <Button size="small" fullWidth><Link href={'/login'}><span>Log in</span></Link></Button>
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
        <div className="footers">
          <div className="ftrp1s">
            <a href="https://about.facebook.com/meta"><Button className="ftrbtn1s" size="small" variant="text">Meta</Button></a>
            <a href="https://about.instagram.com/"><Button className="ftrbtn1s" size="small" variant="text">About</Button></a>
            <a href="https://about.instagram.com/en_US/blog"><Button className="ftrbtn1s" size="small" variant="text">Blog</Button></a>
            <a href="https://about.instagram.com/about-us/careers"><Button className="ftrbtn1s" size="small" variant="text">Jobs</Button></a>
            <a href="https://help.instagram.com/"><Button className="ftrbtn1s" size="small" variant="text">Help</Button></a>
            <a href="https://developers.facebook.com/docs/instagram"><Button className="ftrbtn1s" size="small" variant="text">API</Button></a> 
            <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"><Button className="ftrbtn1s" size="small" variant="text">Privacy</Button></a>
            <a href="https://help.instagram.com/581066165581870"><Button className="ftrbtn1s" size="small" variant="text" sx={{marginRight:'5px'}}>Terms</Button></a>
            <a href="https://www.instagram.com/directory/profiles/"><Button className="ftrbtns" size="small" variant="text"sx={{marginRight:'10px'}}>Top Accounts</Button></a>
            <a href="https://www.instagram.com/directory/hashtags/"><Button className="ftrbtns" size="small" variant="text"sx={{marginRight:'10px'}}>Hashtags</Button></a>
            <a href="https://www.instagram.com/explore/locations/"><Button className="ftrbtns" size="small" variant="text"sx={{marginRight:'10px'}}>Locations</Button></a>
            <a href="https://www.instagram.com/web/lite/"><Button className="ftrbtns" size="small" variant="text">Instagram Lite</Button></a>
          </div>
          <div className="ftrp2s">
            <p>English &nbsp; © 2022 Instagram from Meta</p>
          </div>
          </div>
          </>
                
 
 
 
 
 
 
 


            
    )
} 
export default SignUp;