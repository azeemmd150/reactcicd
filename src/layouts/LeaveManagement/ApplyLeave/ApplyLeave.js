import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography, Grid, Button, Modal, Select, InputLabel, FormControl } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ViewsDatePicker from './DatePicker';
import { leaves, starts, ends, startTimes, endTimes } from './DropDownsLeave';
import LeaveModal from './LeaveModal';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ApplyLeave() {
  const [leave, setLeave] = React.useState('leave');
  const [startDay, setStartDay] = React.useState('');
  const [endDay, setEndDay] = React.useState('')
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setLeave(event.target.value);
  };

  const handleStartDay = (event) => {
    setStartDay(event.target.value);
  };

  const handleEndDay = (event) => {
    setEndDay(event.target.value);
  };

  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTime = (event) => {
    setEndTime(event.target.value)
  }

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch', height: '75 ch' },
      }}
      bgcolor="#ffffff"
    >
      <Typography variant="h4" textAlign="center">Apply Leave</Typography>
      <Grid container rowSpacing={1} mt={5} ml={2}>
        <div>
          <TextField
            select
            required
            label="Leave Type"
            variant="standard"
            value={leave}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="select your Leave type"
          >
            {leaves.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <Button onClick={handleOpen}>Check Balance Leaves</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <LeaveModal />
            </Box>
          </Modal>
        </div>

        <div>
          <Grid item xl={6} md={3} xs={6} sm={6}>
            <Typography variant="overline">From Date:</Typography>
          </Grid>
          <Grid item xl={6} md={3} xs={6} sm={6}>
            <ViewsDatePicker />
          </Grid>
          <Grid Item xl={6} md={3} xs={6} sm={6}>
            <Typography variant="overline">To Date:</Typography>
          </Grid>
          <Grid item xl={6} md={3} xs={6} sm={6}>
            <ViewsDatePicker />
          </Grid>
        </div>

        <div>
          <TextField
            select
            label="Start Day"
            value={startDay}
            onChange={handleStartDay}
            SelectProps={{
              native: true,
            }}
            helperText="select your start day"
            variant="standard"
          >
            {starts.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            select
            label
            value={startTime}
            onChange={handleStartTime}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {startTimes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            select
            label="End Day"
            value={endDay}
            onChange={handleEndDay}
            SelectProps={{
              native: true,
            }}
            helperText="select your end day"
            variant="standard"
          >
            {ends.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            select
            label
            value={endTime}
            onChange={handleEndTime}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {endTimes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>

        <TextField
          id="outlined-input"
          label="Reason for Leave"
          type="text"
        />

        <Grid container justifyContent="center">
          <Button color="secondary" size="large" type="submit" variant="contained">
            Submit
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
}


