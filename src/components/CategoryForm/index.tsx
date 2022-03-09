import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";


const style = {
    bgcolor: 'background.paper',
    p: 4,
  };

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const validationSchema = yup.object({
    title: yup
        .string()
        .min(2, 'Title should be of minimum 2 characters length')
        .required('Title is required'),
    description: yup
        .string()
});

const CategoryForm = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        },
    });

    const handleClose = () => {
        history.replace("/dashboard");
    }

    const handleSubmit = () => {
        formik.validateForm().then((err)=> {
            if (Object.keys(err).length === 0) { 
                const url = '/api/categories/addCategory';
                let payload = {
                    mode: 'raw',
                    raw: {
                       title: formik.values.title,
                       description: ''
                    },
                    options: {
                        raw: {
                            language: 'json'
                        }
                    }
                };
                axios.post( url, payload).catch((err) => console.log(err));
                history.replace("/dashboard");
            };
        })
       
    }

    return (
        <>
            <Paper>
                <Formik
                    initialValues={formik.initialValues}
                    onSubmit={handleSubmit}
                    >
                    <Box sx={style} >
                        <Typography variant="h6" component="h2">
                            Add new category
                        </Typography>
                        <FormControl >
                            <InputLabel htmlFor="title">TITLE</InputLabel>
                            <Input 
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)} />
                        
                            {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                        </FormControl>
                        <div>
                            Published: <Switch id="published"
                                        name="published" 
                                        value={formik.values.published} 
                                        onClick={formik.handleChange} {...label} defaultChecked />
                        </div>
                        <Stack mt={6} spacing={3} direction="row">
                            <Button 
                                type="submit"
                                onClick={()=>handleSubmit()}
                                variant="contained"
                                color="secondary"
                                startIcon={<SaveIcon />}
                            >Save</Button>
                            <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        </Stack>
                        
                    </Box>
                </Formik>
            </Paper>
        </>
    );
}

export default CategoryForm;


