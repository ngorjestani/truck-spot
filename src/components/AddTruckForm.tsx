import {FormEvent, FunctionComponent, useRef, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {usePlacesWidget} from "react-google-autocomplete";
import {cuisines} from "../models/Cuisines";
import FoodTruck from "../models/FoodTruck";
import {MenuInput} from "./MenuInput";
import MenuItem from "../models/MenuItem";
import {db, storage} from "../config/firebaseConfig";
import {nanoid} from "nanoid";
import {useNavigate} from "react-router-dom";

type AddTruckFormProps = {

}

export const AddTruckForm: FunctionComponent<AddTruckFormProps> = (props) => {
    const [inputState, setInputState] = useState({
        name: '',
        phone: '',
        cuisine: cuisines[0].value,
        website: '',
    });
    const [address, setAddress] = useState({});
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [imageFile, setImageFile] = useState<File>();
    const {ref} = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (p) => {
            setAddress(p);
        },
        options: {
            types: ['address'],
        }
    });
    const navigate = useNavigate();

    const getCuisines = () => {
        return (
            <Form.Select
                value={inputState.cuisine}
                onChange={(e) => {
                    setInputState({...inputState, cuisine: e.target.value})
                }}
            >
                {cuisines.map((cuisine, id) => (
                    <option key={id} value={cuisine.value}>{cuisine.value}</option>
                ))}
            </Form.Select>
        );
    };

    const addMenuItem = (item: MenuItem) => {
        setMenu((prevState) => {
            return [...prevState, item];
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const truckImagesRef = storage.ref(`/img/${imageFile!.name}${nanoid(5)}`);

        const upload = truckImagesRef.put(imageFile!);

        upload.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
                console.error(error);
            },
            () => {
                upload.snapshot.ref.getDownloadURL()
                    .then((downloadURL) => {
                        const foodTruck: FoodTruck = {
                            name: inputState.name,
                            location: address,
                            phone: inputState.phone,
                            cuisine: inputState.cuisine,
                            website: inputState.website,
                            menu: menu,
                            imageURL: downloadURL,
                        };

                        db.collection('foodTrucks')
                            .add(Object.assign({}, foodTruck))
                            .then(() => {
                                navigate('/');
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    });
            }
        );
    };

    return (
        <Container>
            <Form className='bg-light p-3 rounded shadow' onSubmit={handleSubmit}>
                <Row className='mb-2'>
                    <Col xl={6}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Name'
                                value={inputState.name}
                                onChange={(e) => {
                                    setInputState({...inputState, name: e.target.value})
                                }}
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
                                onChange={(e) => e.preventDefault()}
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
                                value={inputState.phone}
                                onChange={(e) => {
                                    setInputState({...inputState, phone: e.target.value})
                                }}
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
                                value={inputState.website}
                                onChange={(e) => {
                                    setInputState({...inputState, website: e.target.value})
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="m-3">
                            <label className='m-3'>Upload image:</label>
                            <input
                                type="file"
                                onChange={(e) => {
                                    if (e.target.files) {
                                        setImageFile(e.target.files[0]);
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                <MenuInput menuList={menu} addItem={addMenuItem}/>
                <Button variant='primary' type='submit' className='mt-2 rounded-pill shadow-sm'>
                    Add truck
                </Button>
            </Form>
        </Container>
    )
}