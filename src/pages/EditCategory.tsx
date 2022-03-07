import React from 'react';
import { useParams } from 'react-router-dom';
import EditCategoryForm from '../components/EditCategoryForm';

const EditCategory: React.FC = () => {
    let id = useParams();
    return <EditCategoryForm/>
}

export default EditCategory;