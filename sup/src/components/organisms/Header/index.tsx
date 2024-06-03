import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="h1">
            ウォーリーを探さないで風アプリ
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
