import React, { useEffect, useState } from 'react';
import EditCategoryForm from '../components/EditCategoryForm';
import editCategory from "../components/lib/editCategory";

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

// const [categories, setCategories] = useState();
  
// useEffect(() => {
//   editCategory()
//     .then((response: { data: { slice: (arg0: number) => React.SetStateAction<undefined>; } }) => {
//       setCategories(response.data.slice(-10));
//     })
//     .catch((error: any) => {
//       console.log(error);
//     });
// }, []);

    return <EditCategoryForm title={payload.title} description={payload.description}/>
}

export default EditCategory; 