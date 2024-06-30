"use client";

import * as React from "react";
import { Box, Button, TextField, Typography, Container, createTheme, ThemeProvider } from "@mui/material";
import { useAddProjectMutation } from "@/redux/api/project.api";
import Swal from "sweetalert2";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a0a0a0',
        },
    },
    typography: {
        h5: {
            fontWeight: 600,
        },
    },
});

const AddProjects = () => {
    const [addProject] = useAddProjectMutation();
    const [projectName, setProjectName] = React.useState("");
    const [imageLink, setImageLink] = React.useState("");
    const [usedTechnologies, setUsedTechnologies] = React.useState("");
    const [liveLink, setLiveLink] = React.useState("");
    const [githubCodeLink, setGithubCodeLink] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [errors, setErrors] = React.useState({
        projectName: "",
        imageLink: "",
        usedTechnologies: "",
        liveLink: "",
        githubCodeLink: "",
        description: ""
    });

    const handleValidation = () => {
        let valid = true;
        let tempErrors = {
            projectName: "",
            imageLink: "",
            usedTechnologies: "",
            liveLink: "",
            githubCodeLink: "",
            description: ""
        };

        if (!projectName) {
            tempErrors.projectName = "Project name is required";
            valid = false;
        }

        if (!imageLink) {
            tempErrors.imageLink = "Image link is required";
            valid = false;
        }

        if (!usedTechnologies) {
            tempErrors.usedTechnologies = "Used technologies are required";
            valid = false;
        }

        if (!liveLink) {
            tempErrors.liveLink = "Live link is required";
            valid = false;
        }

        if (!githubCodeLink) {
            tempErrors.githubCodeLink = "GitHub code link is required";
            valid = false;
        }

        if (!description) {
            tempErrors.description = "Description is required";
            valid = false;
        }

        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (handleValidation()) {
            const projectData = {
                projectName,
                imageLink,
                usedTechnologies,
                liveLink,
                githubCodeLink,
                description
            };
            console.log(projectData);
            const result = await addProject(projectData);

            if (result?.data?.success) {
                Swal.fire({
                    title: "Yeah :D!",
                    text: "Project added successfully!",
                    icon: "success"
                });
                setProjectName('');
                setImageLink('');
                setUsedTechnologies('');
                setLiveLink('');
                setGithubCodeLink('');
                setDescription('');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to add project!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });

            }
            console.log(result);
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
                    <Typography component="h1" variant="h5" color="text.primary">
                        Add Project
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
                            autoComplete="projectName"
                            autoFocus
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            error={!!errors.projectName}
                            helperText={errors.projectName}
                            InputLabelProps={{
                                style: { color: '#a0a0a0' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
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
                            error={!!errors.imageLink}
                            helperText={errors.imageLink}
                            InputLabelProps={{
                                style: { color: '#a0a0a0' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
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
                            error={!!errors.usedTechnologies}
                            helperText={errors.usedTechnologies}
                            InputLabelProps={{
                                style: { color: '#a0a0a0' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
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
                            error={!!errors.liveLink}
                            helperText={errors.liveLink}
                            InputLabelProps={{
                                style: { color: '#a0a0a0' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
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
                            error={!!errors.githubCodeLink}
                            helperText={errors.githubCodeLink}
                            InputLabelProps={{
                                style: { color: '#a0a0a0' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
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
                            error={!!errors.description}
                            helperText={errors.description}
                            InputLabelProps={{
                                style: { color: '#a0a0a0' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Project
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AddProjects;
