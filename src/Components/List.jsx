import React from 'react'
import './Main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from 'react-bootstrap/Card';

export const List = () => {
  const listdata = [
    {
      id: '1',
      HeaderText: '2k',
      HeadlineText: 'Properties listed',
      text: 'From hotels to outdoor lodges, we offer it all!',
      color: '#00A97E'
    },
    {
      id: '2',
      HeaderText: '1M',
      HeadlineText: 'Site visitors',
      text: 'We offer our partners tailored guest traffic.',
      color: '#FF5F63'
    },
    {
      id: '3',
      HeaderText: '30k',
      HeadlineText: 'Reservation booked',
      text: 'Hotel guests enjoy how easy it is to book!',
      color: '#00A97E'
    },
    {
      id: '4',
      HeaderText: '90%',
      HeadlineText: 'Customer satisfaction',
      text: 'We offer both clients and partner top-level support.',
      color: '#FF5F63'
    },
  ]
  const button1Style = {
    background: '#FF5F63',
    borderRadius: 9,
    width: '110%'

  };
  return (
    <div className='Text-Main'>
      <Container>
        <Row className='Text-Row'>
          <Col xs={4} className='Text-Col-1'>
            Why list your hotel on <span className='Text-SuvaTrip'>SuvaTrip</span><br></br><br></br>
            <Button variant="contained" style={button1Style}>
              List Your Property  <span style={{ margin: '0 0 0 10%' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#FF7295" />
                <path d="M8 14.5C8 14.0513 8.36377 13.6875 8.8125 13.6875H17.8718L13.9109 9.72666C13.5872 9.40293 13.5919 8.87665 13.9213 8.55868C14.2425 8.24855 14.7531 8.25305 15.0688 8.5688L20.9356 14.4356C20.9712 14.4712 20.9712 14.5288 20.9356 14.5644L15.07 20.43C14.7552 20.7448 14.2448 20.7448 13.93 20.43C13.6162 20.1162 13.6151 19.6078 13.9275 19.2926L17.8718 15.3125H8.8125C8.36377 15.3125 8 14.9487 8 14.5Z" fill="white" />
              </svg>
              </span>
            </Button>
          </Col>
          <Col xs={1}></Col>
          <Col xs={7} className='Text-Col-2'>
            We constantly improve our platform and services to ensure you can offer the best experience to your customers.
            <hr style={{
              width: '744px',
              border: '1px solid red'


            }}></hr>
            <div className='List-Card'>
              {
                listdata.map((data) => {
                  return (
                    <Card style={{ width: '100%' }}>
                      <Card.Body >
                        <Card.Title style={{ color: `${data.color}` }} className='Card-text'><span className='Line-text-1'>{data.HeaderText}</span></Card.Title>
                        <Card.Title className='Card-text'><span className='Line-text-2'>{data.HeadlineText}</span></Card.Title>
                        <Card.Title className='Card-text'><span className='Line-text-3'>{data.text}</span></Card.Title>
                      </Card.Body>
                    </Card>
                  )
                })
              }
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
