
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Stack, Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import axios from "axios";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/getEmps");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {data.map(emp=>{return(<div key=''></div>)})}
      <div>{JSON.stringify(data)}</div>
      <TextField

        label="OBID" variant="standard" focused
        required
        value={data.companyName}

        onChange={(e) => setLastName(e.target.value)}
      />

      <TextField
        label="Full Name" variant="standard" focused
        required
        value={data.forced}

        onChange={(e) => setFirstName(e.target.value)}
      />

      <TextField
        label="Personal Email" focused
        type="email"
        required
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div>
        <Stack direction="row" spacing={2}>
          <MDButton variant="gradient" color="warning">
            <MDTypography variant="button" sx={{ color: '#ffffff' }}
              fontWeight="medium"
              onClick={handleClose}>
              Cancel
            </MDTypography>
          </MDButton>
          <MDButton variant="gradient" color="warning">
            <MDTypography type="submit" variant="button"
              sx={{ color: '#ffffff' }}
              fontWeight="medium"
            >
              Signup
            </MDTypography>
          </MDButton>
        </Stack>
      </div>
    </form>


  );
};

export default Form;
