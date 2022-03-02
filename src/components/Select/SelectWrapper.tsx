import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

type SelectWrapperProps = {
  name: string;
  options: any;
  label: string;
};

const SelectWrapper: React.FC<SelectWrapperProps> = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    onChange: handleChange,
    error: false,
    helperText: "",
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {options.map((option: any) => {
        return (
          <MenuItem key={option.id} value={option.title}>
            {option.title}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
