import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditProductForm } from "../components/EditProductForm/EditProductForm";
import getCategories from "../components/lib/categories";
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
  status: string;
  quantity: number;
  description: string;
  published: boolean;
  categoryId: number;
}

const ProductDetails: React.FC = () => {
  const [apiCategories, setApiCategories] = useState<ApiCategories[]>([]);
  const [apiProducts, setApiProducts] = useState<ApiProducts[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((response) => {
        // console.log(response.data);
        const { data } = response;
        setApiCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getProducts()
      .then((response) => {
        // console.log(response.data);
        setApiProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { id } = useParams<UrlParams>();
  const apiProduct = apiProducts.find((post) => post.id.toString() === id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = {
    id: apiProduct?.id,
    title: apiProduct?.title,
    category: apiProduct?.categoryId,
    price: apiProduct?.price,
    quantity: apiProduct?.quantity || "",
    description: apiProduct?.description,
    status: apiProduct?.status || "",
    published: apiProduct?.published,
  };

  return <EditProductForm product={product} categories={apiCategories} />;
};

export default ProductDetails;
