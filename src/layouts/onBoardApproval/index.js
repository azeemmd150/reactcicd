import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import Actions from './components/Actions';

function OnBoardingApproval() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <br/>
            <MDBox borderRadius="lg"
                coloredShadow="info" py={0.01} >
                <MDBox>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={10} lg={20}>
                            <Actions />
                        </Grid>
                    </Grid>
                </MDBox>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default OnBoardingApproval;