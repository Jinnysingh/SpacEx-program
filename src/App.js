import React, { useEffect, useState } from "react";
import LaunchFilter from "./LaunchFilter/LaunchFilter.jsx";
import LaunchCard from "./LaunchCards/LaunchCards.jsx";
import LazyLoad from "react-lazyload";
import { allData } from "./api.js";
import { successLaunchFilter} from "./api.js";
import "./App.css";

function App() {
  const [allCard, setCards] = useState([]);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    allData
      .then((res) => res.json())
      .then(
        (result) => {
          setCards(result);
          setLoader(false)
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  const changeUrl=(link)=>{
    let history = window.history
    history.pushState({}, "", link)
  }

  const handleFilters = (event, type) => {
    let cards
    let value = event.target.innerText;
    let data = value === "True" ? true : false || type === "launch_year" ?  parseInt(value) : type
      changeUrl(type)
        successLaunchFilter(data, type)
          .then((res) => res.json())
          .then(
            (result) => {
            if(type === "launch_success"){
              cards = result.filter(items =>{
                return items.launch_success === data
              })
            } else if(type === "land_success"){
              cards = result.filter(items =>{
                return items.land_success === data
              })
            } else if(type === "launch_year"){
              cards = result.filter(items =>{
                return parseInt(items.launch_year) === data
              })
            }
              setCards(cards);
              setLoader(false)
            },
            (error) => {
              console.error(error);
            }
          );
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <h4 className="text-left pt-20 pb-20">SpacEx Launch program</h4>
        <div className="row">
          <div className="col-md-3">
            <LaunchFilter handleFilters={handleFilters} />
          </div>
          <div className="col-md-9">
            {loading ? (
              <div className="text-left pt-20">Loading the Cards........</div>
            ) : (
              <LazyLoad height={200} offset={100}>
                <LaunchCard cardDetails={allCard} />
              </LazyLoad>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
