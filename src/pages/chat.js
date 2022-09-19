import React from 'react'
import '../styles/chat.css'
import {IoIosArrowBack} from "react-icons/io"
import logo from "../icons/images/nsm3k2.png"
function Chat() {
  const [isIcon, setIsIcon] = React.useState(false)

  const switchHandler =()=>{
    setIsIcon(!isIcon)
    if(isIcon){
      // if it text
      document.querySelector('.switch1').classList.add('active')
      document.querySelector('.switch2').classList.remove('active')
    } else{
      // if it icon 
      document.querySelector('.switch2').classList.add('active')
      document.querySelector('.switch1').classList.remove('active')    }
  }

  return (
    <div>
      <div className='nav'>
        <IoIosArrowBack className='arrowIcon'/>

        <div className='logo-img'>
          <img src={logo} alt="logo" />
        </div>

        <div className='switchContainer' onClick={switchHandler}>
          
          <div className='switch1 active'>
            <p>أ</p>
          </div>

          <div className='switch2'>
              <p>👍</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Chat