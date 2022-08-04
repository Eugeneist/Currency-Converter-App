import * as React from "react";
import { useEffect, useState } from "react";
import headerCurrency from "../helpers/axiosHeaderCurrency";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import CurrencyBox from "./CurrencyBox";
import CircularProgress from "@mui/material/CircularProgress";

const Header = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    headerCurrency
      .get(`/p24api/pubinfo?exchange&json&coursid=11`)
      .then((data) => {
        setCurrencies(data);
        setLoading(false);
      });
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CurrencyExchangeRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
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
            Currency Converter App
          </Typography>
          <Container maxWidth="md">
            {isLoading ? (
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
