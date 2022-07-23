import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import Container from "@mui/material/Container";
import CurrencyBox from "./CurrencyBox";
import CircularProgress from "@mui/material/CircularProgress";

const CurrencyStatus = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/p24api/pubinfo?json&exchange&coursid=5`).then((data) => {
      setCurrencies(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <CurrencyBox currencies={currencies} />
        )}
      </Container>
    </>
  );
};

export default CurrencyStatus;
