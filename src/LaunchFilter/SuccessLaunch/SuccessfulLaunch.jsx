import React from "react";

function SuccessLaunch(props) {
  return (
      <div className="launch-sec">
      <div>
        <u>Successful Launch</u>
      </div>
      {props.launchFilters.map((items) => (
        <button type="button" className="btn btn-success text-dark launch-btn active-btn" onClick={(event) => props.handleFilters(event, "Launch Success")}>
          {items}
        </button>
      ))}
    </div>
  );
}

export default SuccessLaunch;
