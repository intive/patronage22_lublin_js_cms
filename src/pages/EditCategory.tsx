import React from 'react';
import { useParams } from 'react-router-dom';
import EditCategoryForm from '../components/EditCategoryForm';

type UrlParams = {
    id: string
};

const EditCategory: React.FC = () => {
    const payload = { 
        id: 3,
        title: "Books", 
        description: "Enjoy reading books", 
        createdAt: "2022-02-16T09:36:41.000Z", 
        updatedAt: "2022-03-01T17:55:45.000Z" 
   }

    const { id } = useParams<UrlParams>();

    return <EditCategoryForm  id = { id }/>
}

export default EditCategory; 