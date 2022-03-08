import React from "react";
import CustomTable from "../components/Table";
import CategoriesRow from "../components/Table/CategoriesRow";
import {HeadCell} from "../types/table";

const Categories: React.FC = () => {
  const initialState = [
    {
      id: 3,
      title: "Electronics",
      price: 0,
      published: true,
      description: "Electronics products",
      createdAt: "2022-02-16T09:36:41.000Z",
      updatedAt: "2022-02-16T09:36:41.000Z",
    },
    {
      id: 4,
      title: "Clothing",
      price: 0,
      published: true,
      description: "Clothing products",
      createdAt: "2022-02-16T09:58:06.000Z",
      updatedAt: "2022-02-16T09:58:06.000Z",
    },
    {
      id: 5,
      title: "Books",
      price: 0,
      published: true,
      description: "Enjoy reading books",
      createdAt: "2022-02-16T21:04:55.000Z",
      updatedAt: "2022-02-16T21:17:35.000Z",
    },
  ];

  const headCells: HeadCell[] = [
    {
      id: "id",
      numeric: true,
      label: "ID",
    },
    {
      id: "title",
      numeric: false,
      label: "TITLE",
    },
    {
      id: "price",
      numeric: true,
      label: "PRICE",
    },
    {
      id: "published",
      numeric: false,
      label: "PUBLISHED",
    },
    {
      id: "createdAt",
      numeric: true,
      label: "CREATED",
    },
    {
      id: "updatedAt",
      numeric: false,
      label: "",
    },
  ];
  return (
    <section>
      <CustomTable
        headCells={headCells}
        data={initialState}
        customRow={<CategoriesRow key={0} product={initialState[0]} />}
      />
    </section>
  );
};

export default Categories;
