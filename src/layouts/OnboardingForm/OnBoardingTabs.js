import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import OnboardingForm from './components/ExperienceOnboardingForm';
import FresherOnboardingForm from './components/FresherOnboardingForm';


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

export default function OnBoardingTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          sx={{bgcolor: '#fcbb9a'}}
          aria-label="full width tabs example"
        >
          <Tab label="Fresher" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
        
        </Tabs>
      </AppBar>
      <SwipeableViews       
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} >
        <FresherOnboardingForm/>
        </TabPanel>
        <TabPanel value={value} index={1} >
        <OnboardingForm/>
        </TabPanel>
        

      </SwipeableViews>
    </Box>
  );
}