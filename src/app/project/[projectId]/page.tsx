"use client"

import React from 'react';
import Image from 'next/image';

import { useGetAllProjectsQuery } from '@/redux/api/project.api';
import { Box } from '@mui/material';

// Sample project data array

const ProjectDetails = ({ params }: any) => {
    const projectId = params?.projectId;

    const { data } = useGetAllProjectsQuery('');

    const project = data?.data?.find((p: any) => p._id === projectId);


    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={`max-w-4xl mx-auto p-6 bg-card text-card-foreground rounded-lg  `}>

            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                <Image
                    src={project?.imageLink}
                    alt={project?.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg mb-4"
                />
            </Box>

            <h1 className="text-3xl font-bold mb-4">{project.projectName}</h1>
            <p className="text-sm text-muted-foreground mb-2"><strong>Used Technologies:</strong> {project.usedTechnologies}</p>
            <p className="text-sm text-muted-foreground mb-2"><strong>Description:</strong> {project.description}</p>
            <div className='flex items-center space-x-3'>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline  border p-1  ">View Live Project</a>
                <br />
                <a href={project.githubCodeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline border p-1 ">View GitHub Code</a>
            </div>
        </div>
    );
};

export default ProjectDetails;
