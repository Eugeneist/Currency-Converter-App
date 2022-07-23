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
  const [selectedCurrFrom, setSelectedCurrFrom] = useState("");
  const [selectedCurrTo, setSelectedCurrTo] = useState("");
  // const [exchangedValue, setExchangedValue] = useState("");

  const newCurrencies = [
    {
      id: "USD",
      buy: currencies[0].buy,
      sale: currencies[0].sale,
      base: currencies[0].base_ccy,
      label: "USD $",
    },
    {
      id: "EUR",
      buy: currencies[1].buy,
      sale: currencies[1].sale,
      base: currencies[1].base_ccy,
      label: "EUR €",
    },
    {
      id: "UAH",
      label: "UAH ₴",
    },
    {
      id: "BTC",
      buy: currencies[2].buy,
      sale: currencies[2].sale,
      base: currencies[2].base_ccy,
      label: "BTC ฿",
    },
  ];

  useEffect(() => {
    if (selectedCurrFrom != null && selectedCurrTo != null) {
      console.log(selectedCurrFrom);
      console.log(selectedCurrTo);
    }
  }, [selectedCurrFrom, selectedCurrTo]);

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
          id="outlined-name"
          label="You send"
          // value={name}
          onChange={handleCurrFromChange}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          // label="Select currency"
          // value={currency}
          // onChange={handleChange}
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
      <div>
        <TextField
          id="outlined-name"
          label="You get"
          // value={name}
          onChange={handleCurrToChange}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          // label="Select currency"
          // value={currency}
          // onChange={handleChange}
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
    </StyledConventer>
  );
};

export default CurrencyConventer;
