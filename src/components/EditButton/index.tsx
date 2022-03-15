import React from "react";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

interface Props {
  children: React.ReactNode;
  id: number;
  nameOfEditingItem: string;
}

const EditButton: React.FC<Props> = ({children, id, nameOfEditingItem}) => {
  const history = useHistory();

  return (
    <Button
      variant='text'
      color='primary'
      size='small'
      onClick={() => history.push(`/${nameOfEditingItem}/edit/${id}`)}
    >
      {children}
    </Button>
  );
};

export default EditButton;
