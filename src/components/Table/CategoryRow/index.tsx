import { Chip } from "@mui/material";
import React from "react";
import { parseISO, format } from "date-fns";
import { CustomRowProps } from "../../../types/table";
import { StyledTableCell, StyledTableRow } from "../styles";
import EditButton from "../../EditButton";

const CategoryRow: React.FC<CustomRowProps> = ({ row }) => {
  const { id, title, published, createdAt } = row;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        {id}
      </StyledTableCell>
      <StyledTableCell align="center" width="20%">
        {title}
      </StyledTableCell>
      <StyledTableCell align="center">
        {published ? (
          <Chip clickable label="Yes" color="success" variant="filled" />
        ) : (
          <Chip clickable label="No" color="error" variant="filled" />
        )}
      </StyledTableCell>
      <StyledTableCell align="center">{`${format(
        parseISO(createdAt),
        "dd/MM/yyyy",
      )}`}</StyledTableCell>
      <StyledTableCell align="center">
        <EditButton id={id} linkURL={`/category/edit/${id}`}>
          Edit
        </EditButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CategoryRow;
