import {FunctionComponent} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

type SearchProps = {

}

export const Search : FunctionComponent<SearchProps> = () => {
    return (
        <Form.Group>
            <InputGroup>
                <Form.Control
                    type='input'
                    placeholder='Search...'
                    className='rounded-pill'
                />
                <Button><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup>
        </Form.Group>
    )
}