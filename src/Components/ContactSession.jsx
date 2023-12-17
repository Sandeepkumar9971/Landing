import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SendIcon from '@mui/icons-material/Send';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppleIcon from '@mui/icons-material/Apple';

export const ContactSession = () => {
  return (
    <div className='ContactS-Main'>
      <div className='ContactS-parent'>
<div className='ContactS-Child'>
<h2>Want to stay informed?</h2><br />
<h6>Discover Nepal’s endless possibilities with our intuitive and convenient booking platform, designed to help you find your dream accommodation.</h6><br /><br />
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600,marginLeft:'10%' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Your Email Address"
        inputProps={{ 'aria-label': 'Enter Your Email Address' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton style={{color:'#FF5F632E'}} sx={{ p: '10px' }} aria-label="directions">
      {/* <SendIcon style={{color:'rgba(255, 95, 99, 0.18)'}}/> */}
      <i class="fa fa-telegram" style={{fontSize:'30px',color:'rgba(255, 114, 149, 1)'}}></i>
      </IconButton>
    </Paper><br />
    <div className='ContactS-Icons'>
<div>

  <Container>
        <Row>
          <Col xs={6}>
            <img src='App Store.jpg'/>
          </Col>
          <Col xs={6}>
          <img src='Google Play.jpg'/>
          </Col>
        </Row>
      </Container>

</div>

    </div>
</div>
      </div>
    </div>
  )
}
