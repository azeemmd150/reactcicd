import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import LeavesToApprove from './LeavesToApprove/LeavesToApprove'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import BasicTable from './HolidayList';
import LeaveReport from './LeaveReport/LeaveReport';
import ApplyLeave from './ApplyLeave/ApplyLeave';
import MyLeaveSmry from './MyLeaveSummary/MyLeaveSmry';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function LeaveManagementTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: '100%', }} >
      <AppBar position="static" sx={{ borderRadius: 3 }} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          sx={{bgcolor: '#fcbb9a'}}
          aria-label="full width tabs example"
        >
          <Tab label="Reports" {...a11yProps(0)} />
          <Tab label="Holiday List" {...a11yProps(1)} />
          <Tab label="Apply Leave" {...a11yProps(2)} />
          <Tab label="Leaves to Approve" {...a11yProps(3)} />
          <Tab label="My Leave Summary" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews       
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} >
        <LeaveReport/>
        </TabPanel>
        <TabPanel value={value} index={1} >
         <BasicTable/>
        </TabPanel>
        <TabPanel value={value} index={2} >
          <ApplyLeave/>
        </TabPanel>
        <TabPanel value={value} index={3} >
          <LeavesToApprove/>
        </TabPanel>
        <TabPanel value={value} index={4} >
          <MyLeaveSmry/>
        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}