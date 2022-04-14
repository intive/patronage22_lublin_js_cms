import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CustomTable from "../components/Table";
import { Category, CustomRowProps, HeadCell } from "../types/table";
import getCategories from "../components/lib/categories";
import CategoryRow from "../components/Table/CategoryRow";
import { ROUTES } from "../types/routes";
import classes from "../components/Layout/Layout.module.css";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <Typography variant="h4" p={2} sx={{ color: "#0f0f0f" }}>
        Categories
      </Typography>
      <Button type="submit" variant="contained">
        <Link to={ROUTES.CATEGORY_ADD} className={classes.link}>
          <AddIcon /> Add Category
        </Link>
      </Button>
      <CustomTable
        customRow={(props: CustomRowProps) => <CategoryRow {...props} />}
        headCells={headCells}
        data={categories}
      />
    </section>
  );
};

export default Categories;
