// "use client"

// import { useGetAllBlogsQuery } from "@/redux/api/blog.api";
// import Image from "next/image";
// import Link from "next/link";

// const Blogs = () => {
//     const { data, isLoading } = useGetAllBlogsQuery('');
//     const blogs = data?.data;

//     if (isLoading) {
//         return <p>Loading...</p>
//     }

//     return (
//         <div className="h-screen bg-dark text-light p-6">
//             <h1 className="text-4xl mb-6 text-center">All Blogs</h1>
//             <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                 {blogs.map((blog, index) => (
//                     <div key={index} className="bg-card p-6 rounded-lg shadow-md">
//                         <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
//                             <Image
//                                 src={blog.imageLink}
//                                 alt={blog.title}
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="transition-transform duration-300 ease-in-out hover:scale-105"
//                             />
//                         </div>
//                         <div className="mt-4">
//                             <span className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
//                                 Category
//                             </span>
//                             <h2 className="mt-2 text-2xl font-bold text-foreground">{blog.title}</h2>
//                             <p className="mt-2 text-muted-foreground">{blog.description}</p>
//                             <div className="mt-4 flex items-center">
//                                 <span className="text-sm text-muted-foreground">{blog.author}</span>

//                                 <span className="text-sm text-muted-foreground">{new Date(blog.date).toLocaleDateString()}</span>

//                             </div>

//                             <span className="text-sm text-muted-foreground">{blog.readTime} min read</span>
//                             <Link href={`/blog/${blog._id}`} passHref>
//                                 <button className="mt-4 bg-destructive text-destructive-foreground hover:bg-destructive/80 px-4 py-2 rounded-lg">
//                                     Read More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Blogs;


"use client"

import { useGetAllBlogsQuery } from "@/redux/api/blog.api";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
    const { data, isLoading } = useGetAllBlogsQuery('');
    const blogs = data?.data;

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="h-screen bg-dark text-light p-6">
            <h1 className="text-4xl mb-6 text-center">All Blogs</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                        <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                            <Image
                                src={blog.imageLink}
                                alt={blog.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                        <div className="mt-4">
                            <span className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                                Category
                            </span>
                            <Link href={`/blog/${blog._id}`} passHref>
                                <h2 className="mt-2 text-2xl font-bold text-foreground  underline">{blog.title}</h2>
                            </Link>
                            <p className="mt-2 text-muted-foreground line-clamp-2">
                                {blog.description}
                            </p>
                            <div className="mt-4 flex items-center">
                                <span className="text-sm text-muted-foreground">{blog.author}</span>
                                <span className="mx-2 text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{new Date(blog.date).toLocaleDateString()}</span>
                                <span className="mx-2 text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{blog.readTime} min read</span>
                            </div>
                            <Link href={`/blog/${blog._id}`} passHref>
                                <button className="mt-4 bg-destructive text-destructive-foreground hover:bg-destructive/80 px-4 py-2 rounded-lg">
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
