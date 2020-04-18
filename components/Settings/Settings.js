import React, { useState, useContext } from "react";
import { useRouter } from 'next/router'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { Formik, Form } from 'formik';
import { AppContext } from '../context/AppContext';


const SignupForm = () => {
	const { user } = useContext(AppContext);
	const router = useRouter();

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
        		<Col lg="8">
					<h1 className="auth-title mb-5">Edit your data</h1>
	        		<Formik
	        			initialValues={initialValues}
	        			onSubmit={(values, { setSubmitting }) => {
	        				// todo
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
									        <Input value={user.email} type="email" name="email" id="email" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
									</Col> 
			        				<Col lg="6">
			        					<FormGroup>
									        <Label for="name">Name</Label>
									        <Input value={user.name} type="text" name="name" id="name" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
									</Col>
			        				<Col lg="6">
			        					<FormGroup>
									        <Label for="country">Country</Label>
									        <Input value={user.country} type="text" name="country" id="country" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
									</Col>
		        					<Col lg="6">    
									    <FormGroup>
									        <Label for="city">City</Label>
									        <Input vlue={user.city} type="text" name="city" id="city" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
			        				</Col>
		        					<Col lg="6">    
									    <FormGroup>
									        <Label for="address">Address</Label>
									        <Input value={user.address} type="text" name="address" id="address" className="textinput" onChange={handleChange} onBlur={handleBlur} />
									    </FormGroup>
			        				</Col>
		        				</Row>
		        				<button disabled={isSubmitting}>Submit</button>
		        			</Form>
	        			)}
        			</Formik>
        		</Col>
			</Row>
		</Container>
	)
}

export default SignupForm;