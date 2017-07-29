import React from "react";
import { Button, Col, Row } from "react-materialize";

const SFWritingForm = ({ write }) => {
    let input;
    return (
        <div>
            <Row>
                <Col s={6}>
                    <input type="text" placeholder="Placeholder"
                        ref={node => input = node} />
                </Col>
                <Col s={6}>
                    <Button waves="light" onClick={() => write(input.value)}>
                        Write statelessly using refs!
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default SFWritingForm;
