export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  published: boolean;
}

export interface CustomRowProps {
  product: Product;
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

export interface CustomTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface CustomTableProps {
  data: Product[];
}

export interface HeadCell {
  id: keyof Product;
  numeric: boolean;
  label: string;
}
export type Order = 'asc' | 'desc';
