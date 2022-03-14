import React, { useEffect, useState } from 'react';
import EditCategoryForm from '../components/EditCategoryForm';
import editCategory from "../components/lib/editCategory";

type UrlParams = {
    id: string
};

interface Categories {
    id: number;
    title: string;
    description: string;
  }

const EditCategory: React.FC = () => {
    const payload = { 
        id: 3,
        title: "Books", 
        description: "Enjoy reading books", 
        createdAt: "2022-02-16T09:36:41.000Z", 
        updatedAt: "2022-03-01T17:55:45.000Z" 
   }

   const [categories, setCategories] = useState<Categories[]>([]);

   useEffect(() => {
    editCategory()
      .then((response) => {
        console.log(response);
        const data = response.data;
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return <EditCategoryForm title={payload.title} description={payload.description}/>
}

export default EditCategory; 