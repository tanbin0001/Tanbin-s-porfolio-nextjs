"use client"
import * as React from 'react';
import Image from 'next/image';
import { useGetAllProjectsQuery } from '@/redux/api/project.api';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
const AllProjects = () => {
    const { data } = useGetAllProjectsQuery('');

    const allProjects = data?.data;
    console.log(allProjects);
    return (
        <div className='lg:max-h-screen p-4'>

            <div className=' grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-4'>
                {allProjects?.map((project: any) => (
                    <div key={project._id} className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="mx-auto p-5 rounded-lg   overflow-hidden">
                            <Image
                                className="rounded-lg"
                                src={project.imageLink}
                                width={300}
                                height={300}
                                alt={project.projectName}
                                layout="responsive"
                            />
                        </div>
                        <div className='px-2' >
                            <h5 className="text-lg font-semibold mb-2">{project.projectName}</h5>

                        </div>
                        <div className="px-4 pb-4 flex justify-between">
                            <Link href='lll'>
                                <button className="text-blue-500 hover:text-blue-700"> <EditIcon /></button>
                            </Link>
                            <button className="text-blue-500 hover:text-blue-700">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProjects;
