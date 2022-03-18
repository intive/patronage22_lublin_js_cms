import React from 'react';
import { CustomRowProps } from '../../../types/table';
import { StyledTableCell, StyledTableRow } from '../styles';


const PagesRow: React.FC<CustomRowProps> = ({ row }) => {
  const { title, slug} = row;

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        {title}
      </StyledTableCell>
      <StyledTableCell align="center">{slug}</StyledTableCell>

    </StyledTableRow>
  );
};

export default PagesRow;