
"use client"
import { useGetAllProjectsQuery } from '@/redux/api/project.api';
import React from 'react';



const AllProjects = () => {
    const { data } = useGetAllProjectsQuery('');
    console.log(data);
    return (
        <div>
            <h1>all projects</h1>
        </div>
    );
};

export default AllProjects;