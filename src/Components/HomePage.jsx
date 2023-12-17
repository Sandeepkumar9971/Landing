import React from 'react'
import './Main.css'

const HomePage = () => {
  return (
    <div className='HomeScreen-main'
      style={{ background: "url('HomeScreen.jpg')", height: '700px', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-10px' }}
      alt='home screen' >
      <div style={{ width: '100%' }}>
        <div className='HomeScreen-Left'>

          <div className='HomeScreen-text1'>Listing Your <span className='homeScreen-hotel'>Hotel</span> Made Easy</div>
          <div className='HomeScreen-text2'>Registering your property is 100% free and takes less than 15 minutes.</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default HomePage;
