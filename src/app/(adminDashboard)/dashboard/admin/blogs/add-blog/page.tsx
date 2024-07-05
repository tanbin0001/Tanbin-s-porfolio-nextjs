"use client"
import React from 'react';
import TextEditor from './TextEditor';
import { useAddBlogMutation } from '@/redux/api/blog.api';

const AddBlog = () => {
    const image_hosting_token = "639170d44b855000c171c4efebe4e973";
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const [addBlog] = useAddBlogMutation();


    const handleEditorSubmit = async (data: any) => {
        const res = await addBlog(data);

    };

    return (
        <div>
            <TextEditor onSubmit={handleEditorSubmit} />
        </div>
    );
};

export default AddBlog;