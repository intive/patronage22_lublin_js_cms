import React, {ReactNode} from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  // description ?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Category {
  id: number;
  title: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CustomRowProps {
  row: Product | Category | any;
  key: number;
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
export interface HeadCell {
  id: keyof Product | keyof Category;
  numeric: boolean;
  label: string;
}
export interface CustomTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product | keyof Category
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export interface CustomTableProps {
  data: Product[] | Category[] | any;
  headCells: HeadCell[];
  disablePagination?: boolean;
  customRow: ReactNode;
}

export type Order = "asc" | "desc";
