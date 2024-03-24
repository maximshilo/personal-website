import React from 'react'

import Navbar from './Navbar.jsx'

export default function About (props) {
    return (
        <div className='About'>
            <div className='con'>
                <div className='col'>
                    <div className='row'>
                        <Navbar />
                    </div>

                    <div className='row'>
                        <span className='displayHeading'>
                            About
                        </span>
                    </div>

                    <div className='row'>
                        <span className='mainHeading'>
                            Full Stack developer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}