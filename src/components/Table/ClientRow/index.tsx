import React from "react";
import { CustomRowProps } from "../../../types/table";
import { StyledTableCell, StyledTableRow } from "../styles";
import EditButton from "../../EditButton";
import { Chip } from "@mui/material";

const ClientRow: React.FC<CustomRowProps> = ({ row }) => {
  const { id, active, firstName, lastName, email, phone } = row;

  return (
    <StyledTableRow overflow-wrap="anywhere">
      <StyledTableCell component="th" scope="row" align="center">
        {id}
      </StyledTableCell>

      <StyledTableCell align="center">
        {active ? (
          <Chip clickable label="Yes" color="success" variant="filled" />
        ) : (
          <Chip clickable label="No" color="error" variant="filled" />
        )}
      </StyledTableCell>

      <StyledTableCell width="20%" align="center">
        {firstName}
      </StyledTableCell>

      <StyledTableCell width="20%" align="center">
        {lastName}
      </StyledTableCell>

      <StyledTableCell width="20%" align="center">
        {email}
      </StyledTableCell>

      <StyledTableCell width="20%" align="center">
        {phone}
      </StyledTableCell>

      <StyledTableCell align="center">
        <EditButton id={id} linkURL={`/client/details/${id}`}>
          Details
        </EditButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};
export default ClientRow;
