import { useState, useEffect } from 'react'
import cookie from "../../assets/cookie-svgrepo-com.svg"
import "./Main.scss"

const Main = () => {
    const [clicks, setclicks] = useState(0)
    const [step, setstep] = useState(1)
    const [shadowClickers, setshadowClickers] = useState(0)

    useEffect(() => {
        setInterval(()=>{
            setstep(step*2)
            setTimeout(()=>setstep(1), 5000);
        }, 20000);
    }, [step])

    const handleClick = ()=>{
        setclicks(clicks+step)
    }

    const handleBuyShadowClicker = () =>{
        if (clicks >= 100){
            setclicks(clicks-100)
            setshadowClickers(shadowClickers+1)
        }
    }

    return (
        <div className='container'>
            <p className='clicks'>{clicks}</p>
            <p className='clicks'>step: {step}</p>
            <p className='clicks'>shadowClickers bought: {shadowClickers}</p>
            <img onClick={handleClick} className='cookie' src={cookie} alt="cookie"/>
            <button onClick={handleBuyShadowClicker}>buy shadowClickers</button>
        </div>
    )
}

export default Main
