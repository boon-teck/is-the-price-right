import React from 'react';
import {Row} from "react-bootstrap";
import Shopee from "./Shopee";
import Fairprice from "./Fairprice"

function Searchresult({shopeeSearchList, fairpriceList}) {
    console.log("shopee list",shopeeSearchList)
    console.log("fairprice list",fairpriceList)
    return (
        <Row>
            <Shopee shopeeSearchList={shopeeSearchList}/>
            <Fairprice fairpriceList={fairpriceList}/>
        </Row>
    );
}

export default Searchresult;
