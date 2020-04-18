import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';
import { Formik, Form, ErrorMessage } from 'formik';

const newsletterSchema = yup.object({
    email: yup.string().email("invalid email").required("Fill in this field"),
});


const Newsletter = () => {

	const [status, setStatus] = useState(); 

	const [modal, setModal] = useState(false);

	const [response, setResponse] = useState();

  	const toggle = () => {
  		setModal(!modal)
  		setStatus()
  		setResponse()
  	};

	return (
		<>

			<div className="section-item">
	            <div className="icon">
	                <img src="img/section1/scale.svg" alt="icon" />
	                <div className="partners-heading mt-2">
	                    The concept
	                </div>
	                <p className="mt-2 desc">Our collaboration with leasing companies and other ventures enable us to conduct
	                    low-risk
	                    investments and provide you the interest you deserve on your store of value
	                </p>
	                <button className="section-btn mt-2" onClick={toggle}>
	                    Request more information
	                </button>
	            </div>
	        </div>

			<div className="section-item mt-5">
	            <div className="icon">
	                <img src="img/section1/iot.svg" alt="icon" />
	                <div className="partners-heading mt-2">
	                    Newsletter
	                </div>
	                <p className="mt-2 desc">If you wish to be the first to know then sign up for our newsletter here</p>
	                <button className="section-btn mt-2" onClick={toggle}>
	                    Yes, i want to know
	                </button>
	            </div>
	        </div>

	        <Modal isOpen={modal} toggle={toggle} className="newsletter-modal modal-transparent modal-dialog-centered">
	        	<ModalHeader toggle={toggle}>
	        		<div className="envelope-circle"><i class="far fa-envelope-open"></i></div>
	        	</ModalHeader>
		        <ModalBody>
		        	<Formik
	        			initialValues={{ email: "" }}
	        			validationSchema={ newsletterSchema }
	        			onSubmit={(values, { setSubmitting }) => {

	        				axios.post("https://green-finance-api.herokuapp.com/contacts/subscribe", { email: values.email })
		                        .then((res) => {
		                        	console.log(res)
		                            setSubmitting(false)
		                        	if (res.data.error) {
		                        		setStatus(res.data.message)
		                        	} else {
		                        		setResponse('You are subscribed.')
		                        	}
		                        }).catch((error) => {
		                            console.log(error);
		                            setSubmitting(false)
		                            setStatus("Something went wrong")
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

		        				{ 
		        					response 
		        					?
		        						<h4 className='success'>{response}</h4>
		        					:
			        					<>	
							        		<h4>Don't want to miss anything?</h4>
							        		<span className="desc">Subscribe to our newsletter</span>

							        		{ status && <p className="err">{status}</p> }

							        		<FormGroup>
										        <Input placeholder="Email" type="text" name="email" id="email" className="textinput" onChange={handleChange} onBlur={handleBlur} />
										    	<ErrorMessage name="email" component="span" className="error" />
										    </FormGroup>
										    <div className="d-flex justify-content-start">
										    	<button type="submit" className="primary" disabled={isSubmitting}>Subscribe</button>
										    </div> 
									    </>
		        				}

				        	</Form>
	        			)}
        			</Formik>
		        </ModalBody>
		    </Modal>

        </>
	);
}

export default Newsletter;