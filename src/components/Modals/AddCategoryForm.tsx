import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import classes from './AddCategoryForm.module.css';
import Switch from '@mui/material/Switch';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";


// TODO review style
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const validationSchema = yup.object({
    title: yup
        .string()
        .min(2, 'Title should be of minimum 2 characters length')
        .required('Title is required'),
});

const AddCategoryForm = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            const url = '/test'; //TODO add URL
            axios.post( url, {
              title: formik.values.title,
            });
        },
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [publish, setPublish] = React.useState(false);
    const handleSwitch = () => setPublish(true);

    return (
        <>
            <Button onClick={handleOpen}>Add new category</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add new category
                    </Typography>
                    <FormControl >
                        <InputLabel htmlFor="title">TITLE</InputLabel>
                        <OutlinedInput
                            id="title"
                            name="title"
                            label="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}

                        />
                        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                    </FormControl>
                    <div>
                        Published: <Switch value={publish} onClick={handleSwitch} {...label} defaultChecked />
                    </div>
                    <Stack mt={6} spacing={3} direction="row">
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<SaveIcon />}
                        >Save</Button>
                        <Button variant="contained" onClick={handleClose}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
}

export default AddCategoryForm;


