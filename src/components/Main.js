import styled from "styled-components";
import Box from "@mui/material/Box";
import CurrencyConventer from "./CurrencyConventer";
import background from "../lines.png";

const StyledMain = styled.div`
  background: url(${background}),
    linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 1) 24%,
      hsla(352, 78%, 27%, 1) 95%,
      hsla(352, 78%, 29%, 1) 100%
    );

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 0.1%;
  background-size: cover;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// background: linear-gradient(
//   180deg,
//   hsla(0, 0%, 0%, 1) 24%,
//   hsla(352, 78%, 27%, 1) 95%,
//   hsla(352, 78%, 29%, 1) 100%
// );

// export default function SelectTextFields() {
//   const [currency, setCurrency] = React.useState('EUR');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCurrency(event.target.value);
// };

const Main = ({ currencies }) => {
  return (
    <StyledMain>
      <Box
        component="form"
        sx={{
          width: "1100px",
          height: "300px",
          backgroundColor: "#fff",
          margin: "0 auto",
          borderRadius: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <CurrencyConventer currencies={currencies} />
      </Box>
    </StyledMain>
  );
};

export default Main;
