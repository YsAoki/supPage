import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";

const OutlinedPrimaryButton: FC<ButtonProps> = ({ children, ...other }) => {
  return (
    <Button variant="outlined" color="primary" {...other}>
      {children}
    </Button>
  );
};

export default OutlinedPrimaryButton;
