import React from "react";
import { CustomRowProps } from "../../../types/table";
import { StyledTableCell, StyledTableRow } from "../styles";

const OrderDetailRow: React.FC<CustomRowProps> = ({ row }) => {
  const { id, name, unitCost, quantity, totalPrice } = row;
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        {id}
      </StyledTableCell>
      <StyledTableCell align="center" width="20%">
        {name}
      </StyledTableCell>
      <StyledTableCell align="center">{`${unitCost} $`}</StyledTableCell>
      <StyledTableCell align="center">{quantity}</StyledTableCell>
      <StyledTableCell align="center">{`${totalPrice} $`}</StyledTableCell>
    </StyledTableRow>
  );
};

export default OrderDetailRow;
