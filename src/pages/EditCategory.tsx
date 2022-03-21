import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditCategoryForm from '../components/EditCategoryForm';
import { getCategory } from "../components/lib/editCategory";

type UrlParams = {
    id: string
};

type Category = {
    title: string,
    description: string
}

const EditCategory: React.FC = () => {

    const { id } = useParams<UrlParams>();
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
    getCategory(id)
        .then((response) => {
            console.log(response);
            const data = response.data;
            setCategory(data);
        })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return category ? <EditCategoryForm title={category.title} description={category.description}/> : null;
}

export default EditCategory; 