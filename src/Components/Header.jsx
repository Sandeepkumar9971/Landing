import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Header = () => {
  const mainDivStyle = {
    // background: 'rebeccapurple',
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    margin: '13px'

  };

  const logoStyle = {
    height: 100,
    marginTop: '-30px'
  };

  const button1Style = {
    background: '#FF5F63',
    borderRadius: 9,
    width:'110%'

  };

  const button2Style = {
    display: 'flex',
    padding: '14px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  };
  const textstyle = {
    color: 'var(--Text, #2E2E2E)',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',
letterSpacing: '1px',
textTransform: 'uppercase',
  }

  return (
    <div style={mainDivStyle}>
      <Container>
        <Row>
          <Col xs={6}>
            <img src='logo.png' style={logoStyle} />
          </Col>
          <Col xs={6}>
            <Row style={{ marginTop: '10px' }}>
              <Col xs={4}></Col>
              <Col xs={5}>
                <Button variant="contained" style={button1Style}>
                  List Your Property  <span style={{margin:'0 0 0 10%'}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="15" fill="#FF7295" />
                    <path d="M8 14.5C8 14.0513 8.36377 13.6875 8.8125 13.6875H17.8718L13.9109 9.72666C13.5872 9.40293 13.5919 8.87665 13.9213 8.55868C14.2425 8.24855 14.7531 8.25305 15.0688 8.5688L20.9356 14.4356C20.9712 14.4712 20.9712 14.5288 20.9356 14.5644L15.07 20.43C14.7552 20.7448 14.2448 20.7448 13.93 20.43C13.6162 20.1162 13.6151 19.6078 13.9275 19.2926L17.8718 15.3125H8.8125C8.36377 15.3125 8 14.9487 8 14.5Z" fill="white" />
                  </svg>
                  </span>
                </Button>
              </Col>
              <Col xs={3}>
                <Button  style={button2Style}>
               <span style={textstyle}>sign in</span> 
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
