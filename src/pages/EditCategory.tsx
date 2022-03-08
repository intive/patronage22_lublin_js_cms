import React from 'react';
import { useParams } from 'react-router-dom';
import EditCategoryForm from '../components/EditCategoryForm';

const EditCategory: React.FC = () => {
    type UrlParams = {
        id: string
     };
     const { id } = useParams<UrlParams>();

    return <EditCategoryForm  id = { id }/>
}

export default EditCategory; 