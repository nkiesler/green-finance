import React, { useState, useContext } from "react";
import { useRouter } from 'next/router'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { Formik, Form } from 'formik';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';


const SignupForm = () => {
	const { user, authenticate } = useContext(AppContext);
	const router = useRouter();
	const [ labeltext, setLabeltext ] = useState("Attach passport photo");

	const updateFilename = e => {
		let fileName = e.target.value.substring(12);
		setLabeltext(fileName);
	}

	const initialValues = {
		email: "",
		password: "",
		name: "",
		email: "",
		country: "",
		city: "",
		address: "",
	};

	return(
		<Container className="auth-wrapper">
			<Row>
				<Col lg="4">
					<h1 className="auth-title">Sign up</h1>
					<p className="auth-subtitle">Fill the fields in.</p>
				</Col>
        		<Col lg="8">
	        		<Formik
	        			initialValues={initialValues}
	        			onSubmit={(values, { setSubmitting }) => {
	        				let userObj = {
	        					email: values.email,
								password: values.password,
								name: values.name,
								email: values.email,
								country: values.country,
								city: values.city,
								address: values.address,
	        				}

	        				axios.post("https://green-finance-api.herokuapp.com/users/register", userObj)
		                        .then((res) => {
		                        	setSubmitting(false)
		                        	if (res.data.error) {
		                        		alert(res.data.message)
		                        	} else {
	                        			authenticate(res.data.token)
		                        	}
		                        }).catch((error) => {
		                            console.log(error);
		                            setSubmitting(false)
		                            alert("Something went wrong")
		                        });

	        			}}
	        		>
		        		{({ 
	                      values, 
	                      touched, 
	                      errors, 
	                      handleChange, 
	                      handleBlur,
	                      isSubmitting 
	                    }) => (  
		        			<Form>
		        				<Row>
		        					<Col lg="6">
			        					<FormGroup>
									        <Label for="email">Email</Label>
									        <Input type="email" name="email" id="email" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
									</Col> 
		        					<Col lg="6">
									    <FormGroup>
									        <Label for="password">Password</Label>
									        <Input type="password" name="password" id="password" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
			        				</Col>
			        				<Col lg="6">
			        					<FormGroup>
									        <Label for="name">Name</Label>
									        <Input type="text" name="name" id="name" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
									</Col>
			        				<Col lg="6">
			        					<FormGroup>
									        <Label for="country">Country</Label>
									        <Input type="text" name="country" id="country" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
									</Col>
		        					<Col lg="6">    
									    <FormGroup>
									        <Label for="city">City</Label>
									        <Input type="text" name="city" id="city" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
			        				</Col>
		        					<Col lg="6">    
									    <FormGroup>
									        <Label for="address">Address</Label>
									        <Input type="text" name="address" id="address" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
			        				</Col>
		        				</Row>
		        				<Row className="file-input-wrapper">
			        				<Col lg="6">
			        					<span className="file-input-title">Passport photo upload.</span>
			        				</Col>
			        				<Col lg="6">
			        					<span className="file-input-subtitle">Allows file size up to 2 MB.</span>
		        					</Col>
		        					<Col>
			        					<Input type="file" name="passport" id="passport" className="passport-input" onChange={updateFilename} />
			        					<label className="passport-label" for="passport">{labeltext}</label>
			        				</Col>	
		        				</Row>
		        				<FormGroup check>
							        <Label check>
							          <Input type="checkbox" />{' '}
							           I read and agree to <Link href="/terms">Terms and Conditions.</Link>
							        </Label>
							     </FormGroup>
		        				<button disabled={isSubmitting}>Sign up</button>
		        			</Form>
	        			)}
        			</Formik>
        		</Col>
			</Row>
		</Container>
	)
}

export default SignupForm;