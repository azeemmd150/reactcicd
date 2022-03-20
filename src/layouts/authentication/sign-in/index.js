/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import axios from 'axios';

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/signin.jpg";

function Basic() {
 
  const navigate =useNavigate();

  const [email,setEmail] =useState('');
  const [password, setPassword]=useState('');



  const handleSubmit =async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    const res =await axios.get("http://3.110.181.159:5000/api/getInfos");
    console.log(res.data);
    const result =res.data.filter((u) => u.email ===email && u.password ===password);
    console.log(result);
    if(result === 'undefined'){
      alert('Invalid Credentials');
    }
    else {
      result.map((u) => {
        if(u.email ===email && u.password ===password){
             navigate('/dashboard');
        }
      });
    }
  }


const callAlert = () => {
  alert('Inavalid credentials');
}

return (
  <BasicLayout image={bgImage}>
    <Card>
      <MDBox
        variant="gradient"
        bgColor="primary"
        borderRadius="lg"
        coloredShadow="info"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Arshaa People Hub
        </MDTypography>

      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput type="email" label="Email" name="email" onChange={(e) => setEmail(e.target.value)} fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="password" label="Password" name="password" onChange={(e) => setPassword(e.target.value)} fullWidth />
          </MDBox>

          {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
  </MDBox>*/}

          <MDBox mt={4} mb={1} >
            <MDButton variant="gradient" color="primary" onClick={handleSubmit} fullWidth>
              <MDTypography
                variant="button"
                color="inherit"
                fontWeight="medium"
                textGradient
              >
                Sign in
              </MDTypography>
            </MDButton>
          </MDBox>

          <MDTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MDTypography>
          </MDTypography>

        </MDBox>
      </MDBox>
    </Card>
  </BasicLayout>
);
}

export default Basic;
