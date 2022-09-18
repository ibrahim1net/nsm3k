import React from 'react'
import '../styles/main.css'
import {TiPlusOutline} from "react-icons/ti"
import { FiTwitter, FiYoutube, FiInstagram} from "react-icons/fi"
import {ImEnter} from 'react-icons/im'
import logo from '../icons/images/nsm3k.png';
import mlhmLogo from "../icons/images/mlhm.png"

function Home() {
  return (
    <div className='center-div'>
      
      <div className='mlhm'>
          <img src={mlhmLogo} alt="logo mlhm"/>
      </div>

      <div className='logo-nsm3k'>
        <img src={logo} alt="Logo nsm3k" />
      </div>

      <div className='box'>
        <TiPlusOutline className='icon'/>
        <p className='homeFont'>انشاء محادثة</p>
      </div>
      <div className='box'>
        <ImEnter className='icon'/>
        <p className='homeFont'>دخول الى محادثة</p>
      </div>

      <div className='footer'>
          <p>MULHAM</p>
          <FiTwitter />
          <FiYoutube />
          <FiInstagram />
        <p>@جميع الحقوق لدى نسمعك المطورين</p>
      </div>
    </div>
  )
}

export default Home