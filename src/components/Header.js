import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import CurrencyBox from "./CurrencyBox";
import CircularProgress from "@mui/material/CircularProgress";

const Header = ({ currencies, loading }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0.5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Currency Conventer
          </Typography>
          <Container maxWidth="md">
            {loading ? (
              <CircularProgress />
            ) : (
              <CurrencyBox currencies={currencies} />
            )}
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
