import {Chip} from "@mui/material";
import React from "react";
import {CategoryRowProps} from "../../types/table";
import {StyledTableCell, StyledTableRow} from "./styles";
import EditButton from "../EditButton";
import {parseISO, format} from "date-fns";

const CategoriesRow: React.FC<CategoryRowProps> = ({product}) => {
  const {id, title, published, createdAt} = product;

  return (
    <StyledTableRow>
      <StyledTableCell component='th' scope='row' align='center'>
        {id}
      </StyledTableCell>
      <StyledTableCell align='center'>{title}</StyledTableCell>
      <StyledTableCell align='center'>
        {published ? (
          <Chip clickable label='Yes' color='success' variant='filled' />
        ) : (
          <Chip clickable label='No' color='error' variant='filled' />
        )}
      </StyledTableCell>
      <StyledTableCell align='center'>{`${format(parseISO(createdAt), "MM/dd/yyyy")}`}</StyledTableCell>
      <StyledTableCell align='center'>
        <EditButton id={id}>Edit</EditButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CategoriesRow;
