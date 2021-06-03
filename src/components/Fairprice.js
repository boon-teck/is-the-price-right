import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";


function Fairprice({fairpriceList}) {
    // console.log("helloooooooo",fairpriceList)
    let cardStyle = {
        backgroundColor: 'white',
        width: '20rem'
    }

    return (
    <Col sm={6}>
        <h3 style={{textAlign: 'left'}}>Fairprice</h3>
        {fairpriceList.map((item, index) => //*I can make this into another component here probably
            <Card key={index} style={cardStyle}>
                <Card.Img variant="top" src= {item.imageLink}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        S{item.price}
                    </Card.Text>
                    <Link to="/comparison" className={'btn btn-outline-danger'}>Add to comparison</Link>
                </Card.Body>
            </Card>
        )}
    </Col>
    );
}

export default Fairprice;
