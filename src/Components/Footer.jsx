import React from 'react'

export const Footer = () => {
  return (
    <div className='Footer-Main'>
       
        <div className='Footer-content' style={{marginLeft:'40%'}}><br></br>
            <div className='Footer-img' >
                <img src='Logo 2.png' style={{height:'50px',width:'200px',marginTop:'20%'}}/>
            </div><br/>
            <div className='Footer-text'>
                <span className='Footer-t'> Help Center |</span>
                <span className='Footer-t'> Privacy Policy |</span>
                <span className='Footer-t'> FAQ</span>
            </div><br></br>
            <div className='footer-logo'>
                <span className="fa fa-twitter" style={{color:'#fff'}}></span>
                <span className="fa fa-facebook" style={{color:'#fff'}}></span>
                <span className="fa fa-instagram" style={{color:'#fff'}}></span>
            </div><br/>
            <div className='Footer-text-2'>
                <span>
                Copyright © 2023 @ Suvatrip.com
                </span>
            </div>
        </div>
       
    </div>
  )
}
