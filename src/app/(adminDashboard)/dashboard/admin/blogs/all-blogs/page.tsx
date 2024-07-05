"use client"

import { useGetAllBlogsQuery } from "@/redux/api/blog.api";
import { DeleteOutline } from "@mui/icons-material";
import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button } from "@mui/material";
import Image from "next/image";

const Blogs = () => {
    const { data, isLoading } = useGetAllBlogsQuery('');
    const blogs = data?.data;

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDelete = (id: string) => {
        // Add your delete logic here
        console.log(`Delete blog with id: ${id}`);
    };

    return (
        <div className="h-screen ">
            <Box sx={{ p: 3, backgroundColor: '#121212', color: '#e0e0e0' }}>

                <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' } }}>
                    {blogs.map((blog: any, index: number) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: '#1e1e1e',
                                border: '2px solid #333',
                                borderRadius: '12px',
                                color: '#e0e0e0',
                                transition: 'transform 0.3s ease',
                                overflow: 'hidden',
                                '&:hover': {
                                    backgroundColor: '#2c2c2c',
                                    transform: 'scale(1.03)',
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
                                <Typography variant="h6" sx={{ color: '#e0e0e0' }} gutterBottom>
                                    {blog.title}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'start', p: 2 }}>


                                <button className="text-red-500 "
                                    onClick={() => handleDelete(blog.id)}
                                >
                                    <DeleteOutline />
                                </button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export default Blogs;
