import React from 'react';
import './section2.css'
import ReactPlayer from 'react-player'
const Section2 = () => {
    return (
        <div className='section2'>
            <div className="sec2contents " id='startups'>
                <span data-aos="fade-right" className='sec2title'>Why StartUps ?</span>
                <p data-aos="fade-up">Are they risky?
                    What skills are hot?
                    How to get in?</p>
                <p data-aos="fade-up">
                To know more watch this video by our alumnus, <br /> <span className='colsec2'> Bargava Subramanian (2002)</span>, a Serial Entrepreneur, Startup Investor, Mentor and Data Scientist.
                </p>
                <div className="playerconatiner" data-aos="fade-right">
                <ReactPlayer url='https://youtu.be/tEzP3v5mizs' controls = "true" width= "80%" height={250} playing = "true" />
                </div>
            </div>
            
        </div>
    );
}

export default Section2;
