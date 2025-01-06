import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Alert, Container } from 'react-bootstrap';
import styles from "../../../App.module.css"
import Global from '../../../styles/Global.module.css'
import btnStyle from '../../../styles/Button.module.css'
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
export const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser()

  const [signInData,setSigInData] = useState({
    username:'',
    password:''
  })
  const [error,setError] = useState({})
  const navigate = useNavigate();
  const handleChange=e=>{
    setSigInData({...signInData, 
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit= async e=>{
    e.preventDefault();
    try{
      const {data} = await axios.post('/dj-rest-auth/login/',signInData)
      setCurrentUser(data.user)
      navigate('/')
    } catch(err){
      console.log(err.response?.data)
      setError(err.response?.data)
    }
  }
  return (
    <Container className={Global.MarginTop}>
      {error?.non_field_errors?.map((message,id)=>
        <Alert variant='warning' key={id}>{message}</Alert>
      )}
      <Form className={styles.Row} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
          name='username'
          value={signInData.username}
          onChange={handleChange}
          type="username"
          placeholder="Username"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          name='password'
          value={signInData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password" />
        </Form.Group>
        <Button className={`${btnStyle.Button} ${btnStyle.Wide} ${btnStyle.Bright}`} type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  )
}
