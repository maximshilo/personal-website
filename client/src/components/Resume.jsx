import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar.jsx'

export default function Resume(props) {

    const downloadResume = () => {
        const pdfUrl = "maxim-resume.pdf";
        const link = document.createElement("a");

        link.href = pdfUrl;
        link.download = "Maxim - Resume - Full Stack Develper.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='Resume'>
            <div className='con'>
                <div className='col'>
                    <div className='row'>
                        <Navbar />
                    </div>

                    <div className='row'>
                        <span className='displayHeading'>
                            Resume
                        </span>
                    </div>

                    <div className='row'>
                        <Link to={'#'} onClick={() => { downloadResume() }} className='secondaryHeading'>
                            Download the resume
                        </Link>
                    </div>

                    <div className='row'>
                        <iframe src={'maxim-resume.pdf'} />
                    </div>
                </div>
            </div>
        </div>
    )
}