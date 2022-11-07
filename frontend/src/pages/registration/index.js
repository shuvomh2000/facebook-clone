import { useState } from "react";
import "./registration.css";
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
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
  marginTop: "30px",
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

const Registration = () => {
  let [firstname, setFirstname] = useState("");
  let [firstnameerr, setFirstnameerr] = useState("");
  let [lastname, setLastname] = useState("");
  let [lastnameerr, setlastnameerr] = useState("");
  let [email, setEmail] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [password, setPassword] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [lowercase, setLowercase] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [lenght, setLenght] = useState(false);
  let [selectyear, setSelectyear] = useState("");
  let [selectmonth, setSelectmonth] = useState("");
  let [selectday, setSelectday] = useState("");
  let [dateofbirtherr, setDateofbirtherr] = useState(false);
  let [gender, setGender] = useState("");
  let [gendererr, setGendererr] = useState("");
  let [backenderr, setBackenderr] = useState("");
  let [success, setsuccess] = useState("");

  const Navigate = useNavigate();

  //   date of birth
  const year = new Date().getFullYear();
  const years = Array.from(new Array(60), (val, index) => year - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const days = Array.from(
    new Array(new Date(selectyear, selectmonth, 0).getDate()),
    (val, index) => 1 + index
  );

  //   const days = Array.from(new Array(12),(val,index)=> 1+ index)
  //   first name controller
  let handleFirstName = (e) => {
    setFirstname(e.target.value);
    setFirstnameerr("");
  };

  //   last name controller
  let handleLastName = (e) => {
    setLastname(e.target.value);
    setlastnameerr("");
  };

  //   emailcontroller
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  //   date of birth
  let handleYearChange = (e) => {
    setSelectyear(e.target.value);
    setDateofbirtherr("");
  };
  let handleMonthChange = (e) => {
    setSelectmonth(e.target.value);
    setDateofbirtherr("");
  };
  let handleDayChange = (e) => {
    setSelectday(e.target.value);
    setDateofbirtherr("");
  };

  // Gender
  let handleGender = (gender) => {
    setGender(gender);
    setGendererr("");
  };

  // password controller
  let handlePassword = (e) => {
    setPassword(e.target.value);
    //   setPassworderr('')
    // frontend validtion if needed
    // if (!/^(?=.*[a-z])/.test(password)) {
    //   setPassworderr("lowercase is required");
    //   // setLowercase(true);
    // } else if (!/^(?=.*[A-Z])/.test(password)) {
    //   setPassworderr("uppercase is required");
    //   setLowercase(true);
    // } else if (!/^(?=.*[0-9])/.test(password)) {
    //   setPassworderr("number is required");
    //   setUppercase(true);
    // } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
    //   setPassworderr("symbol is required");
    //   setNumber(true);
    // } else if (!/^(?=.{8,})/.test(password)) {
    //   setPassworderr("minimum 8 cherecter");
    //   setSymbol(true);
    // } else {
    //   setLenght(true);
    // }
  };

  // backend validtion
  let handleSubmit = async () => {
    try {
      let data = await axios.post("http://localhost:8000/register", {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        bYear: selectyear,
        bMonth: selectmonth,
        bDay: selectday,
        gender: gender,
      });
      setsuccess(data.data.message);
      setTimeout(() => {
        setsuccess('')
        Navigate("/login");
      }, 2000);
    } catch (error) {
      setBackenderr(error.response.data.message);
    }
  };

  // frontend valodation if needed
  // let handleSubmit = () => {
  //   // first name check
  //   if (!firstname) {
  //     setFirstnameerr("First name required");
  //   }
  //   // last name check
  //   if (!lastname) {
  //     setlastnameerr("Last name required");
  //   }
  //   // email check
  //   if (!email) {
  //     setEmailerr("email is required");
  //   } else {
  //     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //       setEmailerr("valid email is required");
  //     }
  //   }
  //   // password check
  //   if (!password) {
  //     setPassworderr("password is required");
  //   }
  //   // date of birth check
  //   if (selectday == "" || selectmonth == "" || selectyear == "") {
  //     setDateofbirtherr("Fill the Date of Birth");
  //   }
  //   // gender check
  //   if (gender == "") {
  //     setGendererr("Select your gender");
  //   }
  // };

  return (
    <div className="login registration">
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
              {/* first name input */}
              <CssTextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                onChange={handleFirstName}
              />
              {firstnameerr && (
                <Alert
                  style={{ marginTop: "-15px", marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {firstnameerr}
                </Alert>
              )}
              {/* last name input */}
              <CssTextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                onChange={handleLastName}
              />
              {lastnameerr && (
                <Alert
                  style={{ marginTop: "-15px", marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {lastnameerr}
                </Alert>
              )}
              {/* email input */}
              <CssTextField
                id="outlined-basic"
                label="Email adress"
                variant="outlined"
                type="email"
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
              <div>
                <Grid container spacing={8} className="DOB">
                  {/* day */}
                  <Grid item xs={3}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Day
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectday}
                          label="Age"
                          onChange={handleDayChange}
                        >
                          {days.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  {/* month */}
                  <Grid item xs={3}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Month
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectmonth}
                          label="Age"
                          onChange={handleMonthChange}
                        >
                          {months.map((item) => (
                            <MenuItem value={item}>
                              {item == 1 && "January"}
                              {item == 2 && "February"}
                              {item == 3 && "March"}
                              {item == 4 && "April"}
                              {item == 5 && "May"}
                              {item == 6 && "June"}
                              {item == 7 && "July"}
                              {item == 8 && "August"}
                              {item == 9 && "September"}
                              {item == 10 && "October"}
                              {item == 11 && "November"}
                              {item == 12 && "December"}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  {/* year */}
                  <Grid item xs={3}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Year
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectyear}
                          label="year"
                          onChange={handleYearChange}
                        >
                          {years.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                {dateofbirtherr && (
                  <Alert
                    style={{ marginTop: "-15px", marginBottom: "10px" }}
                    variant="filled"
                    severity="error"
                  >
                    {dateofbirtherr}
                  </Alert>
                )}
              </div>
              <div className="genderBox">
                <Grid container spacing={4}>
                  <Grid item xs={3}>
                    <div className="genderInput">
                      <label for="male">Male</label>
                      <input
                        onChange={() => handleGender("male")}
                        id="male"
                        name="gender"
                        type="radio"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="genderInput">
                      <label for="female">Female</label>
                      <input
                        onChange={() => handleGender("female")}
                        id="female"
                        name="gender"
                        type="radio"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="genderInput">
                      <label for="custom">Custom</label>
                      <input
                        onChange={() => handleGender("custom")}
                        id="custom"
                        name="gender"
                        type="radio"
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              {gendererr && (
                <Alert
                  style={{ marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {gendererr}
                </Alert>
              )}
              {/* backend error massage */}
              {backenderr && (
                <Alert
                  style={{ marginBottom: "10px" }}
                  variant="filled"
                  severity="error"
                >
                  {backenderr}
                </Alert>
              )}
              {success && (
                <Alert
                  style={{ marginBottom: "10px" }}
                  variant="filled"
                  severity="success"
                >
                  {success}
                </Alert>
              )}
              {/* <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Password Check
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    {lowercase ? (
                      <BsCheckLg style={{ color: "green" }} />
                    ) : (
                      <ImCross style={{ color: "red" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="lowercase" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    {uppercase ? (
                      <BsCheckLg style={{ color: "green" }} />
                    ) : (
                      <ImCross style={{ color: "red" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="uppercase" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    {number ? (
                      <BsCheckLg style={{ color: "green" }} />
                    ) : (
                      <ImCross style={{ color: "red" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Number" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    {symbol ? (
                      <BsCheckLg style={{ color: "green" }} />
                    ) : (
                      <ImCross style={{ color: "red" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Symbol" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    {lenght ? (
                      <BsCheckLg style={{ color: "green" }} />
                    ) : (
                      <ImCross style={{ color: "red" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="minimum 8 cherecter" />
                </ListItemButton>
              </List> */}
              {/* log btn */}
              <MainButton variant="contained" onClick={handleSubmit}>
                SIGN UP
              </MainButton>
              {/* forget password */}
              <Link to="/" className="forget">
                Forgotten password?
              </Link>
              <div style={{ textAlign: "center" }}>
                {/* create new account */}
                <CreateButton variant="contained">
                  <Link to="/login" className="lastBtn">Already have?</Link>
                </CreateButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Registration;
