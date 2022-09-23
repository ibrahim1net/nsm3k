
import {IoMdSend} from "react-icons/io"

import hi from "../icons/signs/hi.png"
import iloveU from "../icons/signs/iloveU.png"
import goodLuck from "../icons/signs/goodLuck.png"
import bey from "../icons/signs/bey.png"
import ok from "../icons/signs/ok.png"
import goodJob from "../icons/signs/goodJob.png"
import no from "../icons/signs/no.png"

import KeyCaps from "./KeyCaps"
import React from "react"

export default function Keyboard(props){
    const [inputField, setInputField] = React.useState('')
    const [imgSrc, setImgSrc] = React.useState([])

    const shortcutHandler = (e)=>{
        if(props.isIcon){
            const img = e.currentTarget.children[0].src
            let text = e.currentTarget.children[1].innerHTML
            setImgSrc(e => [...e, img])
            setInputField(`${text}`)
        }else{
            const img = e.currentTarget.children[0].src
            let text = e.currentTarget.children[1].innerHTML
            setImgSrc(e => [...e, img])
            setInputField(`${text}`)
        }
    }
    
    let img = []
    img = (imgSrc.map(e=>{
        return(
            <img src={e} alt="img"/>
        )
    }))

    const onsubmitHandler =(e)=>{
        if(inputField.length> 0){
            props.socket.emit('sendMessage' ,{msg:inputField, room:props.room, imgSrc:imgSrc})
            props.setMessages(prev=> [...prev , {msg:inputField, isMe: true, imgSrc:imgSrc}])
            setInputField('')
            setImgSrc([])
            document.querySelector(".chat-container").scrollTop = document.querySelector(".chat-container").scrollHeight 
        }
    }

    return(
        <>
        <div className='keyboard'>
          <div className='input'>
            <div className='input-field'>
                {props.isIcon? img: inputField}
            </div>
            <IoMdSend className='chat-submit' onClick={onsubmitHandler}/>
          </div>
          <div className='shortcut'>
                <div onClick={shortcutHandler}>
                    <img src={hi} alt="img"/>
                    <p style={{fontSize:'.5rem'}}>السلام عليكم</p>
                </div>
                <div onClick={shortcutHandler}>
                    <img src={iloveU} alt="img"/>
                    <p>احبك</p>
                </div>
                <div onClick={shortcutHandler}>
                    <img src={goodLuck} alt="img"/>
                    <p>بالتوفيق</p>
                </div>
                <div onClick={shortcutHandler}>
                    <img src={bey} alt="img"/>
                    <p style={{fontSize:'.5rem'}}>مع السلامة</p>
                </div>
                <div onClick={shortcutHandler}>
                    <img src={ok} alt="img"/>
                    <p>تمام</p>
                </div>
                    <div onClick={shortcutHandler}>
                    <img src={goodJob} alt="img"/>
                <p>عمل جيد</p>
                </div>
                    <div onClick={shortcutHandler}>
                    <img src={no}  alt="img"/>
                <p>لا</p>
            </div>
          </div>
            <KeyCaps isIcon={props.isIcon} setInputField={setInputField} img={img} imgSrc={imgSrc} setImgSrc={setImgSrc}/>
        </div>
        </>
    )
}