import React, { useState } from 'react';
import { Modal, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';
import { Formik, Form, ErrorMessage } from 'formik';

const contactSchema = yup.object({
	name: yup.string().required("required field"),
    email: yup.string().email("invalid email").required("required field"),
    message: yup.string().required("required field"),
});


const Clients = () => {

	const [message, setMessage] = useState(); 

	const [modal, setModal] = useState(false);

  	const toggle = () => {
  		setModal(!modal)
  		setMessage()
  	};

	return (
		<>
			<section className="section-content main-txt">
			    <div className="container">
			        <div className="row">
			            <div className="col-lg-6">
			                <div className="golden-text">
			                    what we do
			                </div>
			                <div className="section-heading">
			                    Let's think together
			                </div>
			                <p>
			                    Just enter your details and we will contact you. We can create something great teamwise.
			                </p>
			                <div className="block-btn">
			                    <button className="section-btn blue-btn" onClick={toggle}>
			                        Contact us
			                    </button>
			                </div>
			            </div>
			            <div className="col-lg-6 mt-lg-0 mt-3">
			                <div className="partners-block">
			                    <div className="partners-heading">
			                        Our Clients
			                    </div>
			                    <div className="row mt-2">
			                        <div className="col-6 mt-5">
			                            <img src="img/partners/codepen.svg" alt="partner"/>
			                        </div>
			                        <div className="col-6 mt-5">
			                            <img src="img/partners/dribble.svg" alt="partner"/>
			                        </div>
			                        <div className="col-6 mt-5">
			                            <img src="img/partners/dribble.svg" alt="partner"/>
			                        </div>
			                        <div className="col-6 mt-5">
			                            <img src="img/partners/codepen.svg" alt="partner"/>
			                        </div>
			                        <div className="col-6 mt-5">
			                            <img src="img/partners/codepen.svg" alt="partner"/>
			                        </div>
			                        <div className="col-6 mt-5">
			                            <img src="img/partners/dribble.svg" alt="partner"/>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

			<Modal isOpen={modal} toggle={toggle} className="contact-modal modal-transparent modal-dialog-centered">
		        <ModalBody>
		        	<Formik
	        			initialValues={{ name: "", email: "", message: "" }}
	        			validationSchema={ contactSchema }
	        			onSubmit={(values, { setSubmitting }) => {
	        				let data = {
	        					name: values.name,
	        					email: values.email,
								message: values.message
	        				}



	        				axios.post("https://green-finance-api.herokuapp.com/contacts/add", data)
		                        .then((res) => {
		                        	console.log(res)
		                        	setMessage('Your message has been sent.')
		                        }).catch((error) => {
		                            console.log(error);
		                            setSubmitting(false)
		                            setMessage("Something went wrong")
		                        });
	        			}}
	        		>
		        		{({ 
	                      values, 
	                      handleChange, 
	                      handleBlur,
	                      isSubmitting 
	                    }) => (
		        			<Form>
				        		<h4>Contact us</h4>
				        		<span>Fill in the fields below.</span>

				        		{ message && <p className="result-message">{message}</p> }

				        		<FormGroup>
							        <Label for="name">Name</Label>
							        <Input type="text" name="name" id="name" onChange={handleChange} onBlur={handleBlur} />
							    	<ErrorMessage name="name" component="span" className="error" />
							    </FormGroup>
				        		<FormGroup>
							        <Label for="email">Email</Label>
							        <Input type="text" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
							    	<ErrorMessage name="email" component="span" className="error" />
							    </FormGroup>
							    <FormGroup>
							        <Label for="message">Message</Label>
							        <Input type="textarea" name="message" id="message" onChange={handleChange} onBlur={handleBlur} />
							    	<ErrorMessage name="message" component="span" className="error" />
							     </FormGroup>
							    <div className="d-flex justify-content-start">
							    	<button type="submit" className="primary" disabled={isSubmitting}>Send</button>
				          			<button type="button" className="secondary" onClick={toggle}>Cancel</button>
							    </div> 
				        	</Form>
	        			)}
        			</Formik>
		        </ModalBody>
		    </Modal>
		</>
	);
};

export default Clients;