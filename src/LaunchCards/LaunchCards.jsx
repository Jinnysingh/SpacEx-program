import React from "react";
import LazyLoad from "react-lazyload";

function LaunchCard(props) {
  return (
    <div className="row">
      {props.cardDetails.map((details) => (
        <div className="col-md-3 mt-20">
          <div className="card launch-card tiles">
            <LazyLoad height={200}>
            <div className="card-header">
                <img className="launch-img" src={details.links.mission_patch_small} alt="launch-img"></img>
            </div>
            </LazyLoad>
              <h5 className="mission-name">{details.mission_name}#{details.flight_number}</h5>
            <div className="card-body text-left">
              <div>
                <div className="launch-title">Mission Ids:</div>
                {details.mission_id.map(ids =>(
                  <li className="launch-title-right">{ids}</li>
                ))}
              </div>  
              <div>
                <span className="launch-title">Launch Year:</span>
                <span className="launch-title-right">{details.launch_year}</span>
              </div>
              <div>
                <span className="launch-title">Successful Launch:</span>
                <span className="launch-title-right">{details.launch_success !== undefined && `${details.launch_success}`}</span>
              </div>
              <div>
                <span className="launch-title">Successful Landing:</span>
                <span className="launch-title-right">{details.launch_landing !== undefined && `${details.launch_landing}` }</span>
              </div>
            </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default LaunchCard;
