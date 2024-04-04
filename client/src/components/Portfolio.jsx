import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function Portfolio(props) {
    const navigate = useNavigate()
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
                        <div className='projectCon'>
                                <div className='row'><span className='projectHeading'>ECHO</span></div>
                                <div className='row'><span className='projectBody'>Social media application.</span></div>
                                <div className='row'>
                                    <Link target="_blank" to={'https://echo-application-d49a62c92c1a.herokuapp.com/'} className='projectBody'>Live version</Link>
                                    <div className='empty'></div>
                                    <Link target="_blank" to={'https://github.com/maximshilo/echo.git'} className='projectBody'>GitHub repository</Link>
                                </div>
                                <img className='projectImg' src='images/echo.png'></img>
                                <div className='row'>
                                    <p>
                                    Echo is a Twitter-inspired application developed using React, MongoDB, Express, and Node.js (MERN stack). 
                                    With Echo, users can post short messages, follow other users, and engage with content in real-time. 
                                    Echo provides a seamless and intuitive user experience for sharing thoughts and connecting with others. 
                                    Whether it's expressing opinions, sharing updates, or fostering discussions, 
                                    Echo offers a familiar platform for social interaction and networking.
                                    </p>
                                </div>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>BASKET</span></div>
                            <div className='row'><span className='projectBody'>E-commerce platform.</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>FINTRACK</span></div>
                            <div className='row'><span className='projectBody'>Personal finance tracker.</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>DONIT</span></div>
                            <div className='row'><span className='projectBody'>Project management tool.</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>SUDOKU</span></div>
                            <div className='row'><span className='projectBody'>A puzzle game.</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}