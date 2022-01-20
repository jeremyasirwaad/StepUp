import React from 'react';
import './Section5.css'
import Faq from "react-faq-component";
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
        <div className='section5page'>
            <div class="custom-shape-divider-top-16426248175">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="sec3textcon5">
                <span data-aos="fade-up"  className='sec3title sec5title'>Frequently Asked</span>
             <span  data-aos="fade-up" className='sec3title sec5title' style={{ "marginTop" : "30px", "color": "brown" }}>Questions</span>
                <div className="faqdiv">
                <Faq
                data={data}
                styles={styles}
                config={config}
            />
                </div>
            </div>
        </div>
    );
}

export default Section5;
