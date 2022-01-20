import React from 'react';
import './Section6.css'
import Faq from "react-faq-component";
const Section6 = () => {

      
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
            {
                title: " How do I join STEP UP?",
                content: `Install Telegram. Join the following group https://t.me/+umF60BUfik0xZTll`,
            },
            {
                title: " If I have doubts, whom should I approach?",
                content: `The 'Resources' section has a good selection of videos/course materials that shall help you understand Fullstack. Also feel free to ask questions in the telegram group. `,
            },
        ],
    };
    
    const styles = {
        bgColor: 'none',
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
        <div className='sec6page' id='faq'>
            <div className="sec3textcon6">
                <span  className='sec6title'>Frequently Asked<span className='sec4col'>   Questions</span></span>
                    <div className='faqdiv6'>
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

export default Section6;
