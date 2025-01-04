import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import btnStyle from "../../../styles/Button.module.css";
import appStyles from "../../../styles/SignUpForm.module.css"
import styles from "../../../App.module.css"
import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setSignUpData({...signUpData, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await axios.post("/dj-rest-auth/registration/", signUpData);
      navigate.push('/signin')

    }catch(err){
      setError(err.resposne?.data)
    }
  }

  return (
    <Container>
    <Row className={styles.Row}>
      <Col className="my-auto py-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <Form onSubmit={handleSubmit}>
            <h1 className={styles.Header}>sign up</h1>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={handleChange} type="text" placeholder="Username" />
            </Form.Group>
            {/* {error.username?.map((message,id)=>{
              <Alert variant="warning" key={id}>{message}</Alert>
            })} */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleChange} type="password" placeholder="Password"/>
            </Form.Group>
            {/* {error.password?.map((message,id)=>{
              <Alert variant="warning" key={id}>{message}</Alert>
            })} */}
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={handleChange} type="password" placeholder="Confirm Password"/>
            </Form.Group>
            {/* {error.confirmPassword?.map((message,id)=>{
              <Alert variant="warning" key={id}>{message}</Alert>
            })} */}
            <Button className={`${btnStyle.Button} ${btnStyle.Wide} ${btnStyle.Bright}`} type="submit">
              Sign Up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
      >
        <Image
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
    </Container>
  );
};

export default SignUpForm;