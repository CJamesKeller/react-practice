import React from "react";

class StatefulInput extends React.Component {
    state = {
        written: "",
    };

    write = (written) => {
        this.setState(() => ({
            written: written
        }));
    };
    
    render() {
        return (
            <div>
                <input type="text" value={input} />
                <button onClick={() => this.write(input.value)}>Write!</button>
            </div>
            <div>
              <h2>Message:</h2>
              <p>{this.state.written}</p>
            </div>
        );
    };
};

export default StatefulInput;
