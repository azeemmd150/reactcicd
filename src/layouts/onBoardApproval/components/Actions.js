import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid, Button, Stack } from "@mui/material";
import MDBox from "components/MDBox";

function Actions() {

  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
            title="Waiting for Onboarding"
            columns={[
              { title: 'OB ID', field: 'obid',width:"7%"},
              { title: 'Full Name', field: 'name'},
              { title: 'Personal Email', field: 'email', type: 'email' },
              { title: 'Phone No.', field: 'phone', type:'numeric' },
              { title: 'Joining Date', field: 'jdate', type: 'numeric' },

            ]}
            data={[
              {obid: 'OB101', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022' },
              {obid: 'OB102', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022' },
              {obid: 'OB103', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022' },
              {obid: 'OB104', name: 'Supraja Aavula', email: 'supraja.aavula@gmail.com', phone: '7864567890', jdate:'12-04-2022' },
              {obid: 'OB105', name: 'Ram Bindhu', email: 'ram.bindhu@gmail.com', phone: '6234567890', jdate:'12-04-2022' },
              {obid: 'OB106', name: 'Somnath Chakravarthi', email: 'somnath.chakravarthi@gmail.com', phone: '9234567890', jdate:'12-04-2022' },
              {obid: 'OB107', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022' },
              {obid: 'OB108', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022' },
              {obid: 'OB109', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022' },
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
                    onClick={(event) => props.action.onClick(event, props.data)}
                   
                    variant="contained"
                    style={{ textTransform: 'none', color:"#FFFFFF", background:"#228B22", borderRadius:"10%" }}
                    size="small"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={(event1) => props.action.onClick(event1, props.data)}
       
                    variant="contained"
                    style={{ textTransform: 'none', color:"#FFFFFF", background:"#FF3333", borderRadius:"10%" }}
                    size="small"
                  >
                    Reject
                  </Button>
                </Stack>
              ),
            }}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
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
      <Grid container>
        <Grid xs={12}>
          <MaterialTable
            title="Approved Onboards"
            columns={[
              { title: 'OB ID', field: 'obid', width:"7%"},
              { title: 'Full Name', field: 'name' },
              { title: 'Email', field: 'email', type: 'email' },
              { title: 'Phone No.', field: 'phone', type:'numeric' },
              { title: 'Joining Date', field: 'jdate', type: 'numeric' },

            ]}
            data={[
              {obid: 'OB101', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022' },
              {obid: 'OB102', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022' },
              {obid: 'OB103', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022' },
              {obid: 'OB104', name: 'Supraja Aavula', email: 'supraja.aavula@gmail.com', phone: '7864567890', jdate:'12-04-2022' },
              {obid: 'OB105', name: 'Ram Bindhu', email: 'ram.bindhu@gmail.com', phone: '6234567890', jdate:'12-04-2022' },
              {obid: 'OB106', name: 'Somnath Chakravarthi', email: 'somnath.chakravarthi@gmail.com', phone: '9234567890', jdate:'12-04-2022' },
            ]}
           
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              rowStyle: {
                backgroundColor: '#EEE',fontSize:14
              },
              actionsColumnIndex: -1
            }}
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
          />
        </Grid>
      </Grid>
      <br/>
      <Grid container>
        <Grid xs={12}>
          <MaterialTable
            title="Discarded Onboards"
            columns={[
              { title: 'OB ID', field: 'obid', width:"7%"},
              { title: 'Full Name', field: 'name' },
              { title: 'Email', field: 'email', type: 'email' },
              { title: 'Phone No.', field: 'phone', type:'numeric' },
              { title: 'Joining Date', field: 'jdate', type: 'numeric' },

            ]}
            data={[
              {obid: 'OB107', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022' },
              {obid: 'OB108', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022' },
              {obid: 'OB109', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022' },
            ]}

            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
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