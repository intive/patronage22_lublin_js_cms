import React, { useEffect, useState } from "react";
import { EditProductForm } from "../components/EditProductForm/EditProductForm";
import getCategories from "../components/lib/categories";
import { useParams } from 'react-router-dom';


type UrlParams = {
  id: string
};

interface MyCategories {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const ProductDetails: React.FC = () => {
  const [categories, setCategories] = useState<MyCategories[]>([]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        // console.log(response);
        const data = response.data;
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const product = {
    id: 1,
    title: "First Product",
    category: "Books",
    quantity: 10000,
    description: "First Product description...",
    status: false,
    published: false,
  };

  const { id } = useParams<UrlParams>();
  console.log(id);

  return <EditProductForm product={product} categories={categories} />;
};

export default ProductDetails;
