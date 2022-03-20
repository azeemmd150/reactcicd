// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import EmployeeData from '../employeeList/components/EmployeeData';
import CardGroup from './components/cardss/CardGroup';
import ChartOne from './components/charts/ChartOne';


function Dashboard() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <br />
            <CardGroup />
            <MDBox sx={{background:'white', borderRadius:'3%'}} py={2}>
            <ChartOne/>
            </MDBox>
            <br/>
            <EmployeeData />
            <Footer />
        </DashboardLayout>
    );
}

export default Dashboard;