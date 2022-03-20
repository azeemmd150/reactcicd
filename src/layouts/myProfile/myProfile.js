import React from 'react';
import { TextField, Grid, Container, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { orange, pink } from '@mui/material/colors';
//import Box from '@mui/material/Box';
//import { DateTimePicker } from '@mui/lab';


//comments on my profile

function Myprofile() {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Avatar alt="Remy Sharp"
                 sx={{ width: 175, height: 175, bgcolor: orange[300] }}
                >Profile</Avatar>
            </Grid>

            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Full Name"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Password"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Blood Group"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Contact Number"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Qualification"
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Permanent Address"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Gender"
                />
            </Grid>

            <Grid item xs={6} align='right'>
                <Button variant="contained" color="black">submit</Button>
            </Grid>
            <Grid item xs={6} align='left'>
                <Button variant="contained" color='white'>edit</Button>
            </Grid>

        </Grid>


    )
}

export default Myprofile;
