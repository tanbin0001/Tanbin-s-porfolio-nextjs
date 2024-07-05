// "use client";
// import React, { useState, useMemo } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { useDropzone, DropzoneOptions, FileWithPath } from 'react-dropzone';
// import { TextField, Button, Box, Typography, List, ListItem } from '@mui/material';
// import './TextEditor.css';

// interface TextEditorProps {
//     onSubmit: (data: {
//         title: string;
//         description: string;
//         content: string;
//         date: string;
//         imageLink: string;
//     }) => void;
// }

// const TextEditor: React.FC<TextEditorProps> = ({ onSubmit }) => {
//     const [title, setTitle] = useState<string>('');
//     const [description, setDescription] = useState<string>('');
//     const [content, setContent] = useState<string>('');
//     const [date, setDate] = useState<string>('');
//     const [imageLink, setImageLink] = useState<string>('');
//     const [uploading, setUploading] = useState<boolean>(false);
//     const [selectedFile, setSelectedFile] = useState<FileWithPath | null>(null);

//     const { getRootProps, getInputProps } = useDropzone({
//         accept: { 'image/*': [] },
//         onDrop: (acceptedFiles: FileWithPath[]) => {
//             setSelectedFile(acceptedFiles[0]);
//         },
//     } as DropzoneOptions);

//     const modules = useMemo(() => ({
//         toolbar: {
//             container: [
//                 [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//                 [{ size: [] }],
//                 ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//                 ['link', 'image'],
//                 ['clean']
//             ],
//         },
//     }), []);

//     const uploadImage = async (file: FileWithPath): Promise<string> => {
//         const imgbbApiKey = '639170d44b855000c171c4efebe4e973';

//         const formData = new FormData();
//         formData.append('image', file);

//         try {
//             const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
//                 method: 'POST',
//                 body: formData,
//             });
//             const data = await response.json();
//             if (data && data.data && data.data.url) {
//                 return data.data.url;
//             } else {
//                 throw new Error('Image upload failed');
//             }
//         } catch (error) {
//             console.error('Image upload failed:', error);
//             throw error;
//         }
//     };

//     const handleSubmit = async () => {
//         setUploading(true);
//         try {
//             let link = '';
//             if (selectedFile) {
//                 link = await uploadImage(selectedFile);
//                 console.log(link, 'from link');
//                 setImageLink(link);
//             }

//             const data = {
//                 title,
//                 description,
//                 content,
//                 date,
//                 imageLink: link,
//             };

//             console.log(link, 'from handler function');

