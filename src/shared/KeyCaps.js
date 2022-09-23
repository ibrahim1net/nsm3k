import q from "../icons/signs/symbols/q.JPG"
import w from "../icons/signs/symbols/w.JPG"
import e from "../icons/signs/symbols/e.JPG"
import r from "../icons/signs/symbols/r.JPG"
import t from "../icons/signs/symbols/t.JPG"
import y from "../icons/signs/symbols/y.JPG"
import u from "../icons/signs/symbols/u.JPG"
import i from "../icons/signs/symbols/i.JPG"
import o from "../icons/signs/symbols/o.JPG"
import p from "../icons/signs/symbols/p.JPG"
import gym from "../icons/signs/symbols/gym.JPG"
import a from "../icons/signs/symbols/a.JPG"
import s from "../icons/signs/symbols/s.JPG"
import d from "../icons/signs/symbols/d.JPG"
import f from "../icons/signs/symbols/f.JPG"
import g from "../icons/signs/symbols/g.JPG"
import aleph from "../icons/signs/symbols/aleph.JPG"
import noon from "../icons/signs/symbols/noon.JPG"
import kaf from "../icons/signs/symbols/kaf.JPG"
import z8 from "../icons/signs/symbols/z8.JPG"
import x from "../icons/signs/symbols/x.JPG"
import c2 from "../icons/signs/symbols/c2.JPG"
import dal from "../icons/signs/symbols/dal.JPG"
import zal from "../icons/signs/symbols/zal.JPG"
import v from "../icons/signs/symbols/v.JPG"
import waw from "../icons/signs/symbols/waw.JPG"
import mem from "../icons/signs/symbols/mem.JPG"
import x6 from "../icons/signs/symbols/x6.JPG"
import taa from "../icons/signs/symbols/taa.jpeg"
import m from "../icons/signs/symbols/m.JPG"
import n from "../icons/signs/symbols/n.JPG"

import {RiDeleteBack2Fill,RiSpace} from "react-icons/ri"
export default function KeyCaps(props){
    const letters = [
        ["ض",q],
        ["ص",w],
        ["ث",e],
        ['ق', r],
        ["ف", t],
        ["غ", y],
        ["ع", u],
        ["ه", i],
        ["خ", o],
        ["ح", p],
        ["ج", gym],
        ["ش", a],
        ["س",s],
        ["ي",d],
        ["ب", f],
        ["ل", g],
        ["ا",aleph],
        ["ت",taa],
        ["ن",noon],
        ["م", mem],
        ["ك", kaf],
        ["ة", m],
        ["ء", x],
        ["ظ", z8],
        ["ط",x6],
        ["ذ",c2],
        ["د",dal],
        ["ز",zal],
        ["ر", v],
        ["و",waw],
        ["ى", n],
    ]
    let keyCaps = []

    keyCaps = letters.map(letter=>{
        const onClickHandler = (event)=>{
            if(props.isIcon){
                props.setImgSrc(e=> [...e, letter[1]])
                const text = letter[0]
                props.setInputField(e=> e += text)
            }else{
                const text = letter[0]
                props.setInputField(e=> e += text)
                props.setImgSrc(e=> [...e, letter[1]])

            }
        }
        return(
            <div className="letter-box" onClick={onClickHandler}>
                <img src={letter[1]} alt="img"/>
            </div>
        )
    })

    const deleteHandler = (event)=>{
        if(props.isIcon){
            props.imgSrc.pop()
            props.setImgSrc(e=> [...props.imgSrc])
        }else{
            props.setInputField(e=> e = e.slice(0, -1))
        }
    }

    return(
        <>
            <div className="keyCaps-container">
                {keyCaps}
                <div className="delete" onClick={deleteHandler}>
                    <RiDeleteBack2Fill/>
                </div>
                
            </div>
            <div className="space" onClick={event=> props.setInputField(e=> e += " ")}>
                <RiSpace/>
            </div>  
        </>
    )
}