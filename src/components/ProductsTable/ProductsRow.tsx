import { Chip } from '@mui/material';
import React from 'react';
import { ProductsRowProps } from '../../types/productsTable';
import { StyledTableCell, StyledTableRow } from '../Table/styles';
import EditButton from './EditButton';
import moment from 'moment';

const ProductsRow: React.FC<ProductsRowProps> = ({ product }) => {
  const { id, title, price, description, published, createdAt } = product;
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
      <StyledTableCell align="center">{`${moment(createdAt).format('YYYY-MM-DD')}`}</StyledTableCell>
      <StyledTableCell align="center"> 
        <EditButton onClick={()=>console.log('Button clicked')}>Edit</EditButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductsRow;