import React from "react";

function LaunchYear(props) {
  return (
      <div className="launch-sec">
      <div  className="title">
        <u>Launch Year</u>
      </div>
      {props.launchFilters.map((items) => (
        <button type="button" className="btn btn-success text-dark launch-btn active-btn" onClick={(event) => props.handleFilters(event, "launch_year")}>
          {items}
        </button>
      ))}
    </div>
  );
}

export default LaunchYear;
