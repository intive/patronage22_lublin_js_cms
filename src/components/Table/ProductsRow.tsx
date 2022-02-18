import { Chip } from '@mui/material';
import * as React from 'react';
import { CustomRowProps } from '../../types/table';
import { StyledTableCell, StyledTableRow } from './styles';

const ProductsRow: React.FC<CustomRowProps> = ({ product }) => {
  const { id, title, price, description, published } = product;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        {id}
      </StyledTableCell>
      <StyledTableCell align="center">{title}</StyledTableCell>
      <StyledTableCell align="center">
        <Chip
          clickable
          label={`${price.toLocaleString()} $`}
          variant="filled"
        />
      </StyledTableCell>
      <StyledTableCell align="center">{description}</StyledTableCell>
      <StyledTableCell align="center">
        {published ? (
          <Chip clickable label="Yes" color="success" variant="filled" />
        ) : (
          <Chip clickable label="No" color="error" variant="filled" />
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductsRow;
