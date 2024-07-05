


"use client"
import { MdOutlineDateRange } from "react-icons/md";

import { useGetAllBlogsQuery } from "@/redux/api/blog.api";
import Image from "next/image";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";

const Blogs = () => {
    const { data, isLoading } = useGetAllBlogsQuery('');
    const blogs = data?.data;

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="min-h-screen bg-dark text-light p-6">
            <h1 className="text-4xl mb-6 text-center">All Blogs</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog: any, index: number) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                        <div className="relative w-full h-64  overflow-hidden rounded-t-lg">
                            {/* <Image
                                src={blog.imageLink}
                                alt={blog.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out hover:scale-105"
                            /> */}
                            <Image
                                alt="title"
                                src={blog.imageLink}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%' }}
                                className="transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                        <div className="mt-4">
                            <span className="inline-block bg-purple-500 t text-white text-xs px-2 py-1 rounded-full    font-semibold tracking-wide">
                                {blog.category}
                            </span>
                            <Link href={`/blogs/${blog._id}`} passHref>
                                <h2 className="mt-2 text-2xl font-bold text-foreground  underline">{blog.title}</h2>
                            </Link>
                            <p className="mt-2 text-muted-foreground line-clamp-2">
                                {blog.description}
                            </p>
                            <div className="mt-4 flex items-center">
                                <span className="text-sm text-muted-foreground">{blog.author}</span>
                                <span className="mx-2 text-muted-foreground"><MdOutlineDateRange />
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {new Date(blog.date).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </span>

                            </div>
                            <div className="flex items-center">
                                <span className="mx-2 text-muted-foreground"><CiClock1 />
                                </span>
                                <span className="text-sm text-muted-foreground">{blog.readingTime} min read</span>
                            </div>
                            <Link href={`/blogs/${blog._id}`} passHref>
                                <button className="mt-4 bg-destructive text-destructive-foreground hover:bg-destructive/80 px-4 py-2   border-b border-purple-500">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
