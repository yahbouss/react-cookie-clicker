import { useState } from 'react'
import cookie from "../../assets/cookie-svgrepo-com.svg"
import "./Main.scss"

const Main = () => {
    const [click, setclick] = useState(0)

    return (
        <div className='container'>
            <p className='clicks'>{click}</p>
            <img onClick={e=>setclick(click+1)} className='cookie' src={cookie} alt="cookie"/>
        </div>
    )
}

export default Main
