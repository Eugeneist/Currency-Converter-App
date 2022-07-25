import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const StyledConventer = styled.div`
  width: 90%;
  height: 150px;
  bacground-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 30px;
`;

const CurrencyConventer = ({ currencies }) => {
  const [selectedValueFrom, setSelectedValueFrom] = useState(1);
  const [selectedValueTo, setSelectedValueTo] = useState(1);

  const [selectedCurrFrom, setSelectedCurrFrom] = useState(0);
  const [selectedCurrTo, setSelectedCurrTo] = useState(0);

  const [valueFromCurrency, setValueFromCurrency] = useState(true);

  const newCurrencies = [
    {
      id: "choose",
      buy: "0",
      sale: "0",
      base: "choose",
      label: "Choose currency",
    },
    {
      id: "USD",
      buy: currencies[0]?.buy,
      sale: currencies[0]?.sale,
      base: currencies[0]?.base_ccy,
      label: "USD $",
    },
    {
      id: "EUR",
      buy: currencies[1]?.buy,
      sale: currencies[1]?.sale,
      base: currencies[1]?.base_ccy,
      label: "EUR €",
    },
    {
      id: "UAH",
      label: "UAH ₴",
    },
    {
      id: "RUR",
      buy: currencies[2]?.buy,
      sale: currencies[2]?.sale,
      base: currencies[2]?.base_ccy,
      label: "RUR ₽",
    },
    {
      id: "BTC",
      buy: currencies[3]?.buy,
      sale: currencies[3]?.sale,
      base: currencies[3]?.base_ccy,
      label: "BTC ฿",
    },
  ];

  useEffect(() => {
    if (valueFromCurrency) {
      setSelectedValueTo((selectedValueFrom / selectedCurrTo).toFixed(2));
    } else {
      setSelectedValueFrom((selectedValueTo * selectedCurrFrom).toFixed(2));
    }
  }, [
    selectedValueFrom,
    selectedValueTo,
    selectedCurrFrom,
    selectedCurrTo,
    valueFromCurrency,
  ]);

  let handleValueFromChange = (event) => {
    setSelectedValueFrom(event.target.value);
    setValueFromCurrency(true);
  };

  let handleValueToChange = (event) => {
    setSelectedValueTo(event.target.value);
    setValueFromCurrency(false);
  };

  let handleCurrFromChange = (event) => {
    setSelectedCurrFrom(event.target.value);
  };

  let handleCurrToChange = (event) => {
    setSelectedCurrTo(event.target.value);
  };

  return (
    <StyledConventer>
      <div>
        <TextField
          id="valueFrom"
          label="You send"
          value={selectedValueFrom}
          onChange={handleValueFromChange}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          // label="Select currency"
          // value={currency}
          onChange={handleCurrFromChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {newCurrencies.map((object) => (
            <option key={object.id} value={object.sale}>
              {object.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="valueTo"
          label="You get"
          value={selectedValueTo}
          onChange={handleValueToChange}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          // label="Select currency"
          // value={currency}
          onChange={handleCurrToChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {newCurrencies.map((object) => (
            <option key={object.id} value={object.buy}>
              {object.label}
            </option>
          ))}
        </TextField>
      </div>
    </StyledConventer>
  );
};

export default CurrencyConventer;
