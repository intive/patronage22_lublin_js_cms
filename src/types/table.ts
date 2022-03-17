import React, { ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  // description ?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Page {
  id?: number;
  title: string;
  description?: string;
  slug: string;
}

export interface CustomRowProps {
  row: Product | Page | any;
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
  id: keyof Product | keyof Page;
  numeric: boolean;
  label: string;
}
export interface CustomTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product | keyof Page
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export interface CustomTableProps {
  data : Product[] | Page [] | any;
  headCells: HeadCell[];
  disablePagination?: boolean;
  customRow: ReactNode;
}

export type Order = 'asc' | 'desc';