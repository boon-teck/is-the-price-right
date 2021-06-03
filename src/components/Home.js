import React from 'react';
import {Link} from 'react-router-dom'
import {Button, FormControl, InputGroup} from "react-bootstrap";

function Home({setSearchItem, searchItem}) {
    console.log(searchItem)
    ////function for search using ref hook (not enough time to do)
    // let inputRef = useRef()
    // function searchFunc () {
    //     console.log(inputRef.current.value)
    // }
    return (
        <div class="d-flex justify-content-end">
            <InputGroup className="mb-3 col-xs-4" >
                <FormControl
                    placeholder="Search"
                    onChange={(e) => setSearchItem(e.target.value)}
                    aria-label="Search"
                />
                <InputGroup.Append>
                    <Link to="/searchresult"><Button variant="outline-dark">$</Button></Link>
                </InputGroup.Append>
            </InputGroup>
        </div>
);
}

export default Home;
