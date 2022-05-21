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
import ImageIcon from '@mui/icons-material/Image';
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage} from "../firebase";


 function SignUp(){
  const router = useRouter()
  const [email,setEmail] = React.useState('')
  const [name,setName] = React.useState('')
  const [file,setFile] = React.useState(null)
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
        console.log(user)
        console.log(user['uid'])
        const storageRef = ref(storage, `${user.uid}/ProfilePic`);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
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
                    <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<ImageIcon/>}
              style={{marginTop:"1rem"}}
              
            >
              Upload Profile Image
              <input
                accept="image/*"
                type="file"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
                    <Button className="signupbtn" variant="contined" color="blue" fullWidth component="span" style={{marginTop: '1rem',backgroundColor:"blue",color:"white"}} onClick = {handleClick} disabled={loading}>Sign up</Button>
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
            <a href="https://about.facebook.com/meta"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>Meta</Button></a>
            <a href="https://about.instagram.com/"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>About</Button></a>
            <a href="https://about.instagram.com/en_US/blog"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>Blog</Button></a>
            <a href="https://about.instagram.com/about-us/careers"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>Jobs</Button></a>
            <a href="https://help.instagram.com/"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>Help</Button></a>
            <a href="https://developers.facebook.com/docs/instagram"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>API</Button></a> 
            <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"><Button className="ftrbtn1s" size="small" variant="text" sx={{color:"#8e8e8e", textTransform:'none'}}>Privacy</Button></a>
            <a href="https://help.instagram.com/581066165581870"><Button className="ftrbtn1s" size="small" variant="text" sx={{marginRight:'1vw', color:"#8e8e8e", textTransform:'none'}}>Terms</Button></a>
            <a href="https://www.instagram.com/directory/profiles/"><Button className="ftrbtns" size="small" variant="text"sx={{marginRight:'1vw', color:"#8e8e8e", textTransform:'none'}}>Top Accounts</Button></a>
            <a href="https://www.instagram.com/directory/hashtags/"><Button className="ftrbtns" size="small" variant="text"sx={{marginRight:'1vw', color:"#8e8e8e", textTransform:'none'}}>Hashtags</Button></a>
            <a href="https://www.instagram.com/explore/locations/"><Button className="ftrbtns" size="small" variant="text"sx={{marginRight:'1vw', color:"#8e8e8e", textTransform:'none'}}>Locations</Button></a>
            <a href="https://www.instagram.com/web/lite/"><Button className="ftrbtns" size="small" variant="text" sx={{marginRight:'1vw', color:"#8e8e8e", textTransform:'none'}}>Instagram Lite</Button></a>
          </div>
          <div className="ftrp2s">
            <p>English &nbsp; © 2022 Instagram from Meta</p>
          </div>
          </div>
          </>         
    )
} 
export default SignUp;