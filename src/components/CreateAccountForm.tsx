import {FunctionComponent, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {auth} from "../config/firebaseConfig";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";

type CreateAccountFormProps = {

}

export const CreateAccountForm : FunctionComponent<CreateAccountFormProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = () => {

    };

        return (
        <Form className='bg-light p-3 rounded shadow'>
            <Row className='mb-2'>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='my-2'>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row className='my-2'>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Form.Text className='text-muted'>
                    Already have an account? <Link to='../login'>Sign in.</Link>
                </Form.Text>
            </Row>
            <Row className='mt-2'>
                <Col xs='auto' className='text-center'>
                    <Button
                        variant='primary'
                        type='submit'
                        className='rounded-pill shadow-sm'
                    >
                        Create Account
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}