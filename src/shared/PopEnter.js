import {motion, AnimatePresence} from "framer-motion"

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

    return(<>
        <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={()=>null}>
            <div className="layout">
                <motion.div variants={top} initial="hidden" animate="visible" exit="exit" className="moduleContainer">
                    <div className="moduleMain">
                        <h2>أدخل الرمز</h2>
                        <input type="number"/>
                    </div>
                    <div className="moduleFooter">
                        <button className="closeButton" onClick={onCloseHandler}>الغاء</button>
                        <button className="enterButton">دخول</button>
                    </div>
                </motion.div>    
            </div>
        </AnimatePresence>
    </>
    )
}