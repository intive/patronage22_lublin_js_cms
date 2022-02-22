import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

type props = {
  children: string;
};

const ButtonWrapper: React.FC<props> = ({ children }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button {...configButton} variant="contained" color="primary">
      {children}
    </Button>
  );
};

export default ButtonWrapper;
