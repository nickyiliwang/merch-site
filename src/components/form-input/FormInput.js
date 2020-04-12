import React from "react";
import {
  FormInputLabelStyles,
  FormInputStyles,
  GroupStyles,
} from "./FormInputStyles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupStyles>
      <FormInputStyles onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabelStyles
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabelStyles>
      ) : null}
    </GroupStyles>
  );
};

export default FormInput;
