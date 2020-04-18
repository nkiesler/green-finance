import { Container, Row } from "reactstrap";
import TeamMember from "./TeamMember";

const members = [
	{
		name: "Peter Gelardi Mikkelsen",
		position: "CTO",
		image: "img/team/peter.jpg",
		description: "7 years blockchain specialist. <a href='https://www.fasttrack.network/'>fasttrack.network</a>",
		socials: {
			linkedin: "https://www.linkedin.com/in/peter-gelardi-mikkelsen-6400b34a/",
			gmail: "pmikk@tutanota.com",
		}
	},
	{
		name: "Jakob Vesterlund",
		position: "Legal",
		image: 'img/team/jakobv.jpg',
		description: "Systems Developer at SDC.",
		socials : {
			facebook: "https://www.facebook.com/jakob.vesterlund.1",
		}
	},
	{
		name: "Jacob Christiansen Senholt",
		position: "Business Development",
		description: "Project manager, business analyst and a PhD with years of experience in financial analysis, project management, and IT implementation.",
		socials : {
			linkedin: "https://www.linkedin.com/in/jacobsenholt/",
		}
	}
];


const Team = () => (
	<Container>
		<section className="team-section">
			<h2 className="text-center my-5">Our amazing team</h2>
			<p className="grey-text text-center w-responsive mx-auto mb-5">Our team is composed of international talent that works together to bring you a safe and secure store of your value.</p>
			<Row className="text-center text-md-left team-wrapper">
				{members.map(member => (
					<TeamMember member={member} />
				))}
			</Row>
		</section>
	</Container>
)

export default Team;