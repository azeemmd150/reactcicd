import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid, Stack } from "@mui/material";
import MDBox from "components/MDBox";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import ModalDialog from "./ModalDialog";
import axios from "axios";
import {Urls} from 'Urls';

function DocumentValidationAPIs() {
  //Get Approved Data
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(Urls.ApprovedEmployeeGetUrl).then((response) => {
      console.log(response);
      setData(response.data);  
    });
  }, []);

  //get Rejected Data
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(Urls.RejectedEmployeeGetUrl).then((response) => {
      console.log(response);
      setList(response.data);  
    });
  }, []);

  //get all details from obform
  const [values, setValues] = useState([]);
  useEffect(() => {
    axios.get(Urls.TotalEmployeeGetUrl).then((response) => {
      console.log(response);
      setValues(response.data);
    });
  }, []);

  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Grid>
        <Grid xs={12}>
          <MaterialTable
            title="Waiting for Document Approval"
            columns={[
              // { title: "OB ID", field: "obid", width: "7%" },
              { title: "First Name", field: "firstName" },
              { title: "Last Name", field: "lastName" },
              {
                title: "Personal Email",
                field: "email",
                type: "email",
              },
              { title: "Phone No.", field: "phone", type: "numeric" },
              { title: "Joining Date", field: "JoiningDate", type: "date" },
            ]}
            data={values}
            actions={[
              {
                icon: CheckCircleIcon,
                tooltip: "Approve",
                onClick: (event1, rowData) => {
                  alert("You approved " + rowData.firstName);

                  axios
                    .post(Urls.ApprovedEmployeePostUrl, rowData)
                    .then((res) => {
                      console.log(rowData);
                      console.log(res.rowData);
                    });
                },
                
              },
              {
                onClick: (event2, rowData) => {alert("You Rejected " + rowData.firstName);
                // axios.delete('http://localhost:5000/api/approvedEmp/${obid}', rowData)
                //   .then((res) => {
                //     console.log(rowData);
                //     console.log(res.rowData);
                //   });
                  axios.post(Urls.RejectedEmployeePostUrl, rowData)
                  .then((res) => {
                    console.log(rowData);
                    console.log(res.rowData);
                  });

                },
                icon: CancelIcon,
                tooltip: "Reject",
              },
              {
                icon: ReceiptLongIcon,
                tooltip: 'View/Edit',
                isFreeAction: false,
                onClick: () => {
                  setOpen(true);
                }
              },
            ]}
            
            options={{
              headerStyle: {
                backgroundColor: "#ffe0b2",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                backgroundColor: "#EEE",
                fontSize: 14,
              },
              actionsColumnIndex: -1,
            }}
          />

          <ModalDialog open={open} handleClose={handleClose} />
        </Grid>
      </Grid>

      <br />
      <Grid container>
        <Grid item xs={12}>
          <MaterialTable
            title="Done with document verification"
            columns={[
              //{ title: "OB ID", field: "obid", width: "7%" },
              { title: "First Name", field: "firstName" },
              { title: "Last Name", field: "lastName" },
              {
                title: "Personal Email",
                field: "email",
                type: "email",
              },
              { title: "Phone No.", field: "phone", type: "numeric" },
              { title: "Joining Date", field: "JoiningDate", type: "date" },
            ]}
            data={data}
            options={{
              headerStyle: {
                backgroundColor: "#ffe0b2",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                backgroundColor: "#EEE",
                fontSize: 14,
              },
              actionsColumnIndex: -1,
            }}
            
          />
        </Grid>
      </Grid>
      <br />
     
      <Grid container>
        <Grid item xs={12}>
          <MaterialTable
            title="Discarded Onboards"
            columns={[
              //{ title: "OB ID", field: "obid", width: "7%" },
              { title: "First Name", field: "firstName" },
              { title: "Last Name", field: "lastName" },
              {
                title: "Personal Email",
                field: "email",
                type: "email",
              },
              { title: "Phone No.", field: "phone", type: "numeric" },
              { title: "Joining Date", field: "JoiningDate", type: "date" },
            ]}
            data={list}
            options={{
              headerStyle: {
                backgroundColor: "#ffe0b2",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                backgroundColor: "#EEE",
                fontSize: 14,
              },
              actionsColumnIndex: -1,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DocumentValidationAPIs;
