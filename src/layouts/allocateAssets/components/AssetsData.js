import React, { useState, useEffect } from 'react';
import axios from "axios";
import MaterialTable from "material-table";
import { Grid, Button, Stack } from "@mui/material";
import {Urls} from 'Urls';

function AssetsData() {

//Get Approved Data to Allocate assets Table
const [data, setData] = useState([]);
useEffect(() => {
  axios.get(Urls.ApprovedEmployeeGetUrl).then((response) => {
    console.log(response);
    setData(response.data);  
  });
}, []);



  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
            title="Waiting for Asset Approval"
            columns={[
              
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
            actions={[
              {
                onClick: (event1, rowData) => {
                  alert("You approved " + rowData.fullName);

                  axios
                    .post(Urls.AssestsApprovePostUrl, rowData)
                    .then((res) => {
                      console.log(rowData);
                      console.log(res.rowData);
                    });
                },
                icon: "save",
                tooltip: "Approve",
              }
             ]}

            options={{
              headerStyle: {
                backgroundColor: "#ffe0b2",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                backgroundColor: '#EEE',fontSize:14
              },
              actionsColumnIndex: -1
            }}
          />
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}

export default AssetsData;