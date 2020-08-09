import React, {useEffect, useState} from "react";
import LaunchFilter from "./LaunchFilter/index.jsx";
import LaunchCard from './LaunchCards/index.jsx'
import LazyLoad from 'react-lazyload';
import {allData} from './api.js'
import {successLaunchFilter, successLaunchLand, allFilters} from "./api.js"
import "./App.css";

function App() {
  const [allCard, setCards] = useState([])
  const [launchSuccess, setLaunchSuccess] = useState(null)
  const [landSuccess, setLandSuccess] = useState(null)
  const [launchYear, setLaunchYear] = useState(0)

  useEffect(() => {
    allData
      .then(res => res.json())
      .then(
        (result) => {
          setCards(result)
        },
        (error) => {
          console.error(error)        }
      )
  }, [])

  const handleFilters = (event, type) => {
    let value = event.target.innerText;
    let data = value === "True" ? true : false;
    if (type === "Launch Success" && landSuccess === null && launchYear === 0) {
      setLaunchSuccess(data);
      successLaunchFilter(data)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log("checking data", result);
            setCards(result);
          },
          (error) => {
            console.error(error);
          }
        );
    } else if(type === "Land Success" && launchSuccess !== null){
      setLandSuccess(data)
      successLaunchLand(launchSuccess, data)
      .then((res) => res.json())
        .then(
          (result) => {
            console.log("checking data", result);
            setCards(result);
          },
          (error) => {
            console.error(error);
          }
        );
    }else if(type === "Launch Years" && launchSuccess && landSuccess !== null){
      setLaunchYear(parseInt(value))
      allFilters(launchSuccess, landSuccess, launchYear )
      .then((res) => res.json())
        .then(
          (result) => {
            console.log("checking data", result);
            setCards(result);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <h4 className="text-left pt-20 pb-20">SpacEx Launch program</h4>
        <div className="row">
          <div className="col-md-3">
            <LaunchFilter handleFilters={handleFilters}/>
          </div>
          <div className="col-md-9">
          <LazyLoad height={200} offset={100} >
          <LaunchCard cardDetails={allCard}/>
          </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
