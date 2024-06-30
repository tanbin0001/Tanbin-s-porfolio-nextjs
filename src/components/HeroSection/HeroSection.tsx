"use client"

import React, { useEffect } from 'react';
import "./HeroSection.css"
import Image from 'next/image'

import logo from '../../assets/logo.png'
import github from '../../assets/github1.png'
import linkedin from '../../assets/linkedin .png'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (


        <div id='home' className="     flex flex-col md:flex-row items-center    h-screen   justify-center md:justify-around main-body">

            {/* <div data-aos="fade-down"
                data-aos-duration="3000"
                className="loader">
                <div className="intern"></div>
                <div className="external-shadow">
                    <div className="central"></div>
                </div>
            </div> */}
            <div>
                <div

                    className='image-background '>
                    {/* <Image src={heroSectionLogo} alt="heroLogo" className="image-animation" /> */}
                </div>



            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0">
                <p className="">Hello, I&apos;m</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ashrafuj Jaman Tanbin</h1>
                <p className="">Full Stack Developer</p>
                <div className="flex justify-center md:justify-start lg:w-[350px] my-5">
                    <button
                        className="hero-button mx-2"
                        onClick={() => window.open('https://drive.google.com/file/d/1lUjVPPr4PCHmIsfYNm-MQA5i14g2oWYs/view')}
                    >
                        Download Resume
                    </button>

                    <button className="hero-button mx-2" onClick={() => window.location.href = './#contact'}>
                        Contact Info
                    </button>

                </div>
                <div className='flex justify-center md:justify-start items-center'>
                    <Link target='_blank' href='https://github.com/tanbin0001'>
                        <Image alt='github' src={github} width={45} height={45} />
                    </Link>
                    <Link target='_blank' href='https://www.linkedin.com/in/ashrafuj-jaman/'>
                        <Image alt='linkedin' className='bg-white rounded-full mx-2' src={linkedin} width={40} height={40} />
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default HeroSection;
