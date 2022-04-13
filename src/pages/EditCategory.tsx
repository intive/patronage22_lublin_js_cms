import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import EditCategoryForm from "../components/EditCategoryForm";
import {
  editCategoryRequest,
  getCategory,
} from "../components/lib/editCategory";

import { ROUTES } from "../types/routes";

type UrlParams = {
  id: string;
};

type Category = {
  title: string;
  description: string;
};

const EditCategory: React.FC = () => {
  const { id } = useParams<UrlParams>();
  const [category, setCategory] = useState<Category>({
    title: "",
    description: "",
  });
  const history = useHistory();

  useEffect(() => {
    getCategory(id)
      .then((response) => {
        const { data } = response;
        setCategory({
          title: data.title,
          description: data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleOnSubmit = (formValues: Category) => {
    editCategoryRequest(id, formValues)
      .then(() => {
        history.push(ROUTES.CATEGORIES);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <EditCategoryForm
      title={category.title}
      description={category.description}
      onSubmit={handleOnSubmit}
    />
  );
};

export default EditCategory;
