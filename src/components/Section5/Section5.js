import React from 'react';
import './Section5.css'
import FAQS from 'react-faqs-component';
const Section5 = () => {

    const data ={
        faqs:[
            {question:"What is Lorem Ipsum?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
    
            {question:"Why do we use it?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
    
            {question:"Where does it come from?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
            
            {question:"Where can I get some?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
    
            {question:"Why do we use it?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
        ],
        backgroundColor:'#f4f5f9',
        titleColor:"#000",
        answerColor:"#000",
        iconColor:"#000",
      }

    return (
        <div className='section5page'>
            <div class="custom-shape-divider-top-16426248175">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="sec3textcon5">
                <span data-aos="fade-left" className='sec3title sec5title'>Frequently Asked</span>
                <span data-aos="fade-left" className='sec3title sec5title' style={{ "marginTop" : "30px" }}>Questions</span>
                <div className="faqdiv">
                <FAQS data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Section5;
