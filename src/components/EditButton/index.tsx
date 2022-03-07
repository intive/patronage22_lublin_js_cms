import React from "react";
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
    id: number;
  }

const EditButton: React.FC<Props> = ({ children, id }) => {

  const history = useHistory();

  return (
    <Button variant="text" color="primary" size="small" 
    onClick={() => history.push(`/product/edit/${id}`)} 
    >
     {children}
    </Button>
  );
};

export default EditButton; 
