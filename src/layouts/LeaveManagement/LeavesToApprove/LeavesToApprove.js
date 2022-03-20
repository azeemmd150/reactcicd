import React, { useState } from "react";
import MaterialTable from "material-table";
import { Grid, Button, Stack } from "@mui/material";
import MDBox from "components/MDBox";
import ModalUnstyledDemo from './Submit';

function Actions() {
  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
            title="Waiting for Onboarding"
            columns={[
              { title: 'OB ID', field: 'obid',width:"7%"},
              { title: 'EMP Name', field: 'name'},
              { title: 'Leave Type', field: 'leaveType', type: 'text' },
              { title: 'Joining Date', field: 'jdate', type: 'numeric' },

            ]}
            data={[
              {obid: 'OB101', name: 'Sumalatha Chinthala', leaveType: 'SickLeave',  jdate:'12-04-2022' },
              {obid: 'OB102', name: 'Kumara Swamy Kummara',leaveType: 'Vacction',  jdate:'13-04-2022' },
              {obid: 'OB103', name: 'Mallesh Piduguralla', leaveType: 'Trip', jdate:'12-04-2022' },
              {obid: 'OB104', name: 'Supraja Aavula', leaveType: 'Function',  jdate:'12-04-2022' },
              {obid: 'OB105', name: 'Ram Bindhu', leaveType: 'SickLeave', jdate:'12-04-2022' },
              {obid: 'OB106', name: 'Somnath Chakravarthi', leaveType: 'Vacction', jdate:'12-04-2022' },
              {obid: 'OB107', name: 'Sumalatha Chinthala',leaveType: 'Trip', jdate:'12-04-2022' },
              {obid: 'OB108', name: 'Kumara Swamy Kummara', leaveType: 'Function', jdate:'13-04-2022' },
              {obid: 'OB109', name: 'Mallesh Piduguralla', leaveType: 'SickLeave', jdate:'12-04-2022' },
            ]}
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You approved " + rowData.name),
              }
             
            ]}
            detailPanel={[
              {
                tooltip: 'Show Data',
                render: rowData => {
                  return (
                    <MDBox py={2} pr={2} pl={20} sx={{ width: '100%' }}
                      style={{
                        fontSize: 14,
                        textAlign: 'left',
                       
                        color: 'black',
                        backgroundColor: '#ffffff',
                      }}
                    > <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                         <Grid item xs={6}>Full Name </Grid>
                         <Grid item xs={6}>{rowData.name}</Grid>
                         
                        <Grid item xs={6}>OB ID</Grid>
                        <Grid item xs={6}>{rowData.obid}</Grid>
                        <Grid item xs={6}>Email </Grid>
                        <Grid item xs={6}>{rowData.email}</Grid>
                        <Grid item xs={6}>Phone No. </Grid>
                        <Grid item xs={6}>{rowData.phone}</Grid>
                        <Grid item xs={6}>Joining Date </Grid>
                        <Grid item xs={6}>{rowData.jdate}</Grid>
                      </Grid>
                    </MDBox>
                  )
                },

              }
            ]}
            components={{
              Action: props => (
                <Stack spacing={1} direction="row">
                  <Button
                    // onClick={(event) => props.action.onClick(event, props.data)}
                    
                    variant="contained"
                    style={{ textTransform: 'none', color:"#FFFFFF", background:"#228B22", borderRadius:"10%" }}
                    size="small"
                  >
                    <ModalUnstyledDemo />
                  </Button>
                </Stack>
              ),
            }}
            options={{
              headerStyle: {
                backgroundColor: '#ffe0b2',

                color: 'black',

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
    </div>
  );
}

export default Actions;