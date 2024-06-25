import React from 'react';
import "./Experience.css"
import Image from 'next/image';

const Experience = () => {
    return (
        <div className=' mt-10  '>
            <div className='text-center  mb-10'>
                <p className='animate-pulse'>Have a look at my</p>
                <h1 className='md:text-4xl font-bold'>&lt;My Experience/&gt;</h1>
            </div>
            {/* experience card */}
            {/* card 1 */}



            <div>

                <div className='lg:flex justify-center gap-10 mt-5'  >
                    <div className="gas he">
                        <span className="">Associate Software Engineer @Nasheed Station</span>
                        <h2 className="symbol">2023-2024 Feb | ISLAMABAD, PAKISTAN</h2>
                        <p className="name">Worked as an Angular Developer and e2e tester on a team responsible for developing new features for Nasheed Station</p>
                    </div>

                    {/* card 2 */}
                    <div className="gas xe">
                        <span className="">Software Engineer @Unicraft IT</span>
                        <h2 className="symbol">2024-PRESENT | DHAKA, BANGLADESH</h2>
                        <p className="name">Working as a part-time Software Engineer. Developing and maintaining web applications using modern frameworks and technologies.</p>
                    </div>


                </div>

            </div >
        </div >
    );
};

export default Experience;