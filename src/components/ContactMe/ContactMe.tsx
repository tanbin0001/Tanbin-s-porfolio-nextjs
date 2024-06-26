import Image from 'next/image';
import React from 'react';

import mailIcon from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"


const ContactMe = () => {
    return (
        <div id='contact'>


            <div className="flex flex-col items-center justify-center min-h-screen bg-muted p-4">
                <div className="text-center mb-4">
                    <p className="text-muted-foreground">Get in Touch</p>
                    <h1 className="text-4xl font-bold text-foreground">Contact Me</h1>
                </div>
                <div className="lg:flex items-center bg-white text-black p-4 rounded-full shadow-md">
                    <div className="flex items-center mr-4">

                        <Image src={mailIcon} width={30} height={30} className="mr-2  rounded-full" alt="email-icon" />
                        <p><a target='_blank' href="mailto:ashrafuj.jaman.tanbin1@gmail.com">ashrafuj.jaman.tanbin1@gmail.com</a></p>
                    </div>
                    <div className="flex items-center">
                        <Image src={linkedin} width={30} height={30} className="mr-2  rounded-full" alt="email-icon" />
                        <p><a target='_blank' href="https://www.linkedin.com/in/ashrafuj-jaman/">LinkedIn</a></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;