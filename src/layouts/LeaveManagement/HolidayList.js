/*import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material/node_modules/@mui/system';

function createData(sno, festivals, date, day) {
  return { sno, festivals, date, day};
}


const rows = [
  createData('01','NEW YEAR DAY', '01 January 2022', 'SATURDAY'),
  createData('02', 'MAKAR SANKRANTI/PONGAL','14 January 2022', 'FRIDAY'),
  createData('03','REPUBLIC DAY','26 January 2022','WEDNESDAY'),
  createData('04','MAHA SHIVRATRI','01 March 2022','TUESDAY'),
  createData('05','HOLI','18 March 2022','FRIDAY'),
  createData('06','UGADI/GUDI PADWA','02 April 2022','SATURDAY'),
  createData('07','GOOD FRIDAY','15 April 2022','FRIDAY'),
  createData('08','EID UL FITR(RAMZAN)','03 May 2022','TUESDAY'),
  createData('09','EIDUL AZHA (BAKRID)','10 July 2022','SUNDAY'),
  createData('10','INDEPENDENCE DAY','15 August 2022','MONDAY'),
  createData('11','VINAYAKA CHAVITHI','31 August 2022','WEDNESDAY'),
  createData('12','MAHATMA GANDHI JAYANTHI','02 October 2022','SUNDAY'),
  createData('13','VIJAYA DASAMI','05 October 2022','WEDNESDAY'),
  createData('14','DEEPAVALI','24 October 2022','MONDAY'),
  createData('15','CHRISTMAS','25 December 2022','SUNDAY'),
];


export default function BasicTable() {
  return (
    <Box m={3} p={2}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <h2> arshaa technologies Holiday List - 2022</h2>
          <TableRow>
            <TableCell>S.no.</TableCell>
            <TableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OCCASION/FESTIVAL</TableCell>
            <TableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE&nbsp;</TableCell>
            <TableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DAY&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sno}
              </TableCell>
              <TableCell align="left">{row.festivals}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.day}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}*/

//comments on holidays lists

import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid } from "@mui/material";

const empList = [
  {
    id: 1,
    sno: "01",
    title: "NEW YEAR DAY",
    date: "01 January 2022",
    day: "SATURDAY"
  },
  {
    id: 2,
    sno: "02",
    title: "MAKAR SANKRANTI/PONGAL",
    date: "14January2022",
    day: "FRIDAY"
  },
  {
    id: 3,
    sno: "03",
    title: "REPUBLIC DAY",
    date: "26January2022",
    day: "WEDNESDAY"
  },
  {
    id: 4,
    sno: "04",
    title: "MAHA SHIVRATRI",
    date: "01March2022",
    day: "TUESDAY"
  },
  {
    id: 5,
    sno: "05",
    title: "HOLI",
    date: "18March2022",
    day: "FRIDAY"
  },
  {
    id: 6,
    sno: "06",
    title: "UGADI/GUDI PADWA",
    date: "02April2022",
    day: "SATURDAY"
  },
  {
    id: 7,
    sno: "07",
    title: "GOOD FRIDAY",
    date: "15April2022",
    day: "FRIDAY"
  },
  {
    id: 8,
    sno: "08",
    title: "EID UL FITR(RAMZAN)",
    date: "03May2022",
    day: "TUESDAY"
  },
  {
    id: 9,
    sno: "09",
    title: "EIDUL AZHA (BAKRID)",
    date: "10July2022",
    day: "SUNDAY"
  },
  {
    id: 10,
    sno: "10",
    title: "INDEPENDENCE DAY",
    date: "15August2022",
    day: "MONDAY"
  },
  {
    id: 11,
    sno: "11",
    title: "VINAYAKA CHAVITHI",
    date: "31August2022",
    day: "WEDNESDAY"
  },
  {
    id: 12,
    sno: "12",
    title: "MAHATMA GANDHI JAYANTHI",
    date: "02October2022",
    day: "SUNDAY"
  },
  {
    id: 13,
    sno: "13",
    title: "VIJAYA DASAMI",
    date: "05October2022",
    day: "WEDNESDAY"
  },
  {
    id: 14,
    sno: "14",
    title: "DEEPAVALI",
    date: "24October2022",
    day: "MONDAY"
  },
  {
    id: 15,
    sno: "15",
    title: "CHRISTMAS",
    date: "25December2022",
    day: "SUNDAY"
  },
];

function Actions() {
  const [data, setData] = useState(empList);
  const columns = [
    {
      title: "S.no.",
      field: "sno",
      editable: false,
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "Occassion/Festival",
      field: "title",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "Date",
      field: "date",
      headerStyle: {
        backgroundColor: "#ffe0b2",
        color: "black",
      },
    },
    {
      title: "Day",
      field: "day",
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
            title="arshaa technologies Holiday List-2022"
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
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const index = selectedRow.tableData.id;
                  const updatedRows = [...data];
                  updatedRows.splice(index, 1);
                  setTimeout(() => {
                    setData(updatedRows);
                    resolve();
                  }, 2000);
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  const index = oldRow.tableData.id;
                  const updatedRows = [...data];
                  updatedRows[index] = updatedRow;
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

export default Actions;
