import React from "react";

const SFWritingForm = ({ write }) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => input = node} />
            <button onClick={() => write(input.value)}>Write!</button>
        </div>
    );
}

export default SFWritingForm;
