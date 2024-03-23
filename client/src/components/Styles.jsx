import React from 'react'

export default function Styles(props) {
    return (
        <div className='Styles'>
            <div className='sectionHeaderContainer'>
                <span className='sectionHeader'>
                    Styles
                </span>
            </div>

            <div className='sectionHeaderContainer'>
                Sizes
            </div>

            <div style={{ width: 'calc(1920px - 4vw)' }} className='container'>
                <span>{`width > 1920px, for desktops`}</span>
            </div>

            <div style={{ width: 'calc(1280px - 4vw)' }} className='container'>
                <span>{`1920px > width > 1280px, for laptops`}</span>
            </div>

            <div style={{ width: 'calc(601px - 4vw)' }} className='container'>
                <span>{`1280px > width > 601px, for tablets`}</span>
            </div>

            <div style={{ width: 'calc(414px - 4vw)' }} className='container'>
                <span>{`414px > width > 360px, for phones`}</span>
            </div>
            <div style={{ width: 'calc(360px - 4vw)' }} className='container'>
            </div>

            <div className='sectionHeaderContainer'>
                Colors
            </div>
            <div className='container'>
                <div style={{ background: '#000080', color: 'white' }} className='color'>Navy blue</div>
                <div style={{ background: '#708090', color: 'white' }} className='color'>Slate gray</div>
                <div style={{ background: '#50C878', color: 'white' }} className='color'>Emerald green</div>
                <div style={{ background: '#FDFDFD', color: 'black' }} className='color'>Off white</div>
                <div style={{ background: '#FFD700', color: 'white' }} className='color'>Gold</div>
            </div>
        </div>
    )
}