import React from 'react';
import './Footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';


function Footer() {
  return (
    <div className='footer'>

      <div className='footer__left'>
        <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt=""/>
        <div className='footer__songInfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>

      </div>

      <div className='footer__center'>
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>
      </div>

      <div className='footer__right'>
        <Grid container spacing={2} >
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>

        </Grid>
      </div>

        
    </div>
  )
}

export default Footer