import {FunctionComponent, useState} from "react";
import {TruckList} from "../components/TruckList";
import {ResultsMap} from '../components/ResultsMap'
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";

type SearchResultsProps = {

}

export const SearchResults : FunctionComponent<SearchResultsProps> = (props) => {
    const [displayMap, setDisplayMap] = useState(false);

    return (
        <Container>
            <Row className='my-5'>
                <Col xs={{span: 2, offset: 4}}>
                    <ButtonGroup>
                        <Button
                            variant={displayMap ? 'light' : 'primary'}
                            onClick={e => setDisplayMap(true)}
                            disabled={displayMap}
                        >
                            Map
                        </Button>
                        <Button
                            variant={displayMap ? 'primary' : 'light'}
                            onClick={e => setDisplayMap(false)}
                            disabled={!displayMap}
                        >
                            List
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            {displayMap ? <ResultsMap /> : <TruckList/>}
        </Container>
    )
}