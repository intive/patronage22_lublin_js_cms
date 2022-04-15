import React, { ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  // description ?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Client {
  id: number;
  active: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export interface Category {
  id: number;
  title: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum PaymentStatus {
  PENDING = "pending",
  CANCELLED = "cancelled",
  DONE = "done",
  REJECTED = "rejected",
}

export interface OrderObject {
  id: number;
  userName: string;
  userSurname: string;
  amount: number;
  orderDate: string;
  paymentStatus: PaymentStatus;
}

export interface Page {
  id?: number;
  title: string;
  description?: string;
  slug: string;
}

export interface CustomRowProps {
  row: Product | Page | Category | OrderObject | Client | any;
  key: number;
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}
export interface HeadCell {
  id:
    | keyof Product
    | keyof Page
    | keyof Category
    | keyof OrderObject
    | keyof Client;
  numeric: boolean;
  label: string;
}
export interface CustomTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property:
      | keyof Product
      | keyof Page
      | keyof Category
      | keyof OrderObject
      | keyof Client,
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export interface CustomTableProps {
  data: Product[] | Page[] | Category[] | OrderObject[] | Client[] | any;
  headCells: HeadCell[];
  disablePagination?: boolean;
  customRow: ReactNode;
}

export type Order = "asc" | "desc";
