import React from 'react';
import { Container, Row, Col } from "reactstrap";


const charityList = [
	{
		name: "Fasttrack",
		description: "Teaching 1 million teenagers across the globe how to become world leading coders. Training can be accessed at any time through a PC and an internet connection. This provides an unprecedented opportunity to become a self starter.",
		image: "img/charities/ft_logo.png"
	},
	{
		name: "Fasttrack",
		description: "Teaching 1 million teenagers across the globe how to become world leading coders. Training can be accessed at any time through a PC and an internet connection. This provides an unprecedented opportunity to become a self starter.",
		image: "img/charities/ft_logo.png"
	},
	{
		name: "Fasttrack",
		description: "Teaching 1 million teenagers across the globe how to become world leading coders. Training can be accessed at any time through a PC and an internet connection. This provides an unprecedented opportunity to become a self starter.",
		image: "img/charities/ft_logo.png"
	},
];

const Charities = () => {
	return (
		<Container className="charities" id="charities">
			<h2>Charities</h2>
			<Row className="charities-list">
				{
					charityList.map(item => (
						<Col xl="6" lg="12" className="charity-wrapper">
							<img src={item.image} />
							<h3>{item.name}</h3>
							<p className="desc">{item.description}</p>
							<button className="donate-btn">Donate</button>
						</Col>
					))
				}
			</Row>
		</Container>
	)
}

export default Charities;