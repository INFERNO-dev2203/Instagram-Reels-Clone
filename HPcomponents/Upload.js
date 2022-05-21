import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
import {v4 as uuidv4} from "uuid"


function Upload(userData){
    const[loading,setLoading] = useState(false)
    const[error,setError] = useState('')
    const[progress,setProgress] = useState(0)
     
    const handleChange = (e) => {
        if(file == null){
            setError("Please Select a Video")
            setTimeout(() => {
                setError('')
            }, 2000);
            return;
        }
        if(file.size/1024*1024 > 40){
            setError("Please Select a Video")
            setTimeout(() => {
                setError('')
            }, 2000);
            return;
        }
        
    }
    
     


    return(
        <div>
            { error!=""?
        <Alert severity="error">error</Alert> : 
        <Button className ='uploadbtn' variant="outlined" fullWidth compnent ="label" startIcon={<MovieIcon/>} style={{marginTop:'1rem'}}>
        <input type = 'file' accept='video/*' style ={{display:'none'}} onChange = {handleChange}/> Upload Video
        </Button>
            }
        
        {
        loading &&
        <LinearProgress variant="determinate" value={50} />
         }     
        
        </div>
    )
}
export default Upload