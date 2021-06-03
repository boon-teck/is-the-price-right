import React from 'react';
import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Comparison from "./Comparison";

function Searchresult({shopeeSearchList}) {
    console.log("test",shopeeSearchList)
    return (
        <Row>
        {shopeeSearchList.map((item, index) => //*I can make this into another component here probably
            <Card key={item.id} style={{ width: '15rem' }}>
                <Card.Img variant="top" src= {`https://cf.shopee.sg/file/${item.image}&quot`}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {`S$${parseFloat(item.price/100000).toFixed(2)}`}
                    </Card.Text>
                    <Button variant="dark">Link to seller</Button>
                    <Link to="/comparison" className={'btn btn-outline-danger'}>Add to comparison</Link>
                </Card.Body>
            </Card>
        )}
        </Row>
    );
}

export default Searchresult;
