import React from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from './Navbar.jsx'

export default function Landing(props) {
    const navigate = useNavigate()

    return (
        <div className='Landing'>
            <div className='con'>
                <div className='col'>
                    <div className='row'>
                        <span className='displayHeading'>
                            Maxim Shilo
                        </span>
                    </div>

                    <div className='row'>
                        <span className='mainHeading'>
                            Full Stack developer
                        </span>
                    </div>

                    <div className='row'>
                        <span className='secondaryHeading'>
                            React | Express | Node | Mongoose
                        </span>
                    </div>

                    <div className='row'>
                        <Navbar landing={true} />
                    </div>

                    <div className='row'>
                        <span className='regularBody'>
                            Eager and talented, newly trained Full Stack Developer with a strong foundation
                            in both front-end and back-end development, courtesy of a comprehensive course
                            at SVCollege in Tel- Aviv, Israel. Ready to leverage my skills in HTML5, CSS3,
                            JavaScript, React, Node.js, and MongoDB to develop innovative, user-centric
                            software solutions.
                        </span>
                    </div>
                </div>
            </div>

            {/* <div className='container'>
                <div className='linkDivsGroup'>
                    <div onClick={() => { navigate('/about') }} className='linkDiv'>About me</div>
                    <div onClick={() => { navigate('/portfolio') }}  className='linkDiv'>Portfolio</div>
                    <div onClick={() => { navigate('/resume') }}  className='linkDiv'>Resume</div>
                </div>
            </div> */}
        </div>
    )
}