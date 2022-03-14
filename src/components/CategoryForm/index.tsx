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


const style = {
    bgcolor: 'background.paper',
    p: 4,
};
interface FormValues {
    title: string;
    description: string;
}

interface CategoryProps {
    addCategory: (categories: FormValues) => void;
  }

const CategoryForm: React.FC<CategoryProps>  = ({ addCategory }) => {
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

    const history = useHistory();
    const formik = useFormik({
        initialValues: InitialValuesForm, 
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log( 'values', values)
                const payload = {
                   title: values.title,
                   description: values.description
                };
            addCategory(payload)
            history.replace("/dashboard");
        },
    });

    const handleClose = () => {
        history.replace("/dashboard");
    }

    const {handleSubmit, getFieldProps, errors} = formik;

    return (
        <form onSubmit={handleSubmit} >
            <Box sx={style} >
                <Typography variant="h6" component="h2">
                    Add new category
                </Typography>
                <Grid 
                pt={2}
                item xs={6}>
                    <TextField 
                    fullWidth={true}
                    id="title"
                    label="title"
                    {...getFieldProps('title')}></TextField>
                    {errors.title ? <div>{errors.title}</div> : null}
                </Grid>  
                <Grid 
                pt={2}
                item xs={6}>
                    <TextField
                    fullWidth={true}
                    multiline={true}
                    rows={4}
                    id="description"
                    label="description"
                    {...getFieldProps('description')}></TextField>  
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


