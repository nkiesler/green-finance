import { Row, Col } from "reactstrap";

const icons = {
	twitter: "fab fa-twitter",
	linkedin: "fab fa-linkedin-in",
	gmail: "fas fa-envelope",
	facebook: "fab fa-facebook-f",
}
	
const TeamMember = props => {
	const { member } = props;

	return (
		<Col xl="6" lg="12" className="mb-5 d-md-flex ">
			<div className="avatar mb-md-0 mb-4 mx-4">
				{member.image ?
		        <img src={member.image} className="rounded" alt="avatar" />
		        :
		        <div className="def-avatar">
		        	<img src="img/team/default.png" />
		        </div>
				}
		    </div>
		    <div className="mx-4">
		    	<h4 className="font-weight-bold mb-3 name">{member.name}</h4>
		    	<h6 className="font-weight-bold mb-3 position">{member.position}</h6>
		        <p className="grey-text" dangerouslySetInnerHTML={{ __html: member.description }} />

		        {
		        	Object.keys(member.socials).map(item => {
		        		let link = item === "gmail" ? 'mailto:' + member.socials[item] : member.socials[item]
		        		return (
				        	<a type="button" href={link} className={"social-btn " + item} target="blank" rel="noopener noreferrer">
						        <i className={icons[item]}></i>
						    </a>
		        		)
			        })
		        }

		    </div>
		</Col>
	);
}

export default TeamMember;