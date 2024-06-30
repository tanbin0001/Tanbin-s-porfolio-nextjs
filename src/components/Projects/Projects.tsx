
// import Image from 'next/image'

// import nestTogether from "../../assets/nest together.png"
// import tourCompass from "../../assets/tcms.png"
// import playtime from "../../assets/playtime.png"
// import github from '../../assets/github1.png'
// import Link from 'next/link'
// import { Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'

// import { HiDotsVertical } from 'react-icons/hi'; // Import the three dots vertical icon

// export const Projects = () => {
//     return (
//         <div id='projects' className=''>


//             <div className='text-center  mb-10'>
//                 <p className='animate-pulse'>Browse My Recent

//                 </p>
//                 <h1 className='md:text-4xl font-bold'>&lt;Projects/&gt;</h1>
//             </div>
//             <div className='space-y-10'>

//                 {/* project 1 */}
//                 <div className="lg:max-w-4xl md:max-w-4xl max-w-72 mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-2xLarge flex border-r-8 border-b-8 border-green-300 flex-col md:flex-row shadow-green-300 items-center">


//                     <div className="md:w-1/2   mx-auto">

//                         <Image height={200} width={300} src={nestTogether} className="rounded-lg" alt="Creative Canvas project screenshot" />
//                     </div>
//                     <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
//                         <div className="text-sm text-muted-foreground mb-2">Featured Project</div>
//                         <h2 className="text-2xl font-bold mb-2">Nest Together</h2>
//                         <p className="text-muted-foreground mb-4"> <span className='font-bold'>Used Technologies: </span>HTML, CSS, Next Js, Typescript, Material UI, Redux toolkit, Typescript, Express Js, Node Js, Prisma, Postgresql , JWT</p>


//                         <div className='flex  w-80 items-center justify-between'>

//                             <Link target='_blank' href='https://github.com/tanbin0001/Nest-Together-Client-Server-Code/blob/main/README.md'>
//                                 <Image alt='github' src={github} width={45} height={45} />
//                             </Link>

//                             <a target='_blank' href="https://nest-together-client.vercel.app/login" className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg bg-white text-black">

//                                 Visit project
//                             </a>
//                             <Dropdown className='bg-black'>

//                                 <DropdownAction>

//                                     <HiDotsVertical />
//                                 </DropdownAction>
//                                 <DropdownContent>
//                                     <DropdownList>
//                                         <DropdownItem>
//                                             view details
//                                         </DropdownItem>

//                                     </DropdownList>
//                                 </DropdownContent>
//                             </Dropdown>

//                         </div>
//                     </div>
//                 </div>


//                 {/* project 2 */}
//                 <div className="lg:max-w-4xl md:max-w-4xl max-w-72 mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-2xLarge flex  border-l-8 border-b-8 border-purple-300 flex-col  md:flex-row shadow-purple-300 items-center">


//                     {/* Text Section */}
//                     <div className="md:w-1/2 md:pr-6 order-2 md:order-1">
//                         <div className=' '>
//                             <div className="text-sm text-muted-foreground mb-2">Featured Project</div>
//                             <h2 className="text-2xl font-bold mb-2">Tour Compass</h2>
//                             <p className="text-muted-foreground mb-4"> <span className='font-bold'>Used Technologies: </span>HTML, CSS, React Js, Typescript, Antd, Redux toolkit,Typescript, Express Js, Node Js, Mongoose, MongoDB, JWT.</p>

//                             <div className='flex w-52 justify-between'>
//                                 <Link target='_blank' href='https://github.com/tanbin0001/Tour-Compass-Client-Server-Code'>
//                                     <Image alt='github' src={github} width={45} height={45} />
//                                 </Link>
//                                 <a target='_blank' href="https://tour-compass.netlify.app/" className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg bg-white text-black">
//                                     Visit project
//                                 </a>
//                             </div>
//                         </div>

//                     </div>


//                     {/* Image Section */}
//                     <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0 order-1 flex justify-center md:order-2">
//                         <Image
//                             src={tourCompass}
//                             alt="Creative Canvas project screenshot"
//                             width={300}
//                             height={200}
//                             className="rounded-lg"
//                         />
//                     </div>

//                 </div>

//                 {/* project 1 */}
//                 <div className="lg:max-w-4xl md:max-w-4xl max-w-72 mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-2xLarge flex   border-r-8 border-b-8 border-purple-300 flex-col md:flex-row shadow-purple-300 items-center">

//                     <div className="md:w-1/2   mx-auto">

//                         <Image height={200} width={300} src={playtime} className="rounded-lg" alt="Creative Canvas project screenshot" />
//                     </div>
//                     <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
//                         <div className="text-sm text-muted-foreground mb-2">Featured Project</div>
//                         <h2 className="text-2xl font-bold mb-2">PlayTime Market
//                         </h2>
//                         <p className="text-muted-foreground mb-4"> <span className='font-bold'>Used Technologies: </span>HTML, Tailwind css, React, Axios, React Query, Javascript, Express Js, Node Js, MongoDB, Vercel</p>


