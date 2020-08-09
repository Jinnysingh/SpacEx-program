import React, {useEffect, useState} from "react";
import LaunchFilter from "./LaunchFilter/LaunchFilter.jsx";
import LaunchCard from './LaunchCards/LaunchCards.jsx'
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
    if (type === "Launch Success") {
      setLaunchSuccess(data);
      if(landSuccess === null && launchYear === 0){
      successLaunchFilter(data)
        .then((res) => res.json())
        .then(
          (result) => {
            setCards(result);
          },
          (error) => {
            console.error(error);
          }
        );
    }
    } else if(type === "Land Success"){
      setLandSuccess(data)
      if(launchSuccess !== null){
      successLaunchLand(launchSuccess, data)
      .then((res) => res.json())
        .then(
          (result) => {
            setCards(result);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }else if(type === "Launch Years"){
      setLaunchYear(parseInt(value))
      if(launchSuccess && landSuccess !== null){
      allFilters(launchSuccess, landSuccess, launchYear )
      .then((res) => res.json())
        .then(
          (result) => {
            setCards(result);
          },
          (error) => {
            console.error(error);
          }
        );
      }
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
