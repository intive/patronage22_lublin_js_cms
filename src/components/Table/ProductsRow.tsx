import { Chip } from '@mui/material';
import React from 'react';
import { CustomRowProps } from '../../types/table';
import { StyledTableCell, StyledTableRow } from './styles';
import EditButton from './EditButton';
import { parseISO, format} from 'date-fns';
import { useParams, useHistory } from 'react-router-dom';


const ProductsRow: React.FC<CustomRowProps> = ({ product }) => {
  const { id, title, price, published, createdAt } = product;

  const history = useHistory();
  
let {productId} = useParams<{productId?:any}>();
productId=product.id;

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
      <StyledTableCell align="center">
        {published ? (
          <Chip clickable label="Yes" color="success" variant="filled" />
        ) : (
          <Chip clickable label="No" color="error" variant="filled" />
        )}
      </StyledTableCell>
      <StyledTableCell align="center">{`${format(parseISO(createdAt), 'MM/dd/yyyy')}`}</StyledTableCell>
      <StyledTableCell align="center">
        <EditButton id={id} onClick={() => history.push(`/product/edit/:${productId}`)}
        >Edit</EditButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductsRow;
