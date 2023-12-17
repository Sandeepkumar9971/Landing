import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Main.css'

export const Cards = () => {
  const CardData = [
    {
      id: 1,
      discription: 'Free',
      logo: 'fi-rr-laugh.jpg',
      backgrd: 'rgba(0, 169, 126, 0.15)'
    },
    {
      id: 2,
      discription: 'Reach with global guest ',
      logo: 'fi-rr-world.jpg',
      backgrd: 'rgba(255, 95, 99, 0.15)'
    },
    {
      id: 3,
      discription: 'List any property type on your budget ',
      logo: 'fi-rr-building.jpg',
      backgrd: 'rgba(59, 125, 237, 0.15)'
    },
    {
      id: 4,
      discription: 'Support International payment cards ',
      logo: 'fi-rr-credit-card.jpg',
      backgrd: 'rgba(255, 130, 58, 0.15)'
    },
    {
      id: 5,
      discription: 'Free Guidance and online Resources',
      logo: 'fi-rr-map-marker.jpg',
      backgrd: 'rgba(151, 71, 255, 0.15)'
    },
    {
      id: 6,
      discription: 'Easy competition in the market',
      logo: 'fi-rr-laugh-2.jpg',
      backgrd: 'rgba(240, 181, 1, 0.15)'
    },
    {
      id: 7,
      discription: 'Digital way getting guest at your hotel ',
      logo: 'fi-rr-wifi-alt.jpg',
      backgrd: 'rgba(57, 207, 255, 0.15)'
    },
  ]
  return (
    <div className='Card-Main-2'>
{
  CardData.map((data)=>{
    return(
      <div className='Card-parent-2'>
      <div className='Card-img' style={{background:`${data.backgrd}`}}>
        <img src={data.logo} className='Card-logo' />
      </div>
      <div className='Card-text-2'>{data.discription}</div>
    </div>
    )
  })
}
    

      

    </div>
  )
}
