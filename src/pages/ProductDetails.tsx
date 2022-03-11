import React, { useEffect, useState } from "react";
import { EditProductForm } from "../components/EditProductForm/EditProductForm";
import getCategories from "../components/lib/categories";
import { useParams } from "react-router-dom";
import { getProducts } from "../components/lib/products";

type UrlParams = {
  id: string;
};

interface ApiCategories {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  published: boolean;
}

const ProductDetails: React.FC = () => {
  const [apiCategories, setApiCategories] = useState<ApiCategories[]>([]);
  const [productss, setProductss] = useState<ApiProducts[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        setApiCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response.data);
        setProductss(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { id } = useParams<UrlParams>();

  const productt = productss.find((post) => post.id.toString() === id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = {
    id: productt?.id,
    title: productt?.title,
    category: "Books",
    quantity: productt?.price,
    description: productt?.description,
    status: false,
    published: productt?.published,
  };

  return <EditProductForm product={product} categories={apiCategories} />;
};

export default ProductDetails;
