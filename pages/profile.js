import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import ProfileComp from "../HPcomponents/ProfileComp";
import {useRouter} from "next/router"
function Profile() {
    const {user} = useContext(AuthContext)


    function Redirect() {
      const router = useRouter();
      router.push("/login")
      return null
    }

    return(
        <>{
            user?.uid ? <ProfileComp/> : <Redirect/>
        }
        </>





    )
    
}

export default Profile