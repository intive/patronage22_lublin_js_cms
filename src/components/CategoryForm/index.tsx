import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import SaveIcon from '@mui/icons-material/Save';
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import addCategory from '../lib/addCategory'


const style = {
    bgcolor: 'background.paper',
    p: 4,
  };


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
        onSubmit: (formik) => {
            console.log(formik, 'values')
        },
    });

    const handleClose = () => {
        history.replace("/dashboard");
    }


    const handleSubmit = () => {
        formik.validateForm().then((err)=> {
            if (Object.keys(err).length === 0) { 
                let payload = {
                    mode: 'raw',
                    raw: {
                       title: formik.values.title,
                       description: formik.values.description
                    },
                    options: {
                        raw: {
                            language: 'json'
                        }
                    }
                };
                addCategory(payload).catch((err) => console.log(err));;
                history.replace("/dashboard");
            };
        })
       
    }

    const configTextfieldTitle = {
        label: "Title",
        name: "title",
        value: formik.values.title,
        fullWidth: true,
        onChange: formik.handleChange,
        error: false
    }

    const configTextfieldDescription = {
        name: "description",
        value: formik.values.description,
        fullWidth: true,
        onChange: formik.handleChange,
        label:"Description",
        multiline: true,
        rows: 4
    }

    if (formik.touched.title && Boolean(formik.errors.title)) {
        configTextfieldTitle.error = true;
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
                        <Grid item xs={6}>
                            <TextField {...configTextfieldTitle}></TextField>
                            {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                        </Grid>  
                        <Grid item xs={6}>
                            <TextField
                            {...configTextfieldDescription}></TextField>  
                        </Grid>
                        <Grid pt={5}>
                            <Button 
                                type="submit"
                                onClick={()=>handleSubmit()}
                                variant="contained"
                                color="secondary"
                                startIcon={<SaveIcon />}
                            >Save</Button>
                            <Button variant="contained" onClick={handleClose}>Cancel</Button>
                        </Grid>
                        
                    </Box>
                </Formik>
            </Paper>
        </>
    );
}

export default CategoryForm;


