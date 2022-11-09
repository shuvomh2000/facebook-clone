import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Sidenavbar from "../../components/sideNavbar/Sidenavbar";
import Newsfeed from "../../components/newsfeed/Newsfeed";

const Home = () => {
  let navigate = useNavigate();
  let user = useSelector((state) => state);

  // useEffect(()=>{
  //   if(!user.user.userInfo){
  //     navigate('/login')
  //   }
  // },[])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidenavbar/>
        </Grid>
        <Grid item xs={8}>
          <Newsfeed/>
        </Grid>
        <Grid item xs={1}>
          <h2>xs=4</h2>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
