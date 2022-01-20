import React, { useEffect } from 'react'
import image1 from "./pexels-oliver-sjöström-931018.jpg"
import './Landing.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Landing = () => {

    useEffect(() => {
        AOS.init({
            once: "true",
            duration: 1000
        })
    },[])

    return (
        <div className='Landingpage'>
            <div className="landingcontents">
                <p data-aos="zoom-in">Welcome to the <span className='colorland'>STEP UP</span> Program, a <span className='colorland'>gSARC</span> initiative to groom FullStack developers for startups</p>
                <button   class="button-56" >Get Started</button>
                <i class="fas fa-angle-double-down vert-move"></i>
            </div>
            <div class="custom-shape-divider-bottom-1642609008">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>   
        </div>
    )
}
