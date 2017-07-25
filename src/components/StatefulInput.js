import React from "react";
import { Col, Row } from "react-materialize";


class StatefulInput extends React.Component {
    state = {
        writing: "",
        written: ""
    };

    handleChange = (event) => {
        let shoop = event.target.value;
        this.setState(() => ({
            writing: shoop
        }));
    };

    write = (written) => {
        this.setState(() => ({
            written: written
        }));
    };

    render() {
        return (
            <div>
                <Row>
                    <Col s={6}>
                        <input type="text" placeholder="Placeholder"
                            onChange={this.handleChange} />
                    </Col>
                    <Col s={6}>
                        <button onClick={() => this.write(this.state.writing)}>
                            Write statefully!
                        </button>
                    </Col>
                </Row>
                <div>
                  <h6>Message:</h6>
                  <p className="messageOutput">{this.state.written}</p>
                </div>
            </div>
        );
    };
};

export default StatefulInput;
