import {FunctionComponent, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Search} from "../components/Search";
import {useNavigate} from "react-router-dom";

type HomeProps = {

}

export const Home : FunctionComponent<HomeProps> = (props) => {
    const [searchValue, setSearchValue] = useState<google.maps.places.PlaceResult>({});
    const navigate = useNavigate();

    const handlePlaceSelected = (newValue: google.maps.places.PlaceResult) => {
        setSearchValue(newValue);
    }

    const handleSubmit = () => {
        navigate('results');
    }

    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}}>
                    <Image src='./logo.svg' width='100%' fluid />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col xs={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                    <Search
                        searchValue={searchValue}
                        handlePlaceSelected={handlePlaceSelected}
                        handleSubmit={handleSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}