//Onboarding form
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";
import moment from "moment";
import Divider from "@mui/material/Divider";
import { useState } from 'react';
import { toast } from 'react-toastify';
import Textfield from "./TextField";
import Select from "./Select";
import Checkbox from "./CheckBox";
import DateTimePicker from "./DateTimePicker";
import Button from "./Button"
import countries from "./countries.json";
import maritalStatus from "./maritalStatus.json";
import Gender from './Gender.json';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import Poc from './Poc';
import { Urls } from "Urls";



const INITIAL_FORM_STATE = {

    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    secondaryPhone: "",
    dateOfBirth: "",
    bloodGroup: "",
    JoiningDate: "",
    gender: "",
    maritalStatus: "",
    Houseno: "",
    pvillage: "",
    pcity: "",
    pstate: "",
    pcountry: "",
    ppinCode: "",

    Chouseno: "",
    Carea: "",
    ccity: "",
    cstate: "",
    ccountry: "",
    cpinCode: "",


    pboardOfUniversity: "",
    pinstituteName: "",
    pinstituteCity: "",
    pcourseName: "",
    pjoiningYear: "",
    ppassedYear: "",
    pgrade: "",


    gboardOfUniversity: "",
    ginstituteName: "",
    ginstituteCity: "",
    gcourseName: "",
    gjoiningYear: "",
    gpassedYear: "",
    ggrade: "",

    iboardOfUniversity: "",
    iinstituteName: "",
    iinstituteCity: "",
    icourseName: "",
    ijoiningYear: "",
    ipassedYear: "",
    igrade: "",


    sboardOfUniversity: "",
    sinstituteName: "",
    sinstituteCity: "",
    scourseName: "",
    sjoiningYear: "",
    spassedYear: "",
    sgrade: "",


    termsOfService: false,
};


const FORM_VALIDATION = Yup.object().shape({

    firstName: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid FirstName ")
        .required("Required"),

    middleName: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid Middle ")
        .required("Required"),
    pboardOfUniversity: Yup.string().required("Required"),

    lastName: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid LastName ")
        .required("Required"),

    email: Yup.string().email("Invalid email.").required("Required"),
    phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, {
            message: "Please enter Valid Mobile Number",
            excludeEmptyString: false,
        })
        .required("Required"),
    secondaryPhone: Yup.string()
        .matches(/^[6-9]\d{9}$/, {
            message: "Please enter Valid Mobile Number",
            excludeEmptyString: false,
        })
        .required("Required"),


    dateOfBirth: Yup.string()
        .required("DOB is Required")
        .test(
            "DOB",
            "Please choose a valid date of birth",
            (date) => moment().diff(moment(date), "years") >= 12
        ),

    bloodGroup: Yup.string()
        .matches(/^(A|B|AB|O)[+-]$/, {
            message: "Please enter valid Blood Group.",
            excludeEmptyString: false,
        })
        .required("Required"),
    JoiningDate: Yup.string().required("Required"),
    maritalStatus: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),



    Houseno: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required("Required"),

    pvillage: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required("Required"),
    pcity: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required("Required"),

    pstate: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid State ")
        .required("Required"),
    pcountry: Yup.string().required("Required"),

    ppinCode: Yup.string()
        .matches(/^[1-6]\d{5}$/, {
            message: "Please enter Valid Pincode",
            excludeEmptyString: false,
        })
        .required("Required"),

    Chouseno: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required("Required"),

    Carea: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required("Required"),
    ccity: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid City Name")
        .required("Required"),

    cstate: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Invalid State ")
        .required("Required"),
    ccountry: Yup.string().required("Required"),
    cpinCode: Yup.string()
        .matches(/^[1-6]\d{5}$/, {
            message: "Please enter Valid Pincode",
            excludeEmptyString: false,
        })
        .required("Required"),

    gboardOfUniversity: Yup.string().required("Required"),
    ginstituteName: Yup.string().required("Required"),
    ginstituteCity: Yup.mixed().required("Required"),
    gcourseName: Yup.mixed().required("Required"),
    gjoiningYear: Yup.date().required("Required"),
    gpassedYear: Yup.date().required("Required"),
    ggrade: Yup.date().required("Required"),

    iboardOfUniversity: Yup.string().required("Required"),
    iinstituteName: Yup.string().required("Required"),
    iinstituteCity: Yup.mixed().required("Required"),
    icourseName: Yup.mixed().required("Required"),
    ijoiningYear: Yup.date().required("Required"),
    ipassedYear: Yup.date().required("Required"),
    igrade: Yup.date().required("Required"),

    sboardOfUniversity: Yup.string().required("Required"),
    sinstituteName: Yup.string().required("Required"),
    sinstituteCity: Yup.mixed().required("Required"),
    scourseName: Yup.mixed().required("Required"),
    sjoiningYear: Yup.date().required("Required"),
    spassedYear: Yup.date().required("Required"),
    sgrade: Yup.date().required("Required"),



    termsOfService: Yup.boolean()
        .oneOf([true], "The terms and conditions must be accepted.")
        .required("The terms and conditions must be accepted."),
});


