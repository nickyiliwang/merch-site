import React from "react";
// styled components
import { CustomButtonStyles } from "./CustomButtonStyle";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonStyles {...props}>{children}</CustomButtonStyles>
);

export default CustomButton;
