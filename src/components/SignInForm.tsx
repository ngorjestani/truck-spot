import {FunctionComponent} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

type SignInFormProps = {

}

export const SignInForm : FunctionComponent<SignInFormProps> = (props) => {
    return (
        <Container>
            <Form className='bg-light p-3 rounded shadow'>
                <Form.Group className='mb-2'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Email' className='rounded-pill' />
                </Form.Group>
                <Form.Group className='my-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' className='rounded-pill' />
                </Form.Group>
                <Form.Text className='text-muted'>
                    Don't have an account? <Link to='../create'>Create an account</Link>
                </Form.Text>
                <br />
                <Button variant='primary' type='submit' className='mt-2 rounded-pill shadow-sm'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}