import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import LeaveManagementTabs from './LeaveManagementTabs';



function Dashboard() {

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<br/>
            
			<MDBox borderRadius="lg"
                coloredShadow="info" py={0.01}  >
                    <LeaveManagementTabs/>
				<MDBox>
					<Grid container >
						<Grid item xs={12} md={12} lg={12} >
							
						</Grid>
					</Grid>
				</MDBox>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
