import {FunctionComponent} from "react";
import {TruckList} from "../components/TruckList";

type SearchResultsProps = {

}

export const SearchResults : FunctionComponent<SearchResultsProps> = (props) => {
    return (
        <div>
            <TruckList />
        </div>
    )
}