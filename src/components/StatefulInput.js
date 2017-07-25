import React from "react";

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
                <div>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={() => this.write(this.state.writing)}>
                        Write statefully!
                    </button>
                </div>
                <div>
                  <h2>Message:</h2>
                  <p>{this.state.written}</p>
                </div>
            </div>
        );
    };
};

export default StatefulInput;
