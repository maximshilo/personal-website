import React from 'react'

import Navbar from './Navbar.jsx'

export default function About(props) {
    const skills = [
        ['Front-end', 'React', 'JavaScript', 'HTML5', 'CSS3'],
        ['Back-end', 'Node.js', 'Express'],
        ['Databases', 'MongoDB'],
        ['Tools', 'Git', 'Heroku'],
        ['Languages', 'JavaScript', 'C#', 'Python'],
    ]

    const displaySkills = () => {
        return (
                <div className='skills'>
                </div>
        )
    }

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
                            Technical Skills
                        </span>
                    </div>

                    <div className='row'>
                        {displaySkills()}
                    </div>

                    <div className='row'>
                        <span className='mainHeading'>
                            Education
                        </span>
                    </div>

                    <div className='row'>
                        <span className='mainHeading'>
                            Biography
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}