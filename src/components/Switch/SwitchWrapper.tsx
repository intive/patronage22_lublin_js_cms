import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

type SwitchWrapperProps  = {
  name: string;
  label: string;
  legend: string;
};

const SwitchWrapper: React.FC<SwitchWrapperProps> = ({ name, label, legend }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {
    error: false,
  };
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default SwitchWrapper;
