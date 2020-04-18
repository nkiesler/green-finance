import React, { useState } from 'react';
import { Container, Form, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import Charities from "./Charities";


const Buttons = () => {

	const [modalPayout, setModalPayout] = useState(false);
	const [modalDeposit, setModalDesposit] = useState(false);

	const togglePayout = () => setModalPayout(!modalPayout);
	const toggleDeposit = () => setModalDesposit(!modalDeposit);



	return (
		<>
			<Container className='buttons-wrapper'>
				<span>Your next step</span>
				<div className='buttons'>
					<a href="#charities">
						<button>Donate profits</button>
					</a>
					<button onClick={togglePayout}>Request payout</button>
					<button onClick={toggleDeposit}>Make new deposit</button>
				</div>
			</Container>

			<Charities />

			<Modal isOpen={modalPayout} toggle={togglePayout} className="dashboard-modal modal-transparent modal-dialog-centered">
	        	<ModalHeader toggle={togglePayout}></ModalHeader>
		        <ModalBody>
        			<Form>
		        		<h4>Request payout</h4>

		        		<FormGroup>
		        			<div className="row justify-content-start">
				        		<div className="amount col-sm-12 col-md-10 col-lg-10">
				        			<Label for="reg">Deposit amount</Label>
							        <Input type="number" name="amount" id="amount" />
				        		</div>
				        		<div className="currency col-sm-12 col-lg-2">
							        <span>DKK</span>
				        		</div>
		        			</div>
					    </FormGroup>
					    <FormGroup>
		        			<Label for="pass">Type in your <span className='text-gold'>LASTNAME FIRSTNAME</span> to verify transaction</Label>
					        <Input type="text" name="pass" id="pass" className="textinput" />
					    </FormGroup>
					    <div className="d-flex justify-content-start">
					    	<button type="submit" className="primary">Confirm</button>
					    	<button className="secondary">Cancel</button>
					    </div> 
		        	</Form>
		        </ModalBody>
		    </Modal>

		    <Modal isOpen={modalDeposit} toggle={toggleDeposit} className="dashboard-modal modal-transparent modal-dialog-centered">
	        	<ModalHeader toggle={toggleDeposit}></ModalHeader>
		        <ModalBody>
        			<Form>
		        		<h4>Thank you for using BLAU</h4>
		        		<span className="desc">Please deposit your desired amount to the following account and add the following code so that we can create it under your name.</span>

		        		<FormGroup>
		        			<div className="row justify-content-between">
				        		<div className="amount col-sm-10 col-md-10 col-lg-10">
				        			<Label for="reg">Deposit amount</Label>
							        <Input type="number" name="amount" id="amount" />
				        		</div>
				        		<div className="currency col-sm-12 col-lg-2">
							        <span>DKK</span>
				        		</div>
		        			</div>
					    </FormGroup>
		        		<FormGroup>
		        			<Label for="reg">REG</Label>
					        <Input placeholder="XXXX ACCOUNT XXXXXXXXXX" type="text" name="reg" id="reg" className="textinput" />
					    </FormGroup>
					    <FormGroup>
					    	<p>For international transfers</p>
		        			<Label for="iban">IBAN</Label>
					        <Input placeholder="XXXXXXXXXXXXXX" type="text" name="iban" id="iban" className="textinput" />
					    </FormGroup>
					    <FormGroup>
		        			<Label for="pass">Type in your <span className='text-gold'>LASTNAME FIRSTNAME</span> to verify transaction</Label>
					        <Input type="text" name="pass" id="pass" className="textinput" />
					    </FormGroup>
					    <div className="d-flex justify-content-start">
					    	<button type="submit" className="primary">Confirm</button>
					    	<button className="secondary">Cancel</button>
					    </div>
		        	</Form>
		        </ModalBody>
		    </Modal>
		</>
	);
}

export default Buttons;