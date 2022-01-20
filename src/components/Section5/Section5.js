import React, { useState, useCallback } from 'react';
import './Section5.css'
import freecode from './freecode.png';
// import ImgsViewer from "react-images-viewer";
import fullstackopen from './FullsTackopen.png'
import odin from './OdinProject.png'
import webdev from './Web.dev.png'
import imgresu from './0001.jpg'

const Section5 = () => {

  
    const data = {
        rows: [
            {
                title: "Can anyone join STEP UP?",
                content: `Yes. Any department. Any Year`,
            },
            {
                title: "I want to focus on core. Why should I join STEP UP?",
                content:
                    "Treat this as a backup plan. If your ambition to get into 'core' doesn't work out, you can always get into a startup as a fullstack developer.",
            },
            {
                title: " How long will it take to learn?",
                content: `Depends on you. If you spend 25 hours per week, you shall be ready for an internship in 3 months. `,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "blue",
        rowTitleColor: 'black',
        rowContentColor: 'brown',
        // arrowColor: "red",
        
    };
    
    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };
    

    return (
        <div className='section5page' id='resources'>
            <div class="custom-shape-divider-top-16426248175">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="sec3textcon5">
                <span data-aos="fade-up"  className='sec3title sec5title'>Resources</span>
                <div className="divpwrap">
                    <p>The following is a selective list of <span className='col5'>resources</span> that we think shall be useful for those who wish to pickup <span className='col5'>fullstack skills</span>. Feel free to pick the one that suits you.</p>
                    <div className="relinks">
                        <div className="relink1">
                            <div className="img1">
                                <img src={freecode} alt="" />
                                <span>Freecode Camp</span>
                            </div>
                            <div className="img2">
                                <img src={fullstackopen} alt="" />
                                <span>FullStackOpen</span>
                            </div>
                        </div>
                        <div className="relink2">
                            <div className="img3">
                                <img src={odin}alt="" />
                                <span>Odin</span>
                            </div>
                            <div className="img4">
                                <img src={webdev} alt="" />
                                <span>Web.Dev</span>
                            </div>
                        </div>
                    </div>
                    <p>We also have some problems that can be solved as a fullstack project. Feel free to pick and choose a project from the following list. </p>
                    <a href="https://krayen.notion.site/krayen/Project-List-0e68de0c73c44d569b63393f5b491849">Click Here to Find the Project List</a>
                    <div className="modelresume">
                        <span>Model Resume</span>
                        <img className='resuimg' src={imgresu} alt="" />
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-164260900815">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
        </div>
        </div>
    );
}

export default Section5;
