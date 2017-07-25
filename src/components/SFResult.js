import React from "react";

const SFResult = ({written}) => {
  return (
    <div>
      <h6>Message:</h6>
      <p className="messageOutput">{written}</p>
    </div>
  );
}

export default SFResult;
