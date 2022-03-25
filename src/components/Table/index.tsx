import React, { useState, useMemo } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TablePaginationActions from './Pagination';
import { TableFooter, TablePagination } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './styles';
import { CustomTableHead } from './CustomTableHead';
import { getComparator, stableSort } from './sortUtils';
import { Category, CustomTableProps, Order, Page, Product } from '../../types/table';

const CustomTable: React.FC<CustomTableProps> = ({
  headCells,
  customRow,
  data,
  disablePagination,
}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Product |keyof Page |keyof Category >('id');

  const CustomRow: any = useMemo(() => customRow, [customRow]);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Product | keyof Page | keyof Category

  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{margin: "32px 0"}}>
      <Table aria-label='simple table'>
        <TableHead>
          <CustomTableHead
            headCells={headCells}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />
        </TableHead>
        <TableBody>
          {stableSort(data, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <CustomRow row={row} key={row.id} />
            ))}
          {emptyRows > 0 && (
            <StyledTableRow style={{height: 53 * emptyRows}}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <StyledTableRow>
            {!disablePagination && (
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  {label: "All", value: data.length},
                ]}
                colSpan={6}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                sx={{width: "auto"}}
              />
            )}
          </StyledTableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
