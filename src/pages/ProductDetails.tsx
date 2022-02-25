import React from "react";
import { EditProductForm } from "../components/EditProductForm/EditProductForm";

const ProductDetails: React.FC = () => {
  const categories = [
    {
      id: 3,
      title: "Electronics",
      description: "Electronics products",
      createdAt: "2022-02-16T09:36:41.000Z",
      updatedAt: "2022-02-16T09:36:41.000Z",
    },
    {
      id: 4,
      title: "Clothing",
      description: "Clothing products",
      createdAt: "2022-02-16T09:58:06.000Z",
      updatedAt: "2022-02-16T09:58:06.000Z",
    },
    {
      id: 5,
      title: "Books",
      description: "Enjoy reading books",
      createdAt: "2022-02-16T21:04:55.000Z",
      updatedAt: "2022-02-16T21:17:35.000Z",
    },
  ];

  const product = {
    id: 1,
    title: "First Product",
    category: "Books",
    quantity: 10000,
    description: "First Product description...",
    status: false,
    published: false,
  };

  return <EditProductForm product={product} categories={categories} />;
};

export default ProductDetails;
