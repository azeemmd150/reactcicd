// Material Dashboard 2 React layouts
import Dashboard from 'layouts/dashboard';
import SignIn from 'layouts/authentication/sign-in';
import DocumentValidation from 'layouts/DocumentValidation';
import SignUp from 'layouts/authentication/sign-up';
import EmployeeList from 'layouts/employeeList';
import OnboardingForm from 'layouts/OnboardingForm';
import Icon from '@mui/material/Icon';
import AllocateAssets from 'layouts/allocateAssets';
import Myprofile from 'layouts/myProfile';
import LeaveManagement from 'layouts/LeaveManagement/LeaveManagement';
import BirthdayRemainder from 'layouts/BirthdayRemainder';



const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <Icon fontSize="small">dashboard</Icon>,
		route: '/dashboard',
		component: <Dashboard />
	},
	{
		type: 'collapse',
		name: 'My Profile',
		key: 'myProfile',
		icon: <Icon fontSize="small">store</Icon>,
		route: '/myProfile',
		component: <Myprofile/>
	},
	{
		type: 'collapse',
		name: 'Onboarding Form',
		key: 'onboardingForm',
		icon: <Icon fontSize="small">receipt_long</Icon>,
		route: '/onboardingForm',
		component: <OnboardingForm />
	},
	{
		type: 'collapse',
		name: 'Document Validation',
		key: 'DocumentValidation',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/DocumentValidation',
		component: <DocumentValidation />
	},
	{
		type: 'collapse',
		name: 'Allocate Assets',
		key: 'allocateAssets',
		icon: <Icon fontSize="small">store</Icon>,
		route: '/allocateAssets',
		component: <AllocateAssets />
	},
	{
		type: 'collapse',
		name: 'Employee Master',
		key: 'employeeList',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/employeeList',
		component: <EmployeeList />
	},
	{
		type: 'collapse',
		name: 'Leave Management',
		key: 'LeaveManagement',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/LeaveManagement',
		component: <LeaveManagement />
	},
	{
		type: 'collapse',
		name: 'Birthday Remainder',
		key: 'BirthdayRemainder',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/BirthdayRemainder',
		component: <BirthdayRemainder />
	},
	{
		type: 'collapse',
		name: 'Sign Out',
		key: 'sign-out',
		icon: <Icon fontSize="small">logout</Icon>,
		route: '/authentication/sign-in',
		component: <SignIn />
	},
	{
		type: "collapse",
		name: "Sign Up",
		key: "sign-up",
		icon: <Icon fontSize="small">assignment</Icon>,
		route: "/authentication/sign-up",
		component: <SignUp />,
	  },
];
export default routes;


