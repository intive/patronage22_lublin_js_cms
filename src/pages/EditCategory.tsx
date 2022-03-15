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
//     const payload = { 
//         id: 3,
//         title: "Books", 
//         description: "Enjoy reading books", 
//         createdAt: "2022-02-16T09:36:41.000Z", 
//         updatedAt: "2022-03-01T17:55:45.000Z" 
//    }
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