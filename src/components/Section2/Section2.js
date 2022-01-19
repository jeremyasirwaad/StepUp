import React from 'react';
import './section2.css'
import ReactPlayer from 'react-player'
const Section2 = () => {
    return (
        <div className='section2'>
            <div className="sec2contents">
                <span className='sec2title'>Why Step Up ?</span>
                <p>Are they risky?
                    What skills are hot?
                    How to get in?</p>
                <p>
                To know more watch this video by our alumnus, <br /> <span className='colsec2'> Bargava Subramanian (2002)</span>, a Serial Entrepreneur, Startup Investor, Mentor and Data Scientist.
                </p>
                <ReactPlayer url='https://youtu.be/tEzP3v5mizs' controls = "true" width= "100%" height={250}  />
            </div>
        </div>
    );
}

export default Section2;
