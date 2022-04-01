import React from "react";
import { CustomRowProps } from "../../../types/table";
import { StyledTableCell, StyledTableRow } from "../styles";
import EditButton from "../../EditButton";
import { parseISO, format } from "date-fns";

const OrderRow: React.FC<CustomRowProps> = ({ row }) => {
  const { id, userName, userSurname, amount, orderDate, paymentStatus } = row;
  return (
    <StyledTableRow>
      <StyledTableCell component='th' scope='row' align='center'>
        {id}
      </StyledTableCell>
      <StyledTableCell align='center'>{userName}</StyledTableCell>
      <StyledTableCell align='center'>{userSurname}</StyledTableCell>
      <StyledTableCell align='center'>{amount}</StyledTableCell>
      <StyledTableCell align='center'>{`${format(
        parseISO(orderDate),
        "MM/dd/yyyy"
      )}`}</StyledTableCell>
      <StyledTableCell align='center'>{paymentStatus}</StyledTableCell>
      <StyledTableCell align='center'>
        <EditButton id={id} linkURL={`/order/details/${id}`}>
          Details
        </EditButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default OrderRow;
