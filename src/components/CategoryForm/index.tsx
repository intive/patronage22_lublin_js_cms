import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styles from '../CategoryForm/index.module.css';

interface FormValues {
    title: string;
    description: string;
}

const CategoryForm = () => {
    const history = useHistory();
    const InitialValuesForm: FormValues ={
        title: '',
        description: '',
    };

    const validationSchema = yup.object({
        title: yup
            .string()
            .min(2, 'Title should be of minimum 2 characters length')
            .required('Title is required'),
        description: yup
            .string()
    });

    const formik = useFormik({
        initialValues: InitialValuesForm, 
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log( 'values', values)
            const payload = {...values};
            history.replace("/dashboard");
        },
    });

    const handleClose = () => {
        history.replace("/dashboard");
    }

    const {handleSubmit, getFieldProps, errors} = formik;

    return (
        <form onSubmit={handleSubmit} >
            <Box className={styles.background} >
                <Typography variant="h6" component="h2">
                    Add new category
                </Typography>
                <Grid  pt={2} item xs={6}>
                    <TextField 
                    fullWidth={true}
                    label="title"
                    {...getFieldProps('title')}/>
                    {errors.title ? <div>{errors.title}</div> : null}
                </Grid>  
                <Grid pt={2} item xs={6}>
                    <TextField
                    fullWidth={true}
                    multiline={true}
                    rows={4}
                    label="description"
                    {...getFieldProps('description')}/>  
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
        </form>   
    );
}

export default CategoryForm;


