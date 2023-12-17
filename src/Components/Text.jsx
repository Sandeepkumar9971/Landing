import React from 'react'
import './Main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Text = () => {
  return (
    <div className='Text-Main'>
      <Container>
        <Row className='Text-Row'>
          <Col xs={4} className='Text-Col-1'>
            7 Reasons why hotels use <span className='Text-SuvaTrip'>SuvaTrip</span>
          </Col>
          <Col xs={1}></Col>
          <Col xs={7} className='Text-Col-2'>
            We constantly improve our platform and services to ensure you can offer the best experience to your customers.
            <hr style={{
              width: '744px',
              // height: '1px',
              border:'1px solid red'
              // background:'red'
            }}></hr>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
