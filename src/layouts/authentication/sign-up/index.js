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

import React,{ useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import Button from "../../OnboardingForm/components/Button"
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import { Formik, Form } from "formik";
import * as Yup from "yup";
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


const INITIAL_FORM_STATE = {

  name: "",
  email: "",
  password: ""
}


const FORM_VALIDATION = Yup.object().shape({

  name: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Invalid FirstName ")
      .required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
});





function Basic() {
  const [value, setValue] = React.useState('');

  //  const [firstName, setFirstName]=useState("");

const handleChanges = (event) => {
  setValue(event.target.value);
  console.log(event.target.value);
};


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

        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(ee) => {
            console.log(ee);
            console.log(value);
            const res = axios.post("http://localhost:5000/api/createInfos", ee
            );
            console.log(res.data);
          }}
        >
          <Form>
             
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
            <MDInput type="text" name="name" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" name="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" name="password" label="Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
            <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1} >
              <MDButton variant="gradient" color="primary" component={Link}
                  to="/authentication/sign-in" fullWidth>
                <MDTypography
                  variant="button"
                  color="inherit"
                  fontWeight="medium"
                  textGradient
                >
                  Sign Up
                </MDTypography>
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
            
          </MDBox>
        </MDBox>
          </Form>
        </Formik>

      </Card>
    </BasicLayout>
  );
}

export default Basic;
