import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditCategoryForm from '../components/EditCategoryForm';
import { editCategoryRequest, getCategory } from "../components/lib/editCategory";

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
    const [formData, setFormData] = useState({title:"", decription:""});


    useEffect(() => {
    getCategory(id)
        .then((response) => {
            const data = response.data;
            setCategory(data);
        })
      .catch((error) => {
        console.log(error);
      });
  }, []);

//    useEffect(() => {
//     editCategoryRequest(id, category.title , category.description)
//         .then((response) => {
//             console.log(response);
//             const title = response.data;
//             const description = response.data;
//             setTitle(title);
//             setDescription(description);
//         })
//       .catch((error) => {
//         console.log(error);
//       });
//    }, []);

    return category ? <EditCategoryForm title={category.title} description={category.description}/> : null;
}

export default EditCategory; 