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
import addCategory from '../lib/addCategory';

interface FormValues {
    title: string;
    description: string;
}

const CategoryForm: React.FC = () => {
    const history = useHistory();
    const InitialValuesForm: FormValues ={
        title: '',
        description: '',
    };

    const validationSchema = yup.object({
        title: yup
            .string()
            .min(2, 'Title should be of minimum 2 characters length')
            .max(50, 'Title should be of maximun 50 characters length')
            .required('Title is required'),
        description: yup
            .string()
            .max(400, 'Description should be of maximum 200 characters length')
    });

    const formik = useFormik({
        initialValues: InitialValuesForm, 
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const payload = {...values};
            addCategory(payload)
            history.push('/categories');
        },
    });

    const handleClose = () => {
        history.push('/categories');
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
                    label='Title'
                    {...getFieldProps('title')}/>
                    {errors.title ? <div>{errors.title}</div> : null}
                </Grid>  
                <Grid pt={2} item xs={6}>
                    <TextField
                    fullWidth={true}
                    multiline={true}
                    rows={4}
                    label='Description'
                    {...getFieldProps('description')}/>  
                    {errors.description ? <div>{errors.description}</div> : null}
                </Grid>
                <Grid pt={5}>
                    <Button 
                        type="submit"
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
