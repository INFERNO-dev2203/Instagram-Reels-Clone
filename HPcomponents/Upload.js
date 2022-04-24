import { Button } from "@mui/material";
import React from "react";
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';


function Upload(){
    return(
        <div>
        <Button className ='uploadbtn' variant="outlined" fullWidth compnent ="label" startIcon={<MovieIcon/>} style={{marginTop:'1rem'}}>
        <input type = 'file' accept='image/*' style ={{display:'none'}}/> Upload Video
        </Button>
        <LinearProgress variant="determinate" value={50} />
        </div>
    )
}
export default Upload