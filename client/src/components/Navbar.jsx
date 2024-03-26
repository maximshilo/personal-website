import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar (props) {
    const navigate = useNavigate()
    const displayLandingButton = () => {
        if (!props.landing) {
            return <button onClick={() => { navigate('/')}} className='landingButton'>Home</button>
        } else {
            let innerHTML = 'Contact'
            let callback = () => {
                props.contact.setFlag(!props.contact.flag)
            }
            return <button onClick={callback} className='landingButton'>{innerHTML}</button>
        }
    }
    return (
        <div className='con'>
            <div className='navRow'>
                { displayLandingButton() }
                <button onClick={() => { navigate('/about') }} className='landingButton'>About</button>
                <button onClick={() => { navigate('/portfolio') }} className='landingButton'>Portfolio</button>
                <button onClick={() => { navigate('/resume') }} className='landingButton'>Resume</button>
            </div>
        </div>
    )
}