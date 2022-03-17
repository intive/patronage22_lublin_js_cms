import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import styles from '../CategoryForm/index.module.css';
import { addPageRequest } from '../lib/pages';

interface FormValues {
    title: string;
    description: string;
}

const PageForm: React.FC = () => {
    const history = useHistory();
    const InitialValuesForm: FormValues = {
        title: '',
        description: ''
    };

    const validationSchema = yup.object({
        title: yup
            .string()
            .min(2, 'Title should be of minimum 2 characters length')
            .required('Title is required'),
        description: yup
            .string(),

    });

    const formik = useFormik({
        initialValues: InitialValuesForm,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const payload = { ...values };
            addPageRequest(payload)
            history.push('/pages');
        },
    });

    const handleClose = () => {
        history.push('/pages');
    }

    const { handleSubmit, getFieldProps, errors } = formik;

    return (
        <form onSubmit={handleSubmit} >
            <Box className={styles.background} >
                <Typography variant="h6" component="h2">
                    Add new page
                </Typography>
                <Grid pt={2} item xs={6}>
                    <TextField
                        fullWidth={true}
                        label='Title'
                        {...getFieldProps('title')} />
                    {errors.title ? <div>{errors.title}</div> : null}
                </Grid>
                <Grid pt={2} item xs={6}>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        rows={4}
                        label='Description'
                        {...getFieldProps('description')} />
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

export default PageForm;
