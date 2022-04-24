import React from 'react';
import Navbar from "./Navbar"
import Upload from "./Upload"
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';



function Feed() {
    return (
        <div className='feed_container'>
            <Navbar/>
            <Upload/>
            <div className='video-container'>
                <div className="post-container">
                    <video/>
                </div>
                <div className="post-container">
                    <video/>
                </div>
                <div className = 'ftrfd'>
                    <div className="ftrfdr1">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    <p style={{marginLeft:"10px"}}><strong>Name</strong></p>
                    </div>
                    <div className="ftrfdr2">
                      <FavoriteBorderIcon fontSize="large" sx={{marginLeft:"1rem" }}/>
                      <ModeCommentIcon fontSize="large" sx={{marginLeft:"10px",marginTop:'10px'}} />
                      <ShareIcon fontSize = "large"sx={{marginLeft:"10px", marginTop:"10px"}}/>
                    </div>
                </div>



            </div>
        </div>
    );
    }

    export default Feed;