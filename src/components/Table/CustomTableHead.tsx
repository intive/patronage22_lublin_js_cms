import React from 'react';
import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableSortLabel,
} from './styles';
import { CustomTableHeadProps, HeadCell, Product } from '../../types/table';

const headCells: HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    label: 'ID',
  },
  {
    id: 'title',
    numeric: false,
    label: 'TITLE',
  },
  {
    id: 'price',
    numeric: true,
    label: 'PRICE',
  },
  {
    id: 'description',
    numeric: false,
    label: 'DESCRIPTION',
  },
  {
    id: 'published',
    numeric: false,
    label: 'PUBLISHED',
  },
];

export const CustomTableHead = (props: CustomTableHeadProps) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Product) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <StyledTableRow>
      {headCells.map((headCell) => (
        <StyledTableCell
          key={headCell.id}
          align={'center'}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <StyledTableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : 'asc'}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </StyledTableSortLabel>
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );
};
