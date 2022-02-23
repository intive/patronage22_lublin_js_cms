import React from "react";
import  {EditProductForm}  from "../components/EditProductForm/EditProductForm";

const ProductDetails: React.FC = () => {

  const product = 
{
  id: 1,
  title: "First Product",
  category: 3,
  quantity: 10000,
  description: "First Product description...",
  status: false,
  published: false,
};

  return <EditProductForm product={product}/>;
};

export default ProductDetails;
