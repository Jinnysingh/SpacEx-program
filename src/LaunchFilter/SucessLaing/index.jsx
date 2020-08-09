import React from "react";

function SuccessLaing(props) {
  return (
      <div className="launch-sec">
      <div>
      <u>Successful Laing</u>
      </div>
      {props.launchFilters.map((items) => (
        <button type="button" className="btn btn-success text-dark launch-btn active-btn" onClick={(event) => props.handleFilters(event, "Land Success")}>
          {items}
        </button>
      ))}
    </div>
  );
}

export default SuccessLaing;
