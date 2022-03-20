
import React, { useState } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    EmployeeName: "Alex Cos",
    Working: "20",
    Worked: "20",
    Vacation: "0",
    WFH:"0",
    SickLeave:"0",
    UnPaidLeave:"0"
  },
  {
    EmployeeName: "Bogdon",
    Working: "20",
    Worked: "19",
    Vacation: "0",
    WFH:"0",
    SickLeave:"1",
    UnPaidLeave:"0"
  },
  {
    EmployeeName: "Bogdon",
    Working: "20",
    Worked: "18",
    Vacation: "0",
    WFH:"0",
    SickLeave:"2",
    UnPaidLeave:"0"
  },
  {
    EmployeeName: "Bogdon",
    Working: "20",
    Worked: "19",
    Vacation: "0",
    WFH:"0",
    SickLeave:"1",
    UnPaidLeave:"0"
  },
  {
    EmployeeName: "Bogdon",
    Working: "20",
    Worked: "19",
    Vacation: "0",
    WFH:"0",
    SickLeave:"1",
    UnPaidLeave:"0"
  },
  
];

function LeaveReport() {
  const [data, setData] = useState(empList);
  const columns = [
    {
      title: "EmployeeName",
      field: "EmployeeName",
      editable: false,
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "Working",
      field: "Working",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "Worked",
      field: "Worked",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "Vacation",
      field: "Vacation",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "WFH",
      field: "WFH",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "SickLeave",
      field: "SickLeave",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "UnPaidLeave",
      field: "UnPaidLeave",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    

  ];

  return (
    <div className="App">
      <Grid container>
        <Grid xs={14}>
          <MaterialTable
            title="Employee Leave Report"
            data={data}
            sx={{ color: "white" }}
            columns={columns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  const updatedRows = [
                    ...data,
                    { id: Math.floor(Math.random() * 100), ...newRow },
                  ];
                  setTimeout(() => {
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
              // onRowDelete: (selectedRow) =>
              //   new Promise((resolve, reject) => {
              //     const index = selectedRow.tableData.id;
              //     const updatedRows = [...data];
              //     updatedRows.splice(index, 1);
              //     setTimeout(() => {
              //       setData(updatedRows);
              //       resolve();
              //     }, 2000);
              //   }),
              // onRowUpdate: (updatedRow, oldRow) =>
              //   new Promise((resolve, reject) => {
              //     const index = oldRow.tableData.id;
              //     const updatedRows = [...data];
              //     updatedRows[index] = updatedRow;
              //     setTimeout(() => {
              //       setData(updatedRows);
              //       resolve();
              //     }, 2000);
              //   }),
            }}
          
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
              headerStyle: {
                backgroundColor: "#ffe0b2",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              },
              rowStyle: {
                fontSize: 16,
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default LeaveReport;
