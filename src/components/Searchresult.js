import React from 'react';
import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Comparison from "./Comparison";
import Shopee from "./Shopee";
import Fairprice from "./Fairprice"

function Searchresult({shopeeSearchList}) {
    console.log("test",shopeeSearchList)
    return (
        <Row>
            <Shopee shopeeSearchList={shopeeSearchList}/>
            <Fairprice />
        </Row>
    );
}

export default Searchresult;
