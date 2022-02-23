import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

type ButtonProps = {
  children: string;
};

const ButtonWrapper: React.FC<ButtonProps> = ({ children }) => {
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
