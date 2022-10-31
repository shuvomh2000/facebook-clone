import React from "react";
import "./login.css";
import { Container, Grid,TextField,Button  } from "@mui/material";
import { styled } from '@mui/material/styles';

// for styled textfiled
const CssTextField = styled(TextField)({
    width:'100%',
    marginBottom:'15px',
    '& label.Mui-focused': {
      color: '#166FE5',
    },
});

// for login button styled
const MainButton = styled(Button)(({ theme }) => ({
 color:'#fff',
 backgroundColor:'#166FE5',
 width:'100%',
 fontSize:20,
 fontWeight:'500',
 padding:'10px 15px',
 textTransform: 'none',
 marginBottom:'15px',
 fontFamily: ['Poppins',' sans-serif'],
}));

const CreateButton = styled(Button)(({ theme }) => ({
 color:'#fff',
 backgroundColor:'#36A420',
 padding:'10px 15px',
 fontSize:20,
 fontWeight:'500',
 marginTop:'10px',
 textTransform: 'capitalize',
 fontFamily: ['Poppins',' sans-serif'],
}));

const Login = () => {
  return (
    <div className="login">
      <Container fixed>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <p className="logo_text">
              Facebook helps you connect and share with the people in your life.
            </p>
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
                <p className="forget">Forgotten password?</p>
                <div style={{textAlign:'center'}}>
                    <CreateButton variant="contained">create new account</CreateButton>
                </div>
              </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
