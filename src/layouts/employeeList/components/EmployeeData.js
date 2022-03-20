import React, { useState, useEffect } from 'react';
import axios from "axios";

import {Urls} from 'Urls';
import MaterialTable from "material-table";
import { Grid } from "@mui/material";



function EmployeeData() {

//Get Assets Approved Data
const [list, setList] = useState([]);
useEffect(() => {
  axios.get(Urls.AssestsApproveGetUrl).then((response) => {
    console.log(response);
    setList(response.data);  
  });
}, []);
  
  const [columns, setColumns] = useState([
    { title: 'Emp ID', field: 'empid' },
    { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' }, 
    { title: 'Personal Email', field: 'email' },
    { title: 'Phone No.', field: 'phone' },
    { title: 'Joining Date', field: 'JoiningDate' },
  ]);

  
  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
            title="Employee Master"
            columns={columns}
            data={list}
            options={{
              headerStyle: {
                backgroundColor: "#ffe0b2",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                backgroundColor: '#EEE', fontSize: 14
              },
              actionsColumnIndex: -1
            }}

          />
        </Grid>
      </Grid>

    </div>
  );
}

export default EmployeeData;