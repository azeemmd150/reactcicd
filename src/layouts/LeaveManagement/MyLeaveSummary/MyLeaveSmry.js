import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid, Button, Stack } from "@mui/material";
import MDBox from "components/MDBox";

function MyLeaveSmry() {
    

  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Full Name', field: 'name' },
    { title: 'Leave Type', field: 'type', type: 'type' },
    { title: 'From(Date)', field: 'date', type: 'date' },
    { title: 'To(Date)', field: 'date', type: 'date' },
    { title: 'Reason', field: 'data', type: 'text',width: "50%" },
    { title: 'Status', field: 'text' },
   

  ]);

  const [data, setData] = useState([
    {  name: 'Sumalatha Chinthala', type: 'Sick Leave', date: '01-01-2022', date: '02-01-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Kumara Swamy Kummara', type: 'Casual Leave', date: '01-01-2022', date: '03-01-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Mallesh Piduguralla', type: 'Sick Leave', date: '09-01-2022', date: '12-01-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Supraja Aavula', type: 'Marriage Leave', date: '01-02-2-22', date: '03-02-2022', text: 'Reject', rm: 'Revanth Kumar' },
    {  name: 'Ram Bindhu', type: 'Bereavement Leave', date: '09-02-2022', date: '11-02-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Somnath Chakravarthi', type: 'LOP Leave', date: '11-03-2022', date: '12-03-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Sumalatha Chinthala', type: 'Comp-Off Leave', date: '15-02-2022', date: '17-02-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Kumara Swamy Kummara', type: 'Sick Leave', date: '12-03-2022', date: '13-03-2022', text: 'Approved', rm: 'Revanth Kumar' },
    {  name: 'Mallesh Piduguralla', type: 'Sick Leave', date: '08-04-2022', date: '11-04-2022', text: 'Reject', rm: 'Revanth Kumar' },
  ]);
  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
           title="My Leave Summary"
            columns={columns}
            data={data}
            options={{
              headerStyle: {
                backgroundColor: '#ffe0b2',

                color: 'black',

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

export default MyLeaveSmry;