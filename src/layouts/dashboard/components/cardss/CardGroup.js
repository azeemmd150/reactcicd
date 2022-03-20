import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MDBox from 'components/MDBox';

import { IconButton } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import {Urls} from 'Urls';
import styles from './utils/styles.css';
import MDTypography from 'components/MDTypography';

export default function CardGroup() {

  const [count, setCount] = useState([]);
  useEffect(() => {
    axios.get('http://3.110.181.159:5000/api/getEmps')
      .then(res => {
        console.log(res.data.length)
        setCount(res.data.length)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const [assetsApprovecount, setAssetsApproveCount] = useState([]);

useEffect(() => {

  axios.get(Urls.AssestsApproveGetUrl)
    .then(res => {
      console.log(res.data.length)
      setAssetsApproveCount(res.data.length)
    })
    .catch(err => {
      console.log(err)
    })
}, []);

//set count to Discard Employees
const [discardcount, setDiscardCount] = useState([]);
  useEffect(() => {
    axios.get('http://3.110.181.159:5000/api/getrejectedEmp')
      .then(res => {
        console.log(res.data.length)
        setDiscardCount(res.data.length)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);


  const data = [
    {

      id: 1,
      numbers: count,
      //http://localhost:5000/api/getEmps
      title: 'Total Employees',
      color: '#50C878',
      info: 'More Info',
    },
    {
      id: 2,
      numbers: assetsApprovecount,
      title: 'Assests tagged',
      //http://localhost:5000/api/assetsApprovedEmp
      color: '#A569BD',
      info: 'More Info',
    },
    {
      id: 3,
      numbers: discardcount,
      title: 'Discarded Onboards',
      //http://localhost:5000/api/getrejectedEmp
      color: '#EC7063',
      info: 'More Info',
    },
    {
      id: 4,
      numbers: 6,
      title: 'Pending Onboards',
      color: '#F5B041',
      info: 'More Info',
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <MDBox >
          {data.map((d, i) => {
            return (
              <div key={i} className="box" style={{ backgroundColor: d.color, color: '#ffffff', border: 'none' }}>
                <MDTypography sx={{ color: '#ffffff' }} variant="h4">{d.numbers}</MDTypography>
                <MDTypography align="left" variant="h6" sx={{ fontSize: 20, color: '#ffffff' }}>{d.title}</MDTypography>
                <Divider variant="middle" />
                <MDTypography align="center" sx={{ color: '#ffffff' }}>{d.info}
                  <IconButton>
                    <Link to="/employee_Master"><ArrowCircleRightRoundedIcon fontSize="small" /></Link>
                  </IconButton>
                </MDTypography>
              </div>
            );
          })}
        </MDBox>
      </Grid>
    </Grid>
  );
}