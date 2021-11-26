import {FunctionComponent, RefObject} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {usePlacesWidget} from "react-google-autocomplete";

type SearchProps = {}

export const Search: FunctionComponent<SearchProps> = () => {
    const {ref} = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            console.log(place);
        },
        options: {
            types: ['address'],
        }

    });

    console.log(process.env.GOOGLE_MAPS_API_KEY)

    return (
        <Form.Group>
            <InputGroup>
                <Form.Control
                    type='input'
                    ref={ref}
                    placeholder='Search...'
                    className='rounded-pill'
                />
                <Button><FontAwesomeIcon icon={faSearch}/></Button>
            </InputGroup>
        </Form.Group>
    )
}