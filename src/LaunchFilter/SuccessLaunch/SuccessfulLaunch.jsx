import React from "react";

function SuccessLaunch(props) {
  return (
      <div className="launch-sec">
      <div className="title">
        <u>Successful Launch</u>
      </div>
      {props.launchFilters.map((items) => (
        <button type="button" className="btn btn-success text-dark launch-btn active-btn" onClick={(event) => props.handleFilters(event, "launch_success")}>
          {items}
        </button>
      ))}
    </div>
  );
}

export default SuccessLaunch;
