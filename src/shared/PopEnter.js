import {motion, AnimatePresence} from "framer-motion"
import React from "react"
import {useNavigate} from "react-router-dom"

export default function PopEnter(props){
    // animate the pop up div 
    const top ={
        hidden:{
            y: '-30vh',
            opacity: 0
        },
        visible : {
            y : '0',
            opacity : 1,
            transition:{
                duration: .8
            }
        },
        exit:{
            y: "55vh",
            opacity: 0
        }
    }

    const onCloseHandler = (e)=>{
        props.setPop(prev => !prev)
    }

  const navigate = useNavigate()
  const [roomId, setRoomId] = React.useState('')
  const enterHandler = (e)=>{
    if(roomId.length> 0){
        navigate(`/chat/${roomId}`)
    }
  }

    return(<>
        <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={()=>null}>
            <div className="layout">
                <motion.div variants={top} initial="hidden" animate="visible" exit="exit" className="moduleContainer">
                    <div className="moduleMain">
                        <h2>أدخل الرمز</h2>
                        <input onChange={e=>setRoomId(e.target.value)} type="number"/>
                    </div>
                    <div className="moduleFooter">
                        <button className="closeButton" onClick={onCloseHandler}>الغاء</button>
                        <button className="enterButton" onClick={enterHandler}>دخول</button>
                    </div>
                </motion.div>    
            </div>
        </AnimatePresence>
    </>
    )
}