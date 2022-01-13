import { useState, useEffect } from 'react'
import cookie from "../../assets/cookie-svgrepo-com.svg"
import "./Main.scss"

const Main = () => {
    const [click, setclick] = useState(0)
    const [step, setstep] = useState(1)

    useEffect(() => {
        setInterval(()=>{
            setstep(step*2)
            setTimeout(()=>setstep(1), 5000);
        }, 20000);
    }, [step])

    const handleClick = ()=>{
        setclick(click+step)
    }

    return (
        <div className='container'>
            <p className='clicks'>{click}</p>
            <p className='clicks'>step: {step}</p>
            <img onClick={handleClick} className='cookie' src={cookie} alt="cookie"/>
        </div>
    )
}

export default Main
