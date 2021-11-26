import {FunctionComponent, RefObject, useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {usePlacesWidget} from "react-google-autocomplete";

type SearchProps = {
    searchValue: google.maps.places.PlaceResult,
    handlePlaceSelected: (place: google.maps.places.PlaceResult) => void,
    handleSubmit: () => void,
}

export const Search: FunctionComponent<SearchProps> = ({searchValue,handlePlaceSelected, handleSubmit}) => {
    const {ref} = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            handlePlaceSelected(place);
        },
        options: {
            types: ['address'],
        }

    });

    console.log(process.env.GOOGLE_MAPS_API_KEY)

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control
                    type='input'
                    ref={ref}
                    placeholder='Search...'
                />
                <Button type='submit'><FontAwesomeIcon icon={faSearch}/></Button>
            </InputGroup>
        </Form>
    )
}