"use client";

import { useGetAllBlogsQuery } from '@/redux/api/blog.api';
import { Container, Typography, Paper, Box, Link } from '@mui/material';
import { format } from 'date-fns';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000', // Set default background to black
            paper: '#000000', // Set paper background to black
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
});

const BlogDetails = ({ params }: any) => {
    const blogId = params?.blogId;
    console.log(blogId);

    const { data, isLoading, error } = useGetAllBlogsQuery('');
    console.log(data, 'Fetched Blogs Data');

    if (isLoading) {
        return <p>Loading...</p>;
    }


    const blogs = data?.data;
    const matchedBlog = blogs?.find((b: any) => b._id === blogId);

    console.log(matchedBlog, 'Matched Blog Data');

    if (!matchedBlog) {
        return <p>Blog not found</p>;
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 6, bgcolor: 'background.paper', color: 'text.primary', borderRadius: 2, boxShadow: 3 }}>
                    <Box mb={4}>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            {matchedBlog.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                            {format(new Date(matchedBlog.date), 'MMMM dd, yyyy')}
                        </Typography>

                        <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                            <Image
                                src={matchedBlog.imageLink}
                                alt={matchedBlog.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg mb-4"
                            />
                        </Box>
                    </Box>
                    <Box mb={4}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'medium', mb: 2 }}>
                            Description
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                            {matchedBlog.description}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'medium', mb: 2 }}>
                            Content
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.primary' }} dangerouslySetInnerHTML={{ __html: matchedBlog.content }} />
                    </Box>
                    <Box mt={6}>
                        <Link href="/blogs" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
                            Back to All Blogs
                        </Link>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default BlogDetails;
