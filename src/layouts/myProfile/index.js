import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Myprofile from '../myProfile/myProfile';

function myprofileDashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <MDBox>
        <MDBox>
          <Grid container spacing={12}>
            <Grid item xs={20} md={10} lg={20}>
             <Myprofile/>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default myprofileDashboard;