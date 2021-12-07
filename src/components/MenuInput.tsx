import MenuItem from "../models/MenuItem";
import {FormEvent, FunctionComponent, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {nanoid} from "nanoid";

type MenuInputProps = {
    menuList: MenuItem[],
    addItem: (item: MenuItem) => void,
}

export const MenuInput: FunctionComponent<MenuInputProps> = ({menuList, addItem}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddItem = (e: FormEvent) => {
        e.preventDefault();
        addItem(new MenuItem(name, price));
        setName('');
        setPrice('');
    }

    const listItems = menuList.map((item) =>
        <Row className='my-1' key={nanoid()}>
            <Col xs={7}>
                {item.name}
            </Col>
            <Col xs={3}>
                ${item.price}
            </Col>
        </Row>
    );

    return (
        <div>
            <Row className='mb-2'>
                <Col xs={7}>
                    Menu Item
                </Col>
                <Col xs={3}>
                    Price
                </Col>
            </Row>
            {listItems}
            <Row>
                <Col xs={7}>
                    <Form.Control
                        type='text'
                        placeholder='Menu Item'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Col>
                <Col xs={3}>
                    <Form.Control
                        type='text'
                        placeholder='Price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </Col>
                <Col>
                    <Button variant='secondary' onClick={handleAddItem}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Row>
        </div>
    );
}