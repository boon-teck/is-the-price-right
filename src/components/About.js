import React from 'react';
import {Col} from 'react-bootstrap'

function About(props) {
    return (
            <Col className="justify-content-center">
                <p className="text-center">This is a web application to search through multiple online stores and return the search results.</p>
                <p className="text-center">Compare between your desired products and find the best price among them.</p>
                <h1 className="text-center">Happy Saving!</h1>
            </Col>
    );
}

export default About;
