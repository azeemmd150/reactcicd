
import React, { useState } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const leaveDetails = [
  {
    LeaveType: "Sick Leave",
    TotalLeaves: "7",
    LeavesTaken: "5",
    RemainingLeaves: "2",
  },
  {
    LeaveType: "Vacation Leave",
    TotalLeaves: "6",
    LeavesTaken: "0",
    RemainingLeaves: "6",
  },
  {
    LeaveType: "Casual Leave",
    TotalLeaves: "7",
    LeavesTaken: "2",
    RemainingLeaves: "5",
  },
  {
    LeaveType: "Privilege Leave",
    TotalLeaves: "5",
    LeavesTaken: "0",
    RemainingLeaves: "5",
  },

];

export default function LeaveModal() {
  const [data, setData] = useState(leaveDetails);
  const columns = [
    {
      title: "LeaveType",
      field: "LeaveType",
      editable: false,
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "TotalLeaves",
      field: "TotalLeaves",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "LeavesTaken",
      field: "LeavesTaken",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "RemainingLeaves",
      field: "RemainingLeaves",
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
            title=""
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


