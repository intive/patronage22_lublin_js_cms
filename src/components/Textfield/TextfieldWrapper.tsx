import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

type TextFieldProps = {
  name: string;
  label: string;
  multiline?: boolean;
  rows?: number;
};

export const TextfieldWrapper: React.FC<TextFieldProps> = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...otherProps,
    ...field,
    fullWidth: true,
    error: false,
    helperText: "",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} />;
};

export default TextfieldWrapper;
