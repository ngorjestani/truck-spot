import {FunctionComponent, useRef, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {usePlacesWidget} from "react-google-autocomplete";
import {cuisines} from "../models/Cuisines";

type AddTruckFormProps = {

}

export const AddTruckForm : FunctionComponent<AddTruckFormProps> = (props) => {
    const [inputState, setInputState] = useState({

    });
    const {ref} = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            console.log(place);
        },
        options: {
            types: ['address'],
        }
    });
    const getCuisines = () => {
        return (
            <Form.Select>
                {cuisines.map((cuisine, id) => (
                    <option value={cuisine.id}>{cuisine.value}</option>
                ))}
            </Form.Select>
        );
    };
    const inputRef = useRef<HTMLInputElement>(null);
    const handleUpload = (e: React.MouseEvent) => {
        e.preventDefault();
        inputRef.current?.click();
    };

    return (
        <Container>
            <Form className='bg-light p-3 rounded shadow'>
                <Row className='mb-2'>
                    <Col xl={6}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Name'
                            />
                        </Form.Group>
                    </Col>
                    <Col xl={6}>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Address'
                                ref={ref}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col xs={6} xxl={3}>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='tel'
                                placeholder='Phone Number'
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6} xxl={3}>
                        <Form.Group>
                            <Form.Label>Cuisine</Form.Label>
                            {getCuisines()}
                        </Form.Group>
                    </Col>
                    <Col xxl={6}>
                        <Form.Group>
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Website'
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="m-3">
                            <label className='m-3'>Upload image:</label>
                            <input type="file" ref={inputRef} className='d-none'/>
                            <button onClick={handleUpload} className='btn btn-primary'>Upload</button>
                        </div>
                    </Col>
                </Row>
                <Button variant='primary' type='submit' className='mt-2 rounded-pill shadow-sm'>
                    Add truck
                </Button>
            </Form>
        </Container>
    )
}