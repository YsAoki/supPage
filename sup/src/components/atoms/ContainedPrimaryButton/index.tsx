import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";

const ContainedPrimaryButton: FC<ButtonProps> = ({ children, ...other }) => {
  return (
    <Button {...other} variant="contained" color="primary">
      {children}
    </Button>
  );
};

export default ContainedPrimaryButton;