const FresherOnboardingForm = () => {
    const [checke, setChecked] = React.useState(false);


    const handleChange = () => {
        setChecked(!checke);
    };
    const [value, setValue] = React.useState('');
    //  const [firstName, setFirstName]=useState("");

    const handleChanges = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };


    //File Uploading
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const pocSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }
        axios.post('http://3.110.181.159:5000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                console.log(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
    };


    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <div>
                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={(ee) => {
                                console.log(ee);
                                console.log(value);
                                const res = axios.post(Urls.FresherPostUrl, ee
                                );
                                console.log(res.data);
                            }}
                        >
                            <Form form method="post" action="#" id="#"  onSubmit={pocSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="center">Employee onboarding form</h4>

                                            <br />
                                        </Typography>

                                    </Grid>


                                    <Grid item xs={6}>
                                        <Textfield name="firstName" label="First Name" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="middleName" label="Middle Name" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="lastName" label="Last Name" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="email" label="Email" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="phone" label="Contact number" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="secondaryPhone" label="Secondary Phone number" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            maxDate={new Date()}
                                            name="dateOfBirth"
                                            label="Date of Birth"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="bloodGroup" label="Blood Group" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="JoiningDate" label="Date of joining" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>Marital status</h6>
                                        <Select name="maritalStatus" options={maritalStatus} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>Gender</h6>
                                        <Select name="gender" options={Gender} />
                                    </Grid>



                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="center">Permanent Address</h4>
                                            <br />
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Houseno"
                                            label="House Number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="pvillage"
                                            label="Area"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="pcity" label="City" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="pstate" label="State" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <h6>Country</h6>
                                        <Select name="pcountry" options={countries} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="ppinCode" label="Pincode" />
                                    </Grid>
                                    <Divider variant="middle" />
                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="center">Current Address</h4>
                                            <br />
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="Chouseno" label="House Number" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="Carea" label="Area" />
                                    </Grid>


                                    <Grid item xs={6}>
                                        <Textfield name="ccity" label="Current City" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="cstate" label="Current State" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <h6>Country</h6>
                                        <Select name="ccountry" options={countries} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="cpinCode" label="Pincode" />
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                    <Divider variant="middle" />

                                    <Accordion onChange={handleChange}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Post Graduation</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>

                                                <Grid item xs={6}>
                                                    <Textfield defaultChecked name="pboardOfUniversity" label="University Name" />
                                                </Grid>


                                                <Grid item xs={6}>
                                                    <Textfield
                                                        defaultChecked
                                                        name="pinstituteName"
                                                        label="Institute Name"
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Textfield
                                                        defaultChecked

                                                        name="pinstituteCity"
                                                        label="City"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Textfield
                                                        defaultChecked

                                                        name="pcourseName"
                                                        label="Branch"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Textfield
                                                        defaultChecked

                                                        name="pjoiningYear"
                                                        label="Year of Joining"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Textfield
                                                        defaultChecked

                                                        name="ppassedYear"
                                                        label="Year of Passed"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Textfield
                                                        defaultChecked

                                                        name="pgrade"
                                                        label="Percentage/CGPA"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Divider variant="middle" />
                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="left">Graduation</h4>
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="gboardOfUniversity" label="University Name" />
                                    </Grid>


                                    <Grid item xs={6}>
                                        <Textfield
                                            name="ginstituteName"
                                            label="Institute Name"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="ginstituteCity"
                                            label="City"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="gcourseName"
                                            label="Branch"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="gjoiningYear"
                                            label="Year of Joining"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="gpassedYear"
                                            label="Year of Passed"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="ggrade"
                                            label="Percentage/Grade"
                                        />
                                    </Grid>

                                    <Divider variant="middle" />
                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="left">12th</h4>
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="iboardOfUniversity" label="Board Of Intermediate" />
                                    </Grid>


                                    <Grid item xs={6}>
                                        <Textfield
                                            name="iinstituteName"
                                            label="Institute Name"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="iinstituteCity"
                                            label="City"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="icourseName"
                                            label="Branch"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="ijoiningYear"
                                            label="Year of Joining"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="ipassedYear"
                                            label="Year of Passed"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="igrade"
                                            label="Percentage/Grade"
                                        />
                                    </Grid>

                                    <Divider variant="middle" />
                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="left">10th</h4>
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield name="sboardOfUniversity" label="Board Of SSC" />
                                    </Grid>


                                    <Grid item xs={6}>
                                        <Textfield
                                            name="sinstituteName"
                                            label="Institute Name"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="sinstituteCity"
                                            label="City"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="scourseName"
                                            label="Branch"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="sjoiningYear"
                                            label="Year of Joining"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="spassedYear"
                                            label="Year of Passed"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="sgrade"
                                            label="Percentage/Grade"
                                        />
                                    </Grid>

                                    <Divider variant="middle" />


                                    <Divider variant="middle" />
                                    <Grid item xs={12}>
                                        <Typography>
                                            <h4 align="center">Upload Documents</h4>
                                            <br />
                                        </Typography>
                                        <input type="file" name="file" onChange={onInputChange}
                                            className="form-control" />
                                        <input type="submit" value="upload" />
                                    </Grid>

                                    <Divider variant="middle" />



                                    <Grid item xs={12}>
                                        <Checkbox
                                            name="termsOfService"
                                            legend="Terms of service"
                                            label="I agree"
                                        />
                                    </Grid>
                                    <Divider variant="middle" />
                                    <Grid item xs={4} justifyContent="center">
                                        {/* <MDButton variant="outlined" color="info" size="large" onClick>
                      Submit
                    </MDButton> */}
                                        <Button>Submit</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </div>
                </Container>
            </Grid>
        </Grid>
    );
};

export default FresherOnboardingForm;