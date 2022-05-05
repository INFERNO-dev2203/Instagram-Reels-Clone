import '../styles/globals.css'
import "./signup.css"
import "./login.css"
import "../HPcomponents/Feed.css"
import "./fgtpwd.css"
import AuthWrapper from '../context/auth.js'
import "./profile.css"

function MyApp({ Component, pageProps }) {
  return (
  <AuthWrapper>
   < Component {...pageProps} /> 
   </AuthWrapper>
  )


}

export default MyApp
