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
  id: string;
  userName: string;
  userSurname: string;
  totalPrice: number;
  orderDate: string;
  paymentStatus: PaymentStatus;
}
export interface OrderDetail {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
}

export interface OrderDetailRow {
  id: number;
  name: string;
  unitCost: number;
  quantity: number;
  totalPrice: number;
}

export interface Page {
  id?: number;
  title: string;
  description?: string;
  slug: string;
}

export interface CustomRowProps {
  row: Product | Page | Category | OrderObject | OrderDetailRow |Client| any;
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
    | keyof OrderDetailRow
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
      | keyof OrderDetailRow
      | keyof Client,
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export interface CustomTableProps {
  data:
    | Product[]
    | Page[]
    | Category[]
    | OrderObject[]
    | OrderDetailRow[]
    |Client[]
    | any;

  data: Product[] | Page[] | Category[] | OrderObject[] | Client[] | any;
  headCells: HeadCell[];
  disablePagination?: boolean;
  customRow: ReactNode;
}

export type Order = "asc" | "desc";
