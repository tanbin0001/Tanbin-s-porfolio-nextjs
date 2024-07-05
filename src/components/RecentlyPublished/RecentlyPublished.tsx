"use client";
import { useGetAllBlogsQuery } from '@/redux/api/blog.api';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import "./RecentlyPublished.css"
import { CiClock1 } from "react-icons/ci";
import { MdOutlineDateRange } from 'react-icons/md';

const RecentlyPublished = () => {
    const { data, isLoading } = useGetAllBlogsQuery('');
    const blogs = data?.data;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const recentBlogs = blogs?.slice(0, 4);

    return (
        <div className="mx-auto my-20    ">
            <div className="text-center mb-10">
                <p className="animate-pulse">Interested?</p>
                <h1 className="md:text-4xl font-bold">&lt;Recent Articles/&gt;</h1>
            </div>
            <div>
                {recentBlogs?.map((blog: any, index: number) => (
                    <div key={index}>
                        <div className="max-w-4xl mx-auto p-4 border-b border-muted">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3">
                                    <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                                        <Image
                                            src={blog.imageLink}
                                            alt={blog.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg mb-4"
                                        />
                                    </Box>
                                </div>
                                <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                                    <p className="text-sm text-muted-foreground uppercase bg-purple-500 rounded-lg inline-block px-2 py-1 text-center">
                                        {blog.category}
                                    </p>
                                    <h2 className="text-1xl font-bold text-foreground mt-1">{blog.title}</h2>
                                    <p className="text-muted-foreground mt-4 truncate-description">{blog.description}</p>
                                    <div className="mt-4 flex items-center gap-2">

                                        <span className=" text-muted-foreground "><MdOutlineDateRange />
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {new Date(blog.date).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>

                                    </div>
                                    <div>
                                        <span className="text-sm  flex items-center gap-2 ">
                                            <CiClock1 /> {blog.readingTime} min </span>
                                    </div>
                                    <Link href={`/blogs/${blog._id}`} className="inline-block mt-4 text-primary hover:text-primary-foreground">
                                        <span className="sr-only">Read more</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* See More Button */}
                <div className=" mt-8   text-center    ">
                    <Link href="/blogs">
                        <button className="hero-button mx-2"  >
                            See more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentlyPublished;
