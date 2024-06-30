"use client";

import * as React from "react";
import { Box, Button, TextField, Typography, Container, createTheme, ThemeProvider } from "@mui/material";
import { useAddProjectMutation, useGetAllProjectsQuery, useUpdateProjectMutation } from "@/redux/api/project.api";
import Swal from "sweetalert2";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        background: { default: '#121212', paper: '#1d1d1d' },
        text: { primary: '#ffffff', secondary: '#a0a0a0' },
    },
    typography: { h5: { fontWeight: 600 } },
});

const UpdateProject = ({ params }: any) => {
    const [addProject] = useAddProjectMutation();
    const [projectName, setProjectName] = React.useState("");
    const [imageLink, setImageLink] = React.useState("");
    const [usedTechnologies, setUsedTechnologies] = React.useState("");
    const [liveLink, setLiveLink] = React.useState("");
    const [githubCodeLink, setGithubCodeLink] = React.useState("");
    const [description, setDescription] = React.useState("");
    const projectId = params?.projectId;
    console.log(projectId);

    const { data, isLoading } = useGetAllProjectsQuery('');

    const [updateProject] = useUpdateProjectMutation()

    let projectToUpdate: any = {}

    React.useEffect(() => {


        if (!isLoading && data) {
            projectToUpdate = data?.data?.find((project: any) => project._id === projectId);

            if (projectToUpdate) {
                setProjectName(projectToUpdate.projectName);
                setImageLink(projectToUpdate.imageLink);
                setUsedTechnologies(projectToUpdate.usedTechnologies);
                setLiveLink(projectToUpdate.liveLink);
                setGithubCodeLink(projectToUpdate.githubCodeLink);
                setDescription(projectToUpdate.description);
            }
        }
    }, [isLoading, data, projectId]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();


        const _id = projectId;
        const body = {
            projectName, imageLink, usedTechnologies, liveLink, githubCodeLink, description
        }

        const res = await updateProject({ _id, body });



        if (res?.data?.success) {
            Swal.fire("Yeah :D!", "Project updated successfully!", "success");
            setProjectName('');
            setImageLink('');
            setUsedTechnologies('');
            setLiveLink('');
            setGithubCodeLink('');
            setDescription('');
        } else {
            Swal.fire("Oops...", "Failed to update project!", "error");
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: 'background.paper',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Update Project
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="projectName"
                            label="Project Name"
                            name="projectName"
                            defaultValue={projectToUpdate?.projectName}
                            autoFocus
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            InputLabelProps={{ style: { color: '#a0a0a0' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="imageLink"
                            label="Image Link"
                            name="imageLink"
                            autoComplete="imageLink"
                            value={imageLink}
                            onChange={(e) => setImageLink(e.target.value)}
                            InputLabelProps={{ style: { color: '#a0a0a0' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="usedTechnologies"
                            label="Used Technologies"
                            name="usedTechnologies"
                            autoComplete="usedTechnologies"
                            value={usedTechnologies}
                            onChange={(e) => setUsedTechnologies(e.target.value)}
                            InputLabelProps={{ style: { color: '#a0a0a0' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="liveLink"
                            label="Live Link"
                            name="liveLink"
                            autoComplete="liveLink"
                            value={liveLink}
                            onChange={(e) => setLiveLink(e.target.value)}
                            InputLabelProps={{ style: { color: '#a0a0a0' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="githubCodeLink"
                            label="GitHub Code Link"
                            name="githubCodeLink"
                            autoComplete="githubCodeLink"
                            value={githubCodeLink}
                            onChange={(e) => setGithubCodeLink(e.target.value)}
                            InputLabelProps={{ style: { color: '#a0a0a0' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            autoComplete="description"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            InputLabelProps={{ style: { color: '#a0a0a0' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update Project
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default UpdateProject;
