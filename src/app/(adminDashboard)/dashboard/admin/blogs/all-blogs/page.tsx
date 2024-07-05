// "use client"
// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
// import Image from 'next/image';
// import { useGetAllBlogsQuery } from '@/redux/api/blog.api';

// // // Sample blogs data
// // export const blogs = [
// //     {
// //         title: 'Blog Post 1',
// //         description: 'This is the first blog post.',
// //         content: '<p>Content of the first blog post.</p>',
// //         date: '2024-08-01',
// //         images: [{ path: 'path/to/image1.png' }],
// //     },
// //     {
// //         title: 'Blog Post 2',
// //         description: 'This is the second blog post.',
// //         content: '<p>Content of the second blog post.</p>',
// //         date: '2024-08-02',
// //         images: [{ path: 'path/to/image2.png' }],
// //     },
// //     {
// //         title: "5 Essential Web Development Skills for 2024",
// //         description: "Discover the top 5 web development skills you need to master in 2024. From advanced JavaScript to web performance optimization, get ready for success!",
// //         content: `
// //         <p>Hey there, web enthusiasts! 🌟</p>
// //         <p>As we dive into 2024, it’s the perfect time to reflect on what makes a web developer stand out in this ever-evolving field. Whether you’re just starting out or looking to upskill, there are five key skills you’ll want to add to your toolkit this year. Let’s break them down and get you ready for success!</p>
// //         <h2>1. Advanced JavaScript and TypeScript Mastery</h2>
// //         <p>JavaScript is the backbone of modern web development, but in 2024, it’s not just about knowing the basics. Advanced JavaScript concepts like asynchronous programming, closures, and design patterns are more important than ever. Plus, TypeScript is quickly becoming a must-know language for many developers.</p>
// //         <h3>Why it Matters:</h3>
// //         <ul>
// //             <li><strong>Robust Applications:</strong> Advanced JS techniques help you build scalable and maintainable applications.</li>
// //             <li><strong>Type Safety:</strong> TypeScript adds type safety, which helps catch errors early in the development process.</li>
// //             <li><strong>Better Job Opportunities:</strong> Many companies are looking for developers with TypeScript experience.</li>
// //         </ul>
// //         <h3>What to Learn:</h3>
// //         <ul>
// //             <li>Advanced ES6+ features (async/await, generators, etc.)</li>
// //             <li>TypeScript fundamentals and advanced features (interfaces, generics, etc.)</li>
// //             <li>Popular frameworks/libraries like React, Angular, or Vue with TypeScript</li>
// //         </ul>
// //         <h2>2. Understanding JAMstack Architecture</h2>
// //         <p>JAMstack (JavaScript, APIs, Markup) is reshaping how we build and deploy web applications. This architecture focuses on pre-rendering and decoupling, which can lead to faster, more secure websites.</p>
// //         <h3>Why it Matters:</h3>
// //         <ul>
// //             <li><strong>Performance:</strong> Faster page load times due to pre-rendered content.</li>
// //             <li><strong>Scalability:</strong> Easier to scale with modern hosting solutions like Netlify or Vercel.</li>
// //             <li><strong>Future-Proof:</strong> JAMstack is a forward-thinking approach to web development.</li>
// //         </ul>
// //         <h3>What to Learn:</h3>
// //         <ul>
// //             <li>JAMstack principles and best practices</li>
// //             <li>Static site generators (Gatsby, Next.js)</li>
// //             <li>How to integrate APIs and third-party services</li>
// //         </ul>
// //         <h2>3. Proficiency in Web Performance Optimization</h2>
// //         <p>Web performance isn’t just a nice-to-have—it’s a necessity. As user expectations rise, knowing how to optimize your website’s performance can set you apart.</p>
// //         <h3>Why it Matters:</h3>
// //         <ul>
// //             <li><strong>User Experience:</strong> Faster websites lead to happier users.</li>
// //             <li><strong>SEO:</strong> Search engines favor fast-loading websites.</li>
// //             <li><strong>Conversion Rates:</strong> Performance optimization can lead to higher conversion rates.</li>
// //         </ul>
// //         <h3>What to Learn:</h3>
// //         <ul>
// //             <li>Techniques for reducing load times (image optimization, lazy loading, etc.)</li>
// //             <li>Tools for performance analysis (Lighthouse, WebPageTest)</li>
// //             <li>Understanding of performance metrics (FCP, LCP, TTI, etc.)</li>
// //         </ul>
// //         <h2>4. Expertise in API Integration</h2>
// //         <p>APIs (Application Programming Interfaces) are everywhere, from social media logins to data fetching. Knowing how to integrate and manage APIs is crucial for building modern web applications.</p>
// //         <h3>Why it Matters:</h3>
// //         <ul>
// //             <li><strong>Enhanced Functionality:</strong> APIs enable you to connect with other services and expand your application’s capabilities.</li>
// //             <li><strong>Data Management:</strong> APIs are essential for fetching, displaying, and managing data.</li>
// //             <li><strong>Efficiency:</strong> Reusing existing APIs saves development time.</li>
// //         </ul>
// //         <h3>What to Learn:</h3>
// //         <ul>
// //             <li>How to consume and interact with RESTful and GraphQL APIs</li>
// //             <li>API documentation and testing tools (Postman, Insomnia)</li>
// //             <li>Authentication methods for APIs (OAuth, JWT)</li>
// //         </ul>
// //         <h2>5. Knowledge of Web Security Best Practices</h2>
// //         <p>Web security is more important than ever. In 2024, understanding and implementing security best practices will protect your applications from threats and vulnerabilities.</p>
// //         <h3>Why it Matters:</h3>
// //         <ul>
// //             <li><strong>Protect Users:</strong> Security measures safeguard user data and privacy.</li>
// //             <li><strong>Compliance:</strong> Ensures you meet legal and industry standards.</li>
// //             <li><strong>Trust:</strong> Builds credibility with users and clients.</li>
// //         </ul>
// //         <h3>What to Learn:</h3>
// //         <ul>
// //             <li>Common web security threats (XSS, CSRF, SQL Injection)</li>
// //             <li>Best practices for securing applications (HTTPS, Content Security Policy)</li>
// //             <li>Security tools and practices (OWASP Top Ten, security headers)</li>
// //         </ul>
// //         <h2>Wrap-Up</h2>
// //         <p>So there you have it—five essential web development skills for 2024! Mastering advanced JavaScript and TypeScript, embracing JAMstack, optimizing performance, integrating APIs, and focusing on security will set you up for success in the new year.</p>
// //         <p>What skills are you planning to focus on this year? Drop a comment below and let’s chat! 👇</p>
// //         <p>Happy coding! 🚀</p>
// //         `,
// //         date: "2024-01-15",
// //         images: [
// //             { path: "/images/web-development-skills-2024.png" }
// //         ]
// //     }
// // ];




