import React from 'react'

import Navbar from './Navbar.jsx'

export default function Portfolio (props) {
    return (
        <div className='Portfolio'>
            <div className='con'>
                <div className='col'>
                    <div className='row'>
                        <Navbar />
                    </div>

                    <div className='row'>
                        <span className='displayHeading'>
                            Portfolio
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