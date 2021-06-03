import React from 'react';
import {Card, Button, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Shopee({shopeeSearchList}) {
    return (
        <Col sm={6}>
            <h3 style={{textAlign: 'left'}}>Shopee</h3>
            {shopeeSearchList.map((item, index) => //*I can make this into another component here probably
                    <Card key={item.id} style={{ width: '15rem' }}>
                        <Card.Img variant="top" src= {`https://cf.shopee.sg/file/${item.image}&quot`}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {`S$${parseFloat(item.price/100000).toFixed(2)}`}
                            </Card.Text>
                            <Link to="/comparison" className={'btn btn-outline-danger'}>Add to comparison</Link>
                        </Card.Body>
                    </Card>
            )}
        </Col>
    );
}

export default Shopee;
