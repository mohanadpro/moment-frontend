import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import styles from "../../../App.module.css"
import Global from '../../../styles/Global.module.css'
import btnStyle from '../../../styles/Button.module.css'
import {Button} from 'react-bootstrap';
export const SignInForm = () => {
  return (
    <Container className={Global.MarginTop}>
      <Form className={styles.Row}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Please input an email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className={`${btnStyle.Button} ${btnStyle.Wide} ${btnStyle.Bright}`} type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  )
}
