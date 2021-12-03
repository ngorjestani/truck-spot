import MenuItem from "../models/MenuItem";
import {FormEvent, FunctionComponent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

type MenuInputProps = {
    menuList: MenuItem[],
    addItem: (item: MenuItem) => void,
}

export const MenuItem: FunctionComponent<MenuInputProps> = ({menuList, addItem}) => {
    const [item, setItem] = useState<MenuItem>({name: '', price: ''});

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        addItem(item);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={7}>
                    <Form.Label>Menu Item</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Menu Item'
                        value={item.name}
                        onChange={(e) => {
                            setItem({...item, name: e.target.value});
                        }}
                    />
                </Col>
                <Col xs={3}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Price'
                        value={item.price}
                        onChange={(e) => {
                            setItem({...item, price: e.target.value});
                        }}
                    />
                </Col>
                <Col>
                    <Button type='submit'><FontAwesomeIcon icon={faPlus} /></Button>
                </Col>
            </Row>
        </Form>
    );
}