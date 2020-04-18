import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import startsWith from 'lodash.startswith';


const CallRequest = () => {
	const [status, setStatus] = useState(); 

	const [modal, setModal] = useState(false);

	const [response, setResponse] = useState();

	 const [phone, setPhone] = useState('');

  	const toggle = () => {
  		setModal(!modal)
  		setStatus()
  		setResponse()
  	};

  	const handleSubmit = e => {
  		e.preventDefault();

  		axios.post("https://green-finance-api.herokuapp.com/contacts/addPhoneNumber", { phoneNumber: phone })
            .then((res) => {
            	console.log(res)
            	if (res.data.success) {
            		setResponse('Thank you for reaching out to us!')
            	}
            }).catch((error) => {
                console.log(error);
                setStatus("Something went wrong")
            });
  	}

	return(
		<>
			<div className="section-item mt-5">
	            <div className="icon">
	                <img src="img/section1/design.svg" alt="icon" />
	                <div className="partners-heading mt-2">
	                    More information?
	                </div>
	                <p className="mt-2 desc">Let one of our agents get in touch with you and clear any questions you may have</p>
	                <button className="section-btn mt-2" onClick={toggle}>
	                    Sure, give me a call
	                </button>
	            </div>
	        </div>

	        <Modal isOpen={modal} toggle={toggle} className="call-modal modal-transparent modal-dialog-centered">
	        	<ModalHeader toggle={toggle}>
	        		<div className="envelope-circle"><i class="fas fa-phone-alt"></i></div>
	        	</ModalHeader>
		        <ModalBody>
        			<Form>
        				{ 
        					response 
        					?
        						<h4 className='success'>{response}</h4>
        					:
	        					<>	
					        		<h4>Request a call</h4>
					        		<span className="desc">Please enter your phone number below.</span>

					        		{ status && <p className="err">{status}</p> }

					        		<FormGroup>
						        		<PhoneInput
										  country={'dk'}
										  inputClass={"textinput"}
										  value={phone}
										  onChange={phone => setPhone(phone)}
										/>
								    </FormGroup>
								    <div className="d-flex justify-content-start">
								    	<button type="submit" className="primary" onClick={handleSubmit}>Subscribe</button>
								    </div> 
							    </>
        				}

		        	</Form>
		        </ModalBody>
		    </Modal>
        </>
	);
}

export default CallRequest;