//                         <div className='flex  w-52 justify-between'>

//                             <Link target='_blank' href='https://github.com/tanbin0001/Playtime-market-client-server-code-/blob/main/README.md'>
//                                 <Image alt='github' src={github} width={45} height={45} />
//                             </Link>

//                             <a target='_blank' href="https://play-time-market.web.app/" className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg bg-white text-black">

//                                 Visit project
//                             </a>


//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }


import Image from 'next/image'
import Link from 'next/link'
import { Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import { HiDotsVertical } from 'react-icons/hi'; // Import the three dots vertical icon
import nestTogether from "../../assets/nest together.png"
import tourCompass from "../../assets/tcms.png"
import playtime from "../../assets/playtime.png"
import github from '../../assets/github1.png'
/* 

https://i.ibb.co/Nn2sSkk/nest-together.png
https://i.ibb.co/cCKqZpy/playtime.png
https://i.ibb.co/5LHbZgG/tcms.png



*/
const projects = [
    {
        _id: "6680323003a690b357e10c64",
        projectName: "Nest Together",
        imageLink: nestTogether,
        usedTechnologies: "HTML, CSS, Next.js, Typescript, Material UI, Redux toolkit, Typescript, Express Js, Node Js, Prisma, Postgresql , JWT",
        liveLink: "https://nest-together-clients.vercel.app/login",
        githubCodeLink: "https://github.com/tanbin0001/Nest-Together-Client-Server-Code/blob/main/README.md",
        description: "This project is a web application that showcases awesome features using modern web technologies.",
        borderClass: "border-green-300",
        shadowClass: "shadow-green-300",
    },
    {
        _id: "6680323003a690b357e10c65",
        projectName: "Tour Compass",
        imageLink: tourCompass,
        usedTechnologies: "HTML, CSS, React Js, Typescript, Antd, Redux toolkit,Typescript, Express Js, Node Js, Mongoose, MongoDB, JWT",
        liveLink: "https://tour-compass.netlify.app/",
        githubCodeLink: "https://github.com/tanbin0001/Tour-Compass-Client-Server-Code",
        description: "This project is a web application that showcases awesome features using modern web technologies.",
        borderClass: "border-l-8  border-purple-300",
        shadowClass: "shadow-purple-300",
    },
    {
        _id: "6680323003a690b357e10c66",
        projectName: "PlayTime Market",
        imageLink: playtime,
        usedTechnologies: "HTML, Tailwind css, React, Axios, React Query, Javascript, Express Js, Node Js, MongoDB, Vercel",
        liveLink: "https://play-time-market.web.app/",
        githubCodeLink: "https://github.com/tanbin0001/Playtime-market-client-server-code-/blob/main/README.md",
        description: "This project is a web application that showcases awesome features using modern web technologies.",
        borderClass: "border-r-8  border-blue-300",
        shadowClass: "shadow-blue-300",
    }
];

export const Projects = () => {
    return (
        <div id='projects' className=''>
            <div className='text-center  mb-10'>
                <p className='animate-pulse'>Browse My Recent</p>
                <h1 className='md:text-4xl font-bold'>&lt;Projects/&gt;</h1>
            </div>
            <div className='space-y-10'>
                {projects.map((project) => (
                    <div key={project._id} className={`lg:max-w-4xl md:max-w-4xl max-w-72 mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-2xLarge flex ${project.borderClass} flex-col md:flex-row ${project.shadowClass} items-center`}>
                        <div className="md:w-1/2 mx-auto">
                            <Image height={200} width={300} src={project.imageLink} className="rounded-lg" alt={`${project.projectName} project screenshot`} />
                        </div>
                        <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                            <div className="text-sm text-muted-foreground mb-2">Featured Project</div>
                            <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
                            <p className="text-muted-foreground mb-4"><span className='font-bold'>Used Technologies: </span>{project.usedTechnologies}</p>
                            <div className='flex w-80 items-center justify-between'>
                                <Link target='_blank' href={project.githubCodeLink}>
                                    <Image alt='github' src={github} width={45} height={45} />
                                </Link>
                                <a target='_blank' href={project.liveLink} className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg bg-white text-black">
                                    Visit project
                                </a>
                                <Dropdown className='bg-black'>
                                    <DropdownAction>
                                        <HiDotsVertical />
                                    </DropdownAction>
                                    <DropdownContent>
                                        <DropdownList>
                                            <DropdownItem>
                                                view details
                                            </DropdownItem>
                                        </DropdownList>
                                    </DropdownContent>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
