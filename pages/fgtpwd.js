import React, {useContext, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Image from "next/image"
import instalogo from './instalogo.jpg'
import Button from '@mui/material/Button'
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";
function Fgtpwd() {

const router = useRouter()
const [email,setEmail] = React.useState('')
const [error,setError] = React.useState('')
const [loading,setLoading] = React.useState(false)

const {forgot,user} = useContext(AuthContext)

const handleClick = async() => {
  try {
    setLoading(true)
    setError('')
    await forgot(email)
    console.log('Email Sent')
  } catch (error) {
    console.log(error.message)
    setError(error.message)
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
        <div className="fgtpwd_container">
            <div className="fgtpwd_card">
                    <Image src={instalogo} /> 
                    <h2 className="fgtpwdheading">Enter your email, phone, or username and we'll send you a link to get back into your account.</h2>
                    <TextField id="outlined-basic1" size="small" margin="dense" fullWidth label="Mobile Number or Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Button className="sendLoginLink" variant="contined" color="blue" fullWidth component="span" style={{marginTop: '1rem'}} onClick={handleClick}>Send Login Link</Button>
                    <h4 className="or" align ="center">━━━━━━━ &nbsp; OR &nbsp; ━━━━━━━</h4>
                    <Button className="signupbtn" variant="contined" color="blue" fullWidth component="span" style={{marginTop: '1rem'}} onClick={handleClick}>Sign up</Button>
            </div>
        </div>
        </div>
        <div className="footerfgt">
          <div className="ftrp1fgt">
            <a href="https://about.facebook.com/meta"><Button className="ftrbtn1fgt" size="small" variant="text">Meta</Button></a>
            <a href="https://about.instagram.com/"><Button className="ftrbtn1fgt" size="small" variant="text">About</Button></a>
            <a href="https://about.instagram.com/en_US/blog"><Button className="ftrbtn1fgt" size="small" variant="text">Blog</Button></a>
            <a href="https://about.instagram.com/about-us/careers"><Button className="ftrbtn1fgt" size="small" variant="text">Jobs</Button></a>
            <a href="https://help.instagram.com/"><Button className="ftrbtn1fgt" size="small" variant="text">Help</Button></a>
            <a href="https://developers.facebook.com/docs/instagram"><Button className="ftrbtn1fgt" size="small" variant="text">API</Button></a> 
            <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"><Button className="ftrbtn1fgt" size="small" variant="text">Privacy</Button></a>
            <a href="https://help.instagram.com/581066165581870"><Button className="ftrbtn1fgt" size="small" variant="text" sx={{marginRight:'5px'}}>Terms</Button></a>
            <a href="https://www.instagram.com/directory/profiles/"><Button className="ftrbtnfgt" size="small" variant="text"sx={{marginRight:'10px'}}>Top Accounts</Button></a>
            <a href="https://www.instagram.com/directory/hashtags/"><Button className="ftrbtnfgt" size="small" variant="text"sx={{marginRight:'10px'}}>Hashtags</Button></a>
            <a href="https://www.instagram.com/explore/locations/"><Button className="ftrbtnfgt" size="small" variant="text"sx={{marginRight:'10px'}}>Locations</Button></a>
            <a href="https://www.instagram.com/web/lite/"><Button className="ftrbtnfgt" size="small" variant="text">Instagram Lite</Button></a>
          </div>
          <div className="ftrp2fgt">
            <p>English &nbsp; © 2022 Instagram from Meta</p>
          </div>
          </div>    
        </>

    )
    
}
export default Fgtpwd;