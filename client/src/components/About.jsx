import React from 'react'

import Navbar from './Navbar.jsx'
import Contact from './Contact.jsx'

export default function About(props) {
    const skills = [
        ['Front-end', 'React', 'JavaScript', 'HTML5', 'CSS3'],
        ['Back-end', 'Node.js', 'Express'],
        ['Databases', 'MongoDB'],
        ['Tools', 'Git', 'Heroku'],
        ['Languages', 'JavaScript', 'C#', 'Python'],
    ]

    const continousLearning = {
        current: [`'Learn Vue.js' course @ Codecademy`],
        completed: [`'Learn Python 3' course @ Codecademy`]
    }

    const education = [
        ['B.Sc in Computer Science', '2024 - expected 2026', 'Bar Ilan University, Ramat Gan, Israel.'],
        ['Full stack Development Certification', '2023 - 2024', 'SVCollege, Tel Aviv, Israel.'],
        ['Highschool Diploma', '2014 - 2018', 'With coursework in Computer Science, Mathematics, and Physics.']
    ]

    const biography = String.raw`Hello, I'm Maxim Shilo, a fervent full stack developer based in the vibrant Tel Aviv district of Israel. At 25 years old, I stand at the intersection of technology and creativity, dedicated to weaving the art and science of computer science into every project I undertake.

    My journey into the world of technology began in childhood, sparked by a simple yet transformative gift from my grandmother—a family PC. This early encounter with computing opened a gateway to a world where logic meets imagination, leading me down a path of endless fascination with technology and, specifically, computer science.
    
    What excites me most about full stack development is the holistic approach it offers—allowing me to craft complete, functional digital experiences from the ground up. It's not just about writing code; it's about sculpting digital environments that are as beautiful as they are functional, where every line of code and pixel of design resonates with the user's needs and aspirations.
    
    My passion for technology is matched only by my natural affinity for coding and algorithms. I thrive on the challenge of solving complex problems and the joy of bringing innovative ideas to life through meticulous coding and creative design. This blend of artistic expression and intellectual rigor is what makes full stack development not just my career, but my calling.
    
    I invite you to explore my portfolio, where each project showcases my dedication to crafting seamless, engaging digital experiences. Let's connect and create something extraordinary together.`

    const displaySkills = () => {
        return (
            <div className='skills'>
                {
                    skills.map((arr) => {
                        return (
                            <div className='col'>
                                <div className='sectionTitle'>{arr[0]}</div>
                                <div className='line'></div>
                                <ul>
                                    {
                                        arr.map((el, id) => {
                                            if (id != 0) {
                                                return (
                                                    <li>{el}</li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const displayContinousLearning = () => {
        return (
                <div className='col'>
                    <div className='skills'>
                        <div className='sectionTitle'>Current</div>
                        <ul>
                            {continousLearning.current.map(el => <li>{el}</li>)}
                        </ul>
                        <div className='sectionTitle'>
                            <span>Completed - Total of {continousLearning.completed.length} courses.</span>
                        </div>
                        <div className='scrollable'>
                            <ul>
                                {continousLearning.completed.map(el => <li>{el}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }

    const displayEducation = () => {
        return (
            <div className='skills'>
                {
                    education.map((arr) => {
                        return (
                            <div className='col'>
                                <div className='sectionTitle'>{arr[0]}</div>
                                <div className='line'></div>
                                <ul>
                                    {
                                        arr.map((el, id) => {
                                            if (id != 0) {
                                                return (
                                                    <li>{el}</li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const displayBiography = () => {
        return (
            <div className='skills'>
                <div className='col'>
                    <div className='sectionTitle'>
                        About me
                    </div>
                    <p>
                        Hello, I'm Maxim Shilo, a fervent full stack developer based in the vibrant Tel Aviv district of Israel. At 25 years old, I stand at the intersection of technology and creativity, dedicated to weaving the art and science of computer science into every project I undertake.
                    </p>
                    <p>
                        My journey into the world of technology began in childhood, sparked by a simple yet transformative gift from my grandmother—a family PC. This early encounter with computing opened a gateway to a world where logic meets imagination, leading me down a path of endless fascination with technology and, specifically, computer science.
                    </p>
                    <p>
                        What excites me most about full stack development is the holistic approach it offers—allowing me to craft complete, functional digital experiences from the ground up. It's not just about writing code; it's about sculpting digital environments that are as beautiful as they are functional, where every line of code and pixel of design resonates with the user's needs and aspirations.
                    </p>
                    <p>
                        My passion for technology is matched only by my natural affinity for coding and algorithms. I thrive on the challenge of solving complex problems and the joy of bringing innovative ideas to life through meticulous coding and creative design. This blend of artistic expression and intellectual rigor is what makes full stack development not just my career, but my calling.
                    </p>
                    <p>
                        I invite you to explore my portfolio, where each project showcases my dedication to crafting seamless, engaging digital experiences. Let's connect and create something extraordinary together.
                    </p>
                </div>
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
                        <Contact />
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
                        {displayEducation()}
                    </div>

                    <div className='row'>
                        <span className='mainHeading'>
                            Continuous Learning
                        </span>
                    </div>

                    <div className='row'>
                        {displayContinousLearning()}
                    </div>

                    <div className='row'>
                        <span className='mainHeading'>
                            Biography
                        </span>
                    </div>

                    <div className='row'>
                        {displayBiography()}
                    </div>
                </div>
            </div>
        </div>
    )
}