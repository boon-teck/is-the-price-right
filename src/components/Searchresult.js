import React from 'react';
import {Button, Card, Row} from "react-bootstrap";

function Searchresult({shopeeSearchList}) {
    console.log("test",shopeeSearchList)
    return (
        <Row>
        {shopeeSearchList.map((item, index) =>
            <Card key={item.id} style={{ width: '15rem' }}>
                <Card.Img variant="top" src= {`https://cf.shopee.sg/file/${item.image}&quot`}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {`S$${parseFloat(item.price/100000).toFixed(2)}`}
                    </Card.Text>
                    <Button variant="dark">Buy</Button>
                </Card.Body>
            </Card>
                )}


        </Row>
    );
}

export default Searchresult;
