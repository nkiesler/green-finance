import { Container } from "reactstrap";
import DespositTable from './Table';
import Buttons from './Buttons';

const Dashboard = () => {
	return (
		<Container className="dasboard-wrapper">
			<h1>Dashboard</h1>
			<DespositTable/>
			<Buttons/>
		</Container>
	);
}

export default Dashboard;