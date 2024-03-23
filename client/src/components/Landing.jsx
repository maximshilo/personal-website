import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing (props) {
    const navigate = useNavigate()

    return (
        <div className='Landing'>
            <div className='container'>
                Pic or Avatar, Maxim Shilo
            </div>

            <div className='container'>
                A brief introduction
            </div>

            <div className='container'>
                <div className='linkDivsGroup'>
                    <div onClick={() => { navigate('/about') }} className='linkDiv'>About me</div>
                    <div onClick={() => { navigate('/portfolio') }}  className='linkDiv'>Portfolio</div>
                    <div onClick={() => { navigate('/resume') }}  className='linkDiv'>Resume</div>
                </div>
            </div>
        </div>
    )
}