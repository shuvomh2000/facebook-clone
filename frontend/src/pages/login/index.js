import React, { useState } from "react";
import "./login.css";
import {
  Container,
  Grid,
  TextField,
  Button,
  Alert,
  List,
  ListItemButton,
  ListSubheader,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../slice/userSlice";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";

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
  let Dispatch = useDispatch();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [password, setPassword] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [backenderr, setBackenderr] = useState("");
  let [success, setSuccess] = useState("");
  // let [lowercase, setLowercase] = useState(false);
  // let [uppercase, setUppercase] = useState(false);
  // let [number, setNumber] = useState(false);
  // let [symbol, setSymbol] = useState(false);
  // let [lenght, setLenght] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = async () => {
    // backend validation
    try {
      let data = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      console.log(data.data);
      Dispatch(login(data.data));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setBackenderr(error.response.data.message);
    }
    // frontend validation
    // if (!email) {
    //   setEmailerr("email is required");
    // }
    // if (!password) {
    //   setPassworderr("password is required");
    // }
  };

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
              {/* email input */}
              <CssTextField
                id="outlined-basic"
                label="Email adress"
                variant="outlined"
                onChange={handleEmail}
              />
              {emailerr && (
                <Alert
                  style={{ marginTop: "-15px", marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {emailerr}
                </Alert>
              )}
              {/* password input */}
              <CssTextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
              />
              {passworderr && (
                <Alert
                  style={{ marginTop: "-15px", marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {passworderr}
                </Alert>
              )}
              {backenderr && (
                <Alert
                  style={{ marginTop: "-15px", marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {backenderr}
                </Alert>
              )}
              {/* log btn */}
              <MainButton variant="contained" onClick={handleSubmit}>
                Log in
              </MainButton>
              {/* forget password */}
              <Link to="/" className="forget">
                Forgotten password?
              </Link>
              <div style={{ textAlign: "center" }}>
                {/* create new account */}
                <CreateButton variant="contained">
                  <Link to="/registration" className="lastBtn">create new account</Link>
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
