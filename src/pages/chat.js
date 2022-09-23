import React from 'react'
import '../styles/chat.css'
import {IoIosArrowBack,} from "react-icons/io"
import logo from "../icons/images/nsm3k2.png"
import Keyboard from '../shared/keyboard'
import {Link, useParams} from 'react-router-dom'
import QRCode from "react-qr-code"

import io from "socket.io-client";
// connect to socket io 
// const socket = io.connect('http://51.79.84.228:9000/')
const socket = io.connect('http://localhost:4000')

function Chat(props) {
  const {room} = useParams()
  socket.emit('join-room', room)
  const [popQr, setPopQr] = React.useState(false)
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

  const [messages, setMessages] = React.useState(
    [
      // {msg: "السلام عليكم", isMe: false},
      // {msg: "اصعهص", isMe: false},
      // {msg: "السلصشيصشيام صشيصشي", isMe: true},
      // {msg: "صشيصي شصيصشي", isMe: true},
      // {msg: "wdawd", isMe: false},
      // {msg: "wdawd", isMe: false},
      // {msg: "wdawd", isMe: false},

    ])


  
  React.useEffect(() => {
    socket.on('sendMessage', (data) => {
      console.log(data)
      document.querySelector(".chat-container").scrollTop = document.querySelector(".chat-container").scrollHeight 
      setMessages(prev => [...prev, {msg:data.msg, isMe:false, imgSrc:data.imgSrc}])
    })

    return function cleanup() {
      socket.removeListener("sendMessage");
    };

  }, [])
  
  // const receiveMessage = (msg) => {
  //   setMessages(prev => [...prev, msg])
  // }

  let chatArr = []

  chatArr = messages.map(msg=>{

    let imgs = msg.imgSrc.map(img=>{
      return(<img src={img} alt="img" className='chat-img'/>)
    })

    return(     msg.isMe ?          
            <div className='message-container message-me'>
              <div className='border-me'>
                <p>{msg.msg} </p>
                <div className='imgs-chat'>
                  {imgs}
                  </div>
              </div>
             </div> 
             :
            <div className='message-container message-user'>
                <div className='border-user'>
                  <p>{msg.msg}</p>
                <div className='imgs-chat'>
                  {imgs}
                  </div>
                </div>
            </div>)
  })

  return (
    <div className='center'>
      <div className='nav'>
        <Link to='/'><IoIosArrowBack className='arrowIcon'/></Link>
        <div className='code-container'>
          <QRCode size={50} value={`http://localhost/${room}`}/>
          <p>رقم الغرفة: {room}</p>
        </div>
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
      <div className='chat-container'>
        {chatArr}
      </div>
      <Keyboard isIcon={isIcon} message="dwad" socket={socket} room={room} setMessages={setMessages} />
    </div>
  )
}

export default Chat