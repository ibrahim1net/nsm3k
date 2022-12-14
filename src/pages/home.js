import React from 'react'
import '../styles/main.css'
import {TiPlusOutline} from "react-icons/ti"
import { FiTwitter, FiYoutube, FiInstagram} from "react-icons/fi"
import {ImEnter} from 'react-icons/im'
import logo from '../icons/images/nsm3k1.png';
import mlhmLogo from "../icons/images/mlhm.png"

import make from "../icons/signs/make.png"
import enter from "../icons/signs/enter.png"

import PopEnter from '../shared/PopEnter'
import { Link } from "react-router-dom";

function Home() {

  const [pop, setPop] = React.useState(false)


  return (
    <>
    <div className='center-div'>
      <div className='mlhm'>
          <img src={mlhmLogo} alt="logo mlhm"/>
      </div>

      <div className='logo-nsm3k'>
        <img src={logo} alt="Logo nsm3k" />
      </div>

        <div className='box' >
          <Link to={`/chat/${Math.floor(Math.random() * (9999 - 1000) + 1000 )}`}>
            <TiPlusOutline className='icon'/>
            <p className='homeFont'>انشاء محادثة</p>
            <img src={make} alt="انشاء" className='buttons-img'/>
          </Link>
        </div>
      
      <div className='box' onClick={e=>setPop(!pop)}>
        <ImEnter className='icon'/>
          <p className='homeFont'>دخول الى محادثة</p>
          <img src={enter} alt="انشاء" className='buttons-img'/>
      </div> 

    </div>
      <div className='footer'>
          <p>MULHAM</p>
          <FiTwitter className='footer_icon'/>
          <FiYoutube className='footer_icon'/>
          <FiInstagram className='footer_icon'/>
        <p>@جميع الحقوق لدى نسمعك المطورين</p>
      </div>
      {pop?<PopEnter setPop={setPop}/>: ''}
    </>
  )
}

export default Home