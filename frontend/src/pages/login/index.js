import React from "react";
import "./login.css";
import { Container, Grid,TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="login">
      <Container fixed>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </Grid>
          <Grid item xs={6}>
            <div className="box">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
