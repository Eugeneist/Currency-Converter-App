import styled from "styled-components";
import Box from "@mui/material/Box";
import CurrencyConventer from "./CurrencyConventer";
import background from "../assets/images/lines.png";

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

const Main = () => {
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
        <CurrencyConventer />
      </Box>
    </StyledMain>
  );
};

export default Main;
