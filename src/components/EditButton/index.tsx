import React from "react";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

interface Props {
  children: React.ReactNode;
  id: number;
  linkURL: string;
}

const EditButton: React.FC<Props> = ({children, id, linkURL}) => {
  const history = useHistory();

  return (
    <Button
      variant='text'
      color='primary'
      size='small'
      onClick={() => history.push(linkURL)}
    >
      {children}
    </Button>
  );
};

export default EditButton;
