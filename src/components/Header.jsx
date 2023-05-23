import React from 'react'
import '../styles/App.css';
import image from './images/red.png';
import Tittle from './Tittle'
import Subtitle from './SubTitle';
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='titleContainer'>
        <Tittle text="Find your style here" color="black" />
        <Subtitle content="Check the latest and trending products!" color="green" />
      </div>
      <img className='headerImage' src={image} alt="Header" />
    </div>
  )
}

export default Header