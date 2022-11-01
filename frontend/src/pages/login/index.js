import React from "react";
import "./login.css";
import { Container, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// for styled textfiled
const CssTextField = styled(TextField)({
  width: "100%",
  marginBottom: "15px",
  "& label.Mui-focused": {
    color: "#166FE5",
  },
  ["@media (min-width:600px) and (max-width:768px)"]: {
    marginBottom: "10px",
  },
});

// for login button styled
const MainButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#166FE5",
  width: "100%",
  fontSize: 20,
  fontWeight: "500",
  padding: "10px 15px",
  textTransform: "none",
  marginBottom: "15px",
  fontFamily: ["Poppins", " sans-serif"],
  ["@media (min-width:375px) and (max-width:599px)"]: {
    fontSize: 18,
    padding: "5px 15px",
  },
  ["@media (min-width:600px) and (max-width:768px)"]: {
    fontSize: 14,
    padding: "5px 15px",
    marginBottom: "10px",
  },
}));

const CreateButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#36A420",
  padding: "10px 15px",
  fontSize: 20,
  fontWeight: "500",
  marginTop: "10px",
  textTransform: "capitalize",
  fontFamily: ["Poppins", " sans-serif"],
  "&:hover": {
    backgroundColor: "#38c41c",
  },
  ["@media (min-width:375px) and (max-width:599px)"]: {
    fontSize: 16,
    padding: "5px 15px",
  },
  ["@media (min-width:600px) and (max-width:768px)"]: {
    fontSize: 14,
    padding: "5px 15px",
  },
}));

const Login = () => {
  return (
    <div className="login">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className="left">
              <div>
                <div className="img">
                  <img src="icons/facebook.svg" />
                </div>
                <p className="logo_text">
                  Facebook helps you connect and share with the people in your
                  life.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="box">
              <CssTextField
                id="outlined-basic"
                label="Email adress"
                variant="outlined"
              />
              <CssTextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
              <MainButton variant="contained">Log in</MainButton>
              <Link to="/" className="forget">
                Forgotten password?
              </Link>

              <div style={{ textAlign: "center" }}>
                <CreateButton variant="contained">
                  create new account
                </CreateButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
