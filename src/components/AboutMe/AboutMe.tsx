import Image from 'next/image';
import about from "../../assets/aboutPhoto.jpg";

const AboutMe = () => {
    return (
        <section className='     '>
            {/* <div className='flex flex-col items-center justify-center '> */}
            <div className='flex flex-col items-center justify-center '>
                <div className='text-center '>
                    <p className='animate-pulse'>Get To Know More</p>
                    <h1 className='md:text-4xl font-bold'>&lt;About Me/&gt;</h1>
                </div>

                <div className='grid lg:grid-cols-2 lg:justify-items-stretch justify-items-center  '>
                    {/* Biography part */}
                    <div className='space-y-3  text-center md:text-start lg:w-[500px]  '>
                        <p>BIOGRAPHY</p>
                        <p>
                            Hi, I&rsquo;m Ashrafuj Jaman Tanbin, a Full Stack Developer passionate about crafting elegant, functional, and user-centric digital experiences. With 1 year of professional experience and 2.5 years of immersion in web development, I&apos;ve mastered front-end and back-end technologies.
                        </p>
                        <p>
                            Transitioning from Angular development, I now leverage diverse technologies to create robust, scalable applications. My approach emphasizes design excellence and understanding user needs.
                        </p>
                        <p>
                            Whether it&apos;s a website, mobile app, or digital product, I bring a meticulous eye for detail and a user-first mentality to every project. I&apos;m eager to contribute my skills and enthusiasm to your next project.
                        </p>
                    </div>

                    {/* Image part */}
                    <div className='flex justify-end items-center'>
                        <div className='space-y-3 border-r-4 border-white shadow-lg rounded-lg p-4'>
                            <Image src={about} className='rounded-md' alt='about' width={350} height={350} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
