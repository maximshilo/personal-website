import React from 'react'

import Navbar from './Navbar.jsx'

export default function Portfolio(props) {
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
                            <div className='row'><span className='projectHeading'>UNDER CONSTRUCTION</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>BASKET</span></div>
                            <div className='row'><span className='projectBody'>E-commerce platform.</span></div>
                            <div className='row'><span className='projectHeading'>UNDER CONSTRUCTION</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>FINTRACK</span></div>
                            <div className='row'><span className='projectBody'>Personal finance tracker.</span></div>
                            <div className='row'><span className='projectHeading'>UNDER CONSTRUCTION</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>DONIT</span></div>
                            <div className='row'><span className='projectBody'>Project management tool.</span></div>
                            <div className='row'><span className='projectHeading'>UNDER CONSTRUCTION</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                        <div className='projectCon'>
                            <div className='row'><span className='projectHeading'>SUDOKU</span></div>
                            <div className='row'><span className='projectBody'>A puzzle game.</span></div>
                            <div className='row'><span className='projectHeading'>UNDER CONSTRUCTION</span></div>
                            <img className='projectImg' src='images/construction.png'></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}