import React, { useContext } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { Formik, Form } from 'formik';
import axios from "axios";
import { AppContext } from '../context/AppContext';


const LoginForm = () => {

	const { user, authenticate } = useContext(AppContext);

	const initialValues = {
		email: "",
		password: ""
	}

	return(
		<Container className="auth-wrapper">
			<Row>
				<Col lg="4">
					<h1 className="auth-title">Log in</h1>
					<p className="auth-subtitle">Fill the fields in.</p>
				</Col>
        		<Col lg="8">
        		<Formik
        			initialValues={initialValues}
        			onSubmit={(values, { setSubmitting }) => {
        				let userObj = {
        					email: values.email,
							password: values.password,
        				}

        				axios.post("https://green-finance-api.herokuapp.com/users/authenticate", userObj)
	                        .then((res) => {
	                        	console.log(userObj)
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
	        				</Row>
	        				<button>Login</button>
	        			</Form>
        			)}
        			</Formik>
        		</Col>
			</Row>
		</Container>
	)
}

export default LoginForm;