import React from 'react'
import { Header } from '../Components/Header'
import HomePage from '../Components/HomePage'
import { Text } from '../Components/Text'
import {Cards} from '../Components/Cards'
import { List } from '../Components/List'
import { ContactSession } from '../Components/ContactSession'
import { Footer } from '../Components/Footer'

 const Main = () => {
  return (
    <div>
        <Header/>
        <HomePage/>
        <Text/>
        <Cards/>
        <List/>
        <ContactSession/>
        <Footer/>
        
    </div>
  )
}

export default Main
