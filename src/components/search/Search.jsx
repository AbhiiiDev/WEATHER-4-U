import { AsyncPaginate } from "react-select-async-paginate"
import { react, useState } from "react";
import { GEO_API_URL , geoApiOptions} from '../../api.js'


const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions=(inputValue)=>{
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response =>{
            return {
                options: response.data.map((city)=>{
                    return {
                        value:`${city.latitude},${city.lognitude}`,
                        label:`${city.name},${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.log(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    }
    return (
        <AsyncPaginate placeholder="search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange} 
            loadOptions={loadOptions}/>


    );
}
export default Search;
