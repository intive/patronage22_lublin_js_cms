import React from "react";
import CustomTable from "../components/Table";
import {CustomRowProps, HeadCell} from "../types/table";
//import {getCategories} from "../components/lib/categories";
import CategoryRow from "../components/Table/CategoryRow";
import {Typography} from "@mui/material";

const Categories: React.FC = () => {
  const initialState = [
    {
      id: 3,
      title: "Electronics",
      published: true,
      description: "Electronics products",
      createdAt: "2022-02-16T09:36:41.000Z",
      updatedAt: "2022-02-16T09:36:41.000Z",
    },
    {
      id: 4,
      title: "Clothing",
      published: true,
      description: "Clothing products",
      createdAt: "2022-02-16T09:58:06.000Z",
      updatedAt: "2022-02-16T09:58:06.000Z",
    },
    {
      id: 5,
      title: "Books",
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
      <Typography variant='h4' p={2} sx={{color: "#0f0f0f"}}>
        Categories
      </Typography>
      <CustomTable
        customRow={(props: CustomRowProps) => <CategoryRow {...props} />}
        headCells={headCells}
        data={initialState}
      />
    </section>
  );
};

export default Categories;