// const AllBlogs = () => {

//     const { data, isLoading } = useGetAllBlogsQuery('');
//     const blogs = data?.data;
//     console.log(data, 'data ');

//     if (isLoading) {
//         return <p>Loading</p>
//     }
//     return (
//         <Box sx={{ p: 3, backgroundColor: '#121212', color: '#e0e0e0' }}>
//             <Typography variant="h4" gutterBottom color="#e0e0e0">
//                 All Blogs
//             </Typography>
//             <List>
//                 {blogs.map((blog: any, index: number) => (
//                     <ListItem
//                         key={index}
//                         sx={{
//                             mb: 2,
//                             p: 2,
//                             border: '1px solid #333',
//                             backgroundColor: '#1e1e1e',
//                             color: '#e0e0e0',
//                             '&:hover': {
//                                 backgroundColor: '#2c2c2c',
//                             }
//                         }}
//                     >
//                         <ListItemText
//                             primary={<Typography variant="h6" color="#e0e0e0">{blog.title}</Typography>}
//                             secondary={
//                                 <>
//                                     <Typography variant="body2" color="textSecondary">
//                                         {blog.description}
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary">
//                                         {new Date(blog.date).toLocaleDateString()}
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: blog.content }} />
//                                     <Image src={blog.imageLink} width={100} height={100} alt='blog image' />
//                                 </>
//                             }
//                         />
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );
// };

// export default AllBlogs;


"use client"

import { useGetAllBlogsQuery } from "@/redux/api/blog.api";
import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
    const { data, isLoading } = useGetAllBlogsQuery('');
    const blogs = data?.data;

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="h-screen border">
            <Box sx={{ p: 3, backgroundColor: '#121212', color: '#e0e0e0' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#0f0', textShadow: '0 0 10px #0f0' }}>
                    All Blogs
                </Typography>
                <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' } }}>
                    {blogs.map((blog: any, index: number) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: '#1e1e1e',
                                border: '2px solid #0f0',
                                borderRadius: '12px',
                                color: '#e0e0e0',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                overflow: 'hidden',
                                '&:hover': {
                                    backgroundColor: '#2c2c2c',
                                    transform: 'scale(1.03)',
                                    boxShadow: '0 0 20px #0f0',
                                },
                            }}
                        >
                            <CardMedia sx={{ p: 2 }}>
                                <Image
                                    src={blog.imageLink}
                                    width={400}
                                    height={200}
                                    alt='blog image'
                                    style={{ objectFit: 'cover', width: '100%', height: '200px', borderRadius: '8px' }}
                                />
                            </CardMedia>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ color: '#0f0', textShadow: '0 0 5px #0f0' }} gutterBottom>
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="rgba(224, 224, 224, 0.7)" paragraph>
                                    {blog.description}
                                </Typography>
                                <Typography variant="caption" color="rgba(224, 224, 224, 0.7)">
                                    {new Date(blog.date).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderColor: '#0f0' }} />
                            <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                                <Link href={`/blog/${blog.id}`} passHref>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        sx={{ backgroundColor: '#0f0', color: '#121212', '&:hover': { backgroundColor: '#0c0' } }}
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export default Blogs;