//             onSubmit(data);
//         } catch (error) {
//             console.error('Form submission failed:', error);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className='h-screen border-2 border-red-500'>
//             <Box
//                 sx={{
//                     p: 3,
//                     height: '80vh',
//                     backgroundColor: '#121212',
//                     color: '#e0e0e0',
//                 }}
//             >
//                 <Typography variant="h4" gutterBottom>
//                     Create a Blog Post
//                 </Typography>
//                 <TextField
//                     label="Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     sx={{
//                         input: { color: '#e0e0e0' },
//                         label: { color: '#e0e0e0' },
//                         fieldset: { borderColor: '#333' },
//                     }}
//                 />
//                 <TextField
//                     label="Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     multiline
//                     rows={4}
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     sx={{
//                         input: {
//                             color: '#e0e0e0',
//                         },
//                         textarea: {
//                             color: '#e0e0e0',
//                         },
//                         label: {
//                             color: '#e0e0e0',
//                         },
//                         fieldset: {
//                             borderColor: '#333',
//                         },
//                         '& .MuiInputBase-root': {
//                             backgroundColor: '#1e1e1e',
//                         },
//                         '& .MuiInputBase-root.Mui-focused': {
//                             backgroundColor: '#1e1e1e',
//                         },
//                         '& .MuiInputBase-input': {
//                             color: '#e0e0e0',
//                         },
//                         '& .MuiInputLabel-root': {
//                             color: '#e0e0e0',
//                         },
//                         '& .MuiFormLabel-root.Mui-focused': {
//                             color: '#e0e0e0',
//                         },
//                         '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                             borderColor: '#333',
//                         },
//                     }}
//                 />
//                 <ReactQuill
//                     value={content}
//                     onChange={setContent}
//                     modules={modules}
//                     theme="snow"
//                     className="react-quill-container"
//                 />
//                 <Box
//                     {...getRootProps({ className: 'dropzone' })}
//                     sx={{
//                         mt: 2,
//                         p: 2,
//                         border: '2px dashed #444',
//                         backgroundColor: '#1e1e1e',
//                         color: '#e0e0e0',
//                         textAlign: 'center',
//                     }}
//                 >
//                     <input {...getInputProps()} />
//                     <Typography>Drag an image here, or click to select a file</Typography>
//                 </Box>
//                 {selectedFile && (
//                     <List
//                         sx={{
//                             mt: 2,
//                             color: '#e0e0e0',
//                         }}
//                     >
//                         <ListItem>{selectedFile.name}</ListItem>
//                     </List>
//                 )}
//                 <TextField
//                     label="Date"
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                     sx={{
//                         input: { color: '#e0e0e0' },
//                         label: { color: '#e0e0e0' },
//                         fieldset: { borderColor: '#333' },
//                         backgroundColor: '#1e1e1e',
//                     }}
//                 />
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleSubmit}
//                     sx={{ mt: 2 }}
//                     disabled={uploading}
//                 >
//                     {uploading ? 'Uploading...' : 'Submit'}
//                 </Button>
//             </Box>
//         </div>
//     );
// };

// export default TextEditor;

"use client";
import React, { useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDropzone, DropzoneOptions, FileWithPath } from 'react-dropzone';
import { TextField, Button, Box, Typography, List, ListItem } from '@mui/material';
import './TextEditor.css';

interface TextEditorProps {
    onSubmit: (data: {
        title: string;
        description: string;
        content: string;
        date: string;
        imageLink: string;
    }) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [imageLink, setImageLink] = useState<string>('');
    const [uploading, setUploading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<FileWithPath | null>(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles: FileWithPath[]) => {
            setSelectedFile(acceptedFiles[0]);
        },
    } as DropzoneOptions);

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
        },
    }), []);

    const uploadImage = async (file: FileWithPath): Promise<string> => {
        const imgbbApiKey = '639170d44b855000c171c4efebe4e973';

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data && data.data && data.data.url) {
                return data.data.url;
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            console.error('Image upload failed:', error);
            throw error;
        }
    };

    const handleSubmit = async () => {
        setUploading(true);
        try {
            let link = '';
            if (selectedFile) {
                link = await uploadImage(selectedFile);
                console.log(link, 'from link');
                setImageLink(link);
            }

            const data = {
                title,
                description,
                content,
                date,
                imageLink: link,
            };

            console.log(link, 'from handler function');

            onSubmit(data);
        } catch (error) {
            console.error('Form submission failed:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className='h-screen border-2 border-red-500'>
            <Box
                sx={{
                    p: 3,
                    height: '80vh',
                    backgroundColor: '#121212',
                    color: '#e0e0e0',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Create a Blog Post
                </Typography>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    sx={{
                        input: { color: '#e0e0e0' },
                        label: { color: '#e0e0e0' },
                        fieldset: { borderColor: '#333' },
                    }}
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    sx={{
                        input: {
                            color: '#e0e0e0',
                        },
                        textarea: {
                            color: '#e0e0e0',
                        },
                        label: {
                            color: '#e0e0e0',
                        },
                        fieldset: {
                            borderColor: '#333',
                        },
                        '& .MuiInputBase-root': {
                            backgroundColor: '#1e1e1e',
                        },
                        '& .MuiInputBase-root.Mui-focused': {
                            backgroundColor: '#1e1e1e',
                        },
                        '& .MuiInputBase-input': {
                            color: '#e0e0e0',
                        },
                        '& .MuiInputLabel-root': {
                            color: '#e0e0e0',
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            color: '#e0e0e0',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#333',
                        },
                    }}
                />
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    theme="snow"
                    className="react-quill-container"
                    style={{ maxHeight: '400px', overflowY: 'auto' }}
                />
                <Box
                    {...getRootProps({ className: 'dropzone' })}
                    sx={{
                        mt: 2,
                        p: 2,
                        border: '2px dashed #444',
                        backgroundColor: '#1e1e1e',
                        color: '#e0e0e0',
                        textAlign: 'center',
                    }}
                >
                    <input {...getInputProps()} />
                    <Typography>Drag an image here, or click to select a file</Typography>
                </Box>
                {selectedFile && (
                    <List
                        sx={{
                            mt: 2,
                            color: '#e0e0e0',
                        }}
                    >
                        <ListItem>{selectedFile.name}</ListItem>
                    </List>
                )}
                <TextField
                    label="Date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{
                        input: { color: '#e0e0e0' },
                        label: { color: '#e0e0e0' },
                        fieldset: { borderColor: '#333' },
                        backgroundColor: '#1e1e1e',
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ mt: 2 }}
                    disabled={uploading}
                >
                    {uploading ? 'Uploading...' : 'Submit'}
                </Button>
            </Box>
        </div>
    );
};

export default TextEditor;
