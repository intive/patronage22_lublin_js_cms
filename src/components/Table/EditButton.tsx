import React from "react";
import { Button } from "@mui/material";

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    id: number;
  }

const EditButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button variant="text" color="primary" size="small" onClick={onClick} 
    >
     {children}
    </Button>
  );
};

export default EditButton; 
