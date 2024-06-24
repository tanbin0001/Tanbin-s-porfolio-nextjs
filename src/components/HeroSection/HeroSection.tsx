"use client"

import React from 'react';
import "./HeroSection.css"
import Image from 'next/image'

import logo from '../../assets/logo.png'
import github from '../../assets/github1.png'
import linkedin from '../../assets/linkedin .png'
import Link from 'next/link';



const HeroSection = () => {
    return (

        <div className='my-20  lg:flex justify-around items-center max-h-screen'>


            <div className="loader">
                <div className="intern">
                </div>
                <div className="external-shadow">
                    <div className="central">
                    </div>
                </div>
            </div>
            <section id="profile">

                <div className="">
                    <p className="">Hello, I&apos;m</p>
                    <h1 className="text-4xl font-bold">Ashrafuj Jaman Tanbin</h1>
                    <p className="">Full Stack Developer</p>
                    <div className=" flex   justify-between lg:w-[350px] my-5">
                        <button
                            className="hero-button"
                            onClick={() => window.open('https://drive.google.com/file/d/1lUjVPPr4PCHmIsfYNm-MQA5i14g2oWYs/view')}
                        >
                            Download Resume
                        </button>

                        <button className="hero-button" onClick="location.href='./#contact'">
                            Contact Info
                        </button>
                    </div>
                    <div className='flex     justify-center items-center'>

                        <Link target='_blank' href='https://github.com/tanbin0001'>
                            <Image alt='github' src={github} width={45} height={45} />
                        </Link>
                        <div>
                            <Link target='_blank' href='https://www.linkedin.com/in/ashrafuj-jaman/'>
                                <Image alt='linkedin' className='bg-white rounded-full mr-10 ml-2' src={linkedin} width={40} height={40} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HeroSection;
