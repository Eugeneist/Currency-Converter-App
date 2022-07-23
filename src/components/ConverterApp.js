import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import Header from "./Header";
import Main from "./Main";

const ConverterApp = () => {
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
      <header>
        <Header currencies={currencies} loading={isLoading} />
      </header>
      <body>
        <Main currencies={currencies} />
      </body>
    </>
  );
};

export default ConverterApp;